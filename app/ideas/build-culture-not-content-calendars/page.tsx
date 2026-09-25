import type { Metadata } from "next";
import IdeaArticleLayout from "@/components/IdeaArticleLayout";
import { getIdea } from "@/lib/ideas";

const idea = getIdea("build-culture-not-content-calendars")!;

export const metadata: Metadata = {
  title: `${idea.title} — sid`,
  description: idea.summary,
};

export default function BuildCulturePage() {
  return (
    <IdeaArticleLayout title={idea.title} meta={`${idea.category} · ${idea.date}`}>
      <p>
        a lot of “marketing” on the internet is people chasing the algorithm:
        optimizing posting times, chasing trends, and filling a content
        calendar. they are addicted to the feed.
      </p>

      <p>
        the best brands do not feed an algorithm. they build culture.
      </p>

      <p>
        nike rarely needs to talk about shoe soles or compare itself with
        reebok. it honors great athletes and tells stories that make you feel
        something. red bull sells extreme sports and adrenaline, not an energy
        drink.
      </p>

      <blockquote>
        a product tells you what it does. a world gives you something to belong
        to.
      </blockquote>

      <p>
        when people think about these brands, they do not recall a list of
        features. they feel something. that is world building: create a
        character, a set of values, and a story people want to carry with them.
      </p>
    </IdeaArticleLayout>
  );
}
