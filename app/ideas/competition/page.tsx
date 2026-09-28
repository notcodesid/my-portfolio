import type { Metadata } from "next";
import IdeaArticleLayout from "@/components/IdeaArticleLayout";
import { getIdea } from "@/lib/ideas";

const idea = getIdea("competition")!;

export const metadata: Metadata = {
  title: `${idea.title} — sid`,
  description: idea.summary,
};

export default function CompetitionPage() {
  return (
    <IdeaArticleLayout title={idea.title} meta={`${idea.category} · ${idea.date}`}>
      <p>
        growing up, we are taught that competition is good. it builds character.
        it is necessary. good marks make you feel important; low marks make you
        feel inferior. the whole system trains you to obsess over competing with
        someone else.
      </p>

      <p>
        in college, the game gets bigger, but everyone is still chasing the same
        grades and the same goals. then you enter the tech world and realize the
        game has grown again. the cage just got more expensive.
      </p>

      <p>everyone is chasing the same milestones:</p>

      <ul className="list-disc space-y-2 pl-6 marker:text-white/45">
        <li>a $300k-a-year remote job</li>
        <li>getting into yc</li>
        <li>raising venture money</li>
      </ul>

      <p>
        it is pure mimetic desire. we do not want these things because we care
        about them. we want them because everyone around us is chasing them.
      </p>

      <blockquote>
        competition makes you fight over the same prize instead of finding what
        is uniquely yours.
      </blockquote>
    </IdeaArticleLayout>
  );
}
