import { NextResponse } from "next/server";
import {
  extractAvailableYears,
  normalizeGraphQLCalendar,
  normalizePublicCalendar,
  type ContributionCalendarData,
} from "@/lib/github-contributions";

export const dynamic = "force-dynamic";

const DEFAULT_USERNAME = "notcodesid";

const contributionCalendarQuery = `
  query ContributionCalendar($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          months {
            name
            totalWeeks
            year
          }
          weeks {
            firstDay
            contributionDays {
              contributionCount
              contributionLevel
              date
              weekday
            }
          }
        }
        contributionYears
      }
    }
  }
`;

interface GraphQLResponse {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          totalContributions: number;
          months: Array<{
            name: string;
            totalWeeks: number;
            year: number;
          }>;
          weeks: Array<{
            firstDay: string;
            contributionDays: Array<{
              contributionCount: number;
              contributionLevel: string;
              date: string;
              weekday: number;
            }>;
          }>;
        };
        contributionYears?: number[];
      };
    };
  };
  errors?: Array<{ message: string }>;
}

interface YearSelection {
  availableYears: number[];
  selectedYear: number;
}

function getRequestedYear(request: Request) {
  const { searchParams } = new URL(request.url);
  const requestedYear = Number.parseInt(searchParams.get("year") ?? "", 10);

  return Number.isInteger(requestedYear)
    ? requestedYear
    : new Date().getUTCFullYear();
}

function getDateRangeForYear(year: number) {
  const currentDate = new Date();
  const currentYear = currentDate.getUTCFullYear();
  const rangeStart = new Date(Date.UTC(year, 0, 1, 0, 0, 0));
  const rangeEnd =
    year === currentYear
      ? currentDate
      : new Date(Date.UTC(year, 11, 31, 23, 59, 59, 999));

  return {
    from: rangeStart.toISOString(),
    to: rangeEnd.toISOString(),
  };
}

function resolveSelectedYear(years: number[], requestedYear: number) {
  if (years.includes(requestedYear)) {
    return requestedYear;
  }

  return years[0] ?? requestedYear;
}

async function fetchGitHubCalendar(
  username: string,
  token: string,
  requestedYear: number,
): Promise<ContributionCalendarData> {
  const { from, to } = getDateRangeForYear(requestedYear);

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "notcodesid-portfolio",
    },
    body: JSON.stringify({
      query: contributionCalendarQuery,
      variables: {
        from,
        to,
        username,
      },
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`GitHub GraphQL request failed with ${response.status}`);
  }

  const payload = (await response.json()) as GraphQLResponse;

  if (payload.errors?.length) {
    throw new Error(payload.errors[0]?.message ?? "GitHub GraphQL request failed");
  }

  const calendar = payload.data?.user?.contributionsCollection?.contributionCalendar;
  const availableYears =
    payload.data?.user?.contributionsCollection?.contributionYears ?? [];

  if (!calendar) {
    throw new Error("GitHub contribution calendar was empty");
  }

  const selectedYear = resolveSelectedYear(availableYears, requestedYear);

  if (selectedYear !== requestedYear && availableYears.length > 0) {
    return fetchGitHubCalendar(username, token, selectedYear);
  }

  return normalizeGraphQLCalendar(
    username,
    calendar,
    selectedYear,
    availableYears,
  );
}

async function fetchFallbackYearSelection(
  username: string,
  requestedYear: number,
): Promise<YearSelection> {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(`Public contributions fallback failed with ${response.status}`);
  }

  const payload = (await response.json()) as Parameters<typeof normalizePublicCalendar>[1];
  const availableYears = extractAvailableYears(payload);

  return {
    availableYears,
    selectedYear: resolveSelectedYear(availableYears, requestedYear),
  };
}

async function fetchFallbackCalendar(
  username: string,
  requestedYear: number,
): Promise<ContributionCalendarData> {
  const { availableYears, selectedYear } = await fetchFallbackYearSelection(
    username,
    requestedYear,
  );
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=${selectedYear}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(`Public contributions fallback failed with ${response.status}`);
  }

  const payload = (await response.json()) as Parameters<typeof normalizePublicCalendar>[1];

  return normalizePublicCalendar(
    username,
    payload,
    selectedYear,
    availableYears,
  );
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username")?.trim() || DEFAULT_USERNAME;
  const requestedYear = getRequestedYear(request);
  const token =
    process.env.GITHUB_TOKEN ||
    process.env.GITHUB_PAT ||
    process.env.GH_TOKEN;

  try {
    let calendar: ContributionCalendarData;

    if (token) {
      try {
        calendar = await fetchGitHubCalendar(username, token, requestedYear);
      } catch {
        calendar = await fetchFallbackCalendar(username, requestedYear);
      }
    } else {
      calendar = await fetchFallbackCalendar(username, requestedYear);
    }

    return NextResponse.json(calendar, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch {
    return NextResponse.json(
      {
        error: "Unable to load github contributions right now.",
      },
      {
        status: 503,
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      },
    );
  }
}
