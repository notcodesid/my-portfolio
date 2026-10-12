export type Idea = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  category: string;
  date: string;
};

export const ideas: Idea[] = [
  {
    slug: "competition",
    number: "01",
    title: "competition",
    summary:
      "competition makes you fight over the same prize instead of finding what is uniquely yours.",
    category: "life & work",
    date: "september 2026",
  },
  {
    slug: "stepps",
    number: "02",
    title: "stepps",
    summary:
      "six reasons ideas travel: social currency, triggers, emotion, public, practical value, and stories.",
    category: "brand & marketing",
    date: "september 2026",
  },
  {
    slug: "build-culture-not-content-calendars",
    number: "03",
    title: "build culture, not content calendars",
    summary:
      "the best brands do not feed an algorithm. they build a world people want to belong to.",
    category: "brand & marketing",
    date: "september 2026",
  },
  {
    slug: "one-thing",
    number: "06",
    title: "one thing",
    summary:
      "do not multitask. find something you can do 25 hours a day — that's how you get to greatness.",
    category: "life & work",
    date: "october 2026",
  },
];

export function getIdea(slug: string) {
  return ideas.find((idea) => idea.slug === slug);
}
