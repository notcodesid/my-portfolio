export type ContributionSource = "github" | "fallback";

export interface ContributionDay {
  date: string;
  contributionCount: number;
  contributionLevel: number;
  weekday: number;
}

export interface ContributionWeek {
  firstDay: string;
  contributionDays: ContributionDay[];
}

export interface ContributionMonth {
  name: string;
  year: number;
  totalWeeks: number;
}

export interface ContributionCalendarData {
  username: string;
  totalContributions: number;
  months: ContributionMonth[];
  weeks: ContributionWeek[];
  availableYears: number[];
  selectedYear: number;
  source: ContributionSource;
  fetchedAt: string;
}

interface GraphQLContributionDay {
  contributionCount: number;
  contributionLevel: string;
  date: string;
  weekday: number;
}

interface GraphQLContributionWeek {
  firstDay: string;
  contributionDays: GraphQLContributionDay[];
}

interface GraphQLContributionMonth {
  name: string;
  year: number;
  totalWeeks: number;
}

interface GraphQLContributionCalendar {
  totalContributions: number;
  months: GraphQLContributionMonth[];
  weeks: GraphQLContributionWeek[];
}

interface PublicContributionDay {
  count?: number;
  date?: string;
  level?: number | string;
}

interface PublicContributionPayload {
  contributions?: PublicContributionDay[];
  total?: Record<string, number>;
}

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  timeZone: "UTC",
});

function clampLevel(level: number) {
  return Math.max(0, Math.min(4, level));
}

function normalizeContributionLevel(level: number | string | undefined) {
  if (typeof level === "number") {
    return clampLevel(level);
  }

  switch (level) {
    case "FIRST_QUARTILE":
      return 1;
    case "SECOND_QUARTILE":
      return 2;
    case "THIRD_QUARTILE":
      return 3;
    case "FOURTH_QUARTILE":
      return 4;
    default:
      return 0;
  }
}

function parseUtcDate(date: string) {
  return new Date(`${date}T00:00:00.000Z`);
}

function toDateOnly(date: Date) {
  return date.toISOString().slice(0, 10);
}

function toWeekday(date: Date) {
  const weekday = date.getUTCDay();
  return weekday === 0 ? 7 : weekday;
}

function getWeekStart(date: Date) {
  const weekStart = new Date(date);
  weekStart.setUTCDate(weekStart.getUTCDate() - (toWeekday(date) - 1));
  return weekStart;
}

function sortContributionDays(days: ContributionDay[]) {
  return [...days].sort((left, right) => left.weekday - right.weekday);
}

function buildMonthsFromWeeks(weeks: ContributionWeek[]) {
  const months: ContributionMonth[] = [];
  let lastMonthKey = "";

  for (const week of weeks) {
    const firstDay = parseUtcDate(week.firstDay);
    const name = monthFormatter.format(firstDay).toLowerCase();
    const year = firstDay.getUTCFullYear();
    const monthKey = `${year}-${firstDay.getUTCMonth()}`;

    if (lastMonthKey === monthKey) {
      const lastMonth = months.at(-1);

      if (lastMonth) {
        lastMonth.totalWeeks += 1;
      }

      continue;
    }

    months.push({
      name,
      year,
      totalWeeks: 1,
    });
    lastMonthKey = monthKey;
  }

  return months;
}

function buildWeeksFromPublicDays(days: ContributionDay[]) {
  const weeksByStart = new Map<string, Map<number, ContributionDay>>();

  for (const day of days) {
    const currentDate = parseUtcDate(day.date);
    const weekStart = toDateOnly(getWeekStart(currentDate));
    const currentWeek = weeksByStart.get(weekStart) ?? new Map<number, ContributionDay>();

    currentWeek.set(day.weekday, day);
    weeksByStart.set(weekStart, currentWeek);
  }

  return [...weeksByStart.entries()]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([firstDay, contributionDaysMap]) => {
      const weekStart = parseUtcDate(firstDay);

      return {
        firstDay,
        contributionDays: Array.from({ length: 7 }, (_, index) => {
          const weekday = index + 1;
          const existingDay = contributionDaysMap.get(weekday);

          if (existingDay) {
            return existingDay;
          }

          const date = new Date(weekStart);
          date.setUTCDate(weekStart.getUTCDate() + index);

          return {
            date: toDateOnly(date),
            contributionCount: 0,
            contributionLevel: 0,
            weekday,
          };
        }),
      };
    });
}

export function normalizeGraphQLCalendar(
  username: string,
  calendar: GraphQLContributionCalendar,
  selectedYear: number,
  availableYears: number[],
): ContributionCalendarData {
  return {
    username,
    totalContributions: calendar.totalContributions,
    months: calendar.months.map((month) => ({
      name: month.name.slice(0, 3).toLowerCase(),
      totalWeeks: month.totalWeeks,
      year: month.year,
    })),
    weeks: calendar.weeks.map((week) => ({
      firstDay: week.firstDay,
      contributionDays: sortContributionDays(
        week.contributionDays.map((day) => ({
          date: day.date,
          contributionCount: day.contributionCount,
          contributionLevel: normalizeContributionLevel(day.contributionLevel),
          weekday: day.weekday,
        })),
      ),
    })),
    availableYears,
    selectedYear,
    source: "github",
    fetchedAt: new Date().toISOString(),
  };
}

export function normalizePublicCalendar(
  username: string,
  payload: PublicContributionPayload,
  selectedYear: number,
  availableYears: number[],
): ContributionCalendarData {
  const days = (payload.contributions ?? [])
    .filter((day): day is Required<Pick<PublicContributionDay, "date">> & PublicContributionDay => {
      return typeof day.date === "string";
    })
    .map((day) => {
      const currentDate = parseUtcDate(day.date);

      return {
        date: day.date,
        contributionCount: typeof day.count === "number" ? day.count : 0,
        contributionLevel: normalizeContributionLevel(day.level),
        weekday: toWeekday(currentDate),
      };
    });

  const weeks = buildWeeksFromPublicDays(days);
  const totalFromPayload =
    payload.total &&
    Object.values(payload.total).reduce((sum, value) => sum + value, 0);

  return {
    username,
    totalContributions:
      typeof totalFromPayload === "number"
        ? totalFromPayload
        : days.reduce((sum, day) => sum + day.contributionCount, 0),
    months: buildMonthsFromWeeks(weeks),
    weeks,
    availableYears,
    selectedYear,
    source: "fallback",
    fetchedAt: new Date().toISOString(),
  };
}

export function extractAvailableYears(payload: PublicContributionPayload) {
  const years = new Set<number>();

  for (const key of Object.keys(payload.total ?? {})) {
    const parsedYear = Number.parseInt(key, 10);

    if (Number.isInteger(parsedYear)) {
      years.add(parsedYear);
    }
  }

  for (const day of payload.contributions ?? []) {
    if (typeof day.date !== "string") {
      continue;
    }

    years.add(parseUtcDate(day.date).getUTCFullYear());
  }

  return [...years].sort((left, right) => right - left);
}
