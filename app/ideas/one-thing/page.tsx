import type { Metadata } from "next";
import IdeaArticleLayout from "@/components/IdeaArticleLayout";
import { getIdea } from "@/lib/ideas";

const idea = getIdea("one-thing")!;

export const metadata: Metadata = {
  title: `${idea.title} — sid`,
  description: idea.summary,
};

export default function OneThingPage() {
  return (
    <IdeaArticleLayout title={idea.title} meta={`${idea.category} · ${idea.date}`}>
      <p>
        do not multitask. i&apos;m saying this again and again because
        i&apos;ve lived it — just focus on one thing.
      </p>

      <p>
        multitasking sounds good. it sounds like a very productive thing. but
        at the fundamental level you&apos;re just doing a lot of things and
        thinking you&apos;re making progress somehow. early in my career i
        tried a lot of different things at the same time and got no results
        from any of them.
      </p>

      <p>
        all the great people i&apos;ve seen, from elon to steve, are very
        focused on one thing at a time.
      </p>

      <p>
        i was completely wrong about to-do lists. having one feels like
        productivity, but it&apos;s the same trap. you shouldn&apos;t have a
        to-do list — you should have one thing, and do it no matter what
        adversity comes. focus very, very, very focused on that one thing for
        more than a decade.
      </p>

      <p>
        these are just my theories that i&apos;m trying out, so take them as
        that. but figure out something you want that you can do 25 hours in
        a day. that&apos;s how it goes. i think that&apos;s how you get to
        greatness.
      </p>
    </IdeaArticleLayout>
  );
}
