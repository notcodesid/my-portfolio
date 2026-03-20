"use client";

import { startTransition, useEffect, useState } from "react";
import type {
  ContributionCalendarData,
  ContributionDay,
  ContributionWeek,
} from "@/lib/github-contributions";

const cellSize = 12;
const cellGap = 4;
const pollIntervalMs = 5 * 60 * 1000;
const dayLabels = ["mon", "", "wed", "", "fri", "", ""];
const levelColors = ["#2a2638", "#163b22", "#1f6f38", "#2ea043", "#56d364"];
const shortDateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "short",
  timeZone: "UTC",
  year: "numeric",
});

function formatContributionLabel(day: ContributionDay) {
  const date = new Date(`${day.date}T00:00:00.000Z`);

  if (Number.isNaN(date.getTime())) {
    return "loading contribution data";
  }

  const label = shortDateFormatter.format(date);
  const suffix = day.contributionCount === 1 ? "contribution" : "contributions";

  return `${label}: ${day.contributionCount} ${suffix}`;
}

function createSkeletonWeeks(): ContributionWeek[] {
  return Array.from({ length: 53 }, (_, weekIndex) => ({
    firstDay: `week-${weekIndex}`,
    contributionDays: Array.from({ length: 7 }, (_, dayIndex) => ({
      date: `day-${weekIndex}-${dayIndex}`,
      contributionCount: 0,
      contributionLevel: 0,
      weekday: dayIndex + 1,
    })),
  }));
}

export default function GitHubContributionHeatmap({
  username,
}: {
  username: string;
}) {
  const [data, setData] = useState<ContributionCalendarData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState(() =>
    new Date().getUTCFullYear(),
  );

  useEffect(() => {
    let isActive = true;

    const loadCalendar = async () => {
      try {
        const response = await fetch(
          `/api/github-contributions?username=${encodeURIComponent(username)}&year=${selectedYear}`,
          {
            cache: "no-store",
          },
        );

        if (!response.ok) {
          throw new Error("Unable to load github activity");
        }

        const payload = (await response.json()) as ContributionCalendarData;

        if (!isActive) {
          return;
        }

        setData(payload);
        setError(null);

        if (payload.selectedYear !== selectedYear) {
          setSelectedYear(payload.selectedYear);
        }
      } catch {
        if (!isActive) {
          return;
        }

        setError("github activity is unavailable right now");
      }
    };

    void loadCalendar();

    const intervalId = window.setInterval(() => {
      void loadCalendar();
    }, pollIntervalMs);

    return () => {
      isActive = false;
      window.clearInterval(intervalId);
    };
  }, [selectedYear, username]);

  const weeks = data?.weeks ?? createSkeletonWeeks();
  const months = data?.months ?? [];
  const totalContributions = data?.totalContributions ?? 0;
  const totalWidth = weeks.length * (cellSize + cellGap) - cellGap;
  const availableYears = data?.availableYears ?? [selectedYear];

  return (
    <section className="flex-1 flex items-center py-10">
      <div className="w-full rounded-xl border border-[#302c44] bg-[#231f35]/70 p-4">
        <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-foreground">github activity</h2>
            <p className="text-xs text-muted">
              {data
                ? `${totalContributions.toLocaleString()} contributions in ${data.selectedYear}`
                : "loading contribution graph..."}
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <div className="flex flex-wrap gap-2">
              {availableYears.map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => {
                    if (year === selectedYear) {
                      return;
                    }

                    startTransition(() => {
                      setSelectedYear(year);
                    });
                  }}
                  className={`rounded-md border px-2 py-1 text-[11px] transition-colors ${
                    year === selectedYear
                      ? "border-accent text-accent"
                      : "border-[#302c44] text-muted hover:border-accent hover:text-accent"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            <p className="text-[11px] text-muted text-right">
              {!data
                ? "syncing..."
                : data.source === "github"
                  ? "live via github api"
                  : "public sync fallback"}
            </p>
          </div>
        </div>

        {error && !data ? (
          <p className="text-sm text-muted">{error}</p>
        ) : (
          <div className="overflow-x-auto pb-1">
            <div style={{ minWidth: `${totalWidth + 40}px` }}>
              {months.length > 0 ? (
                <div className="mb-3 flex gap-[4px] pl-9 text-[10px] text-muted">
                  {months.map((month) => (
                    <div
                      key={`${month.year}-${month.name}`}
                      style={{
                        width: `${month.totalWeeks * (cellSize + cellGap) - cellGap}px`,
                      }}
                    >
                      {month.name}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mb-3 h-4" />
              )}

              <div className="flex gap-2">
                <div className="w-7 shrink-0 pt-[1px] text-[10px] text-muted">
                  {dayLabels.map((label, index) => (
                    <div
                      key={`${label}-${index}`}
                      className="mb-[4px] flex h-[12px] items-center"
                    >
                      {label}
                    </div>
                  ))}
                </div>

                <div className="flex gap-[4px]">
                  {weeks.map((week) => (
                    <div key={week.firstDay} className="flex flex-col gap-[4px]">
                      {week.contributionDays.map((day) => (
                        <div
                          key={day.date}
                          title={formatContributionLabel(day)}
                          className="rounded-[3px] border border-black/10"
                          style={{
                            backgroundColor: levelColors[day.contributionLevel] ?? levelColors[0],
                            height: `${cellSize}px`,
                            width: `${cellSize}px`,
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-[11px] text-muted">
            {!data
              ? "loading recent github activity"
              : data.source === "github"
              ? "pulls fresh data from github on load and every 5 min"
              : "falls back to public data when no github token is set"}
          </p>

          <div className="flex items-center gap-2 text-[11px] text-muted">
            <span>less</span>
            {levelColors.map((color, index) => (
              <span
                key={`${color}-${index}`}
                className="block rounded-[3px] border border-black/10"
                style={{
                  backgroundColor: color,
                  height: `${cellSize}px`,
                  width: `${cellSize}px`,
                }}
              />
            ))}
            <span>more</span>
          </div>
        </div>
      </div>
    </section>
  );
}
