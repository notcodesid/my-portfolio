import type { Metadata } from "next";
import IdeaArticleLayout from "@/components/IdeaArticleLayout";
import { getIdea } from "@/lib/ideas";

const idea = getIdea("stepps")!;

const steps = [
  {
    number: "1",
    title: "social currency",
    body: "people share what makes them look good. make following you feel like good taste.",
  },
  {
    number: "2",
    title: "triggers",
    body: "people share what they keep bumping into. tie yourself to one everyday thing so they think of you without trying.",
  },
  {
    number: "3",
    title: "emotion",
    body: "people share what makes them feel something strong: humor, awe, excitement, even anger. boring never travels.",
  },
  {
    number: "4",
    title: "public",
    body: "people copy what they can see. if engaging with you is visible, others want in. this is our whole thesis.",
  },
  {
    number: "5",
    title: "practical value",
    body: "people pass on what helps. teach one useful thing clearly and it gets sent from person to person.",
  },
  {
    number: "6",
    title: "stories",
    body: "people forget points but keep stories. wrap the message inside a moment so it cannot fall out.",
  },
];

export const metadata: Metadata = {
  title: `${idea.title} — sid`,
  description: idea.summary,
};

export default function SteppsPage() {
  return (
    <IdeaArticleLayout title="steal this marketing framework: stepps" meta={`${idea.category} · ${idea.date}`}>
      <p>
        six principles that explain why some ideas spread and others disappear.
      </p>

      <ol className="!mt-10 space-y-8">
        {steps.map((step) => (
          <li key={step.number} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4">
            <span className="pt-0.5 text-sm font-semibold text-white/38">
              {step.number.padStart(2, "0")}/
            </span>
            <div>
              <h2 className="mb-2 text-[1.08rem] font-semibold text-white/90">
                {step.title}
              </h2>
              <p>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </IdeaArticleLayout>
  );
}
