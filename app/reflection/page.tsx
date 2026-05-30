import Link from "next/link";
import ThoughtsBackLink from "@/components/ThoughtsBackLink";

const posts = [
  {
    title: "boredom",
    category: "what boredom asks when there is nothing to consume",
    link: "/reflection/boredom",
  },
  {
    title: "give the idea five minutes",
    category: "thinking before dismissing things",
    link: "/reflection/give-the-idea-five-minutes",
  },
  {
    title: "hi",
    category: "showing the human behind Proven",
    link: "/reflection/hi",
  },
  {
    title: "the winner effect",
    category: "how small wins quietly change everything",
    link: "/reflection/winnereffect",
  },
  {
    title: "can you really code?",
    category: "thoughts on development skills",
    link: "/reflection/code",
  },
  {
    title: "transition from cursor to vscode",
    category: "developer tools",
    link: "/reflection/vscode",
  },
  {
    title: "my journal",
    category: "personal reflections",
    link: "/reflection/my-journal",
  },
  {
    title: "a day of 20 years old",
    category: "reflections on youth",
    link: "/reflection/day",
  },
  {
    title: "how to study 4 hours every day",
    category: "productivity tips",
    link: "/reflection/study",
  },
  {
    title: "how to get hired - sam altman",
    category: "career advice",
    link: "/reflection/hire",
  },
  {
    title: "generalists in the information age",
    category: "thoughts on career paths",
    link: "/reflection/generalists",
  },
];

export default function ReflectionPage() {
  return (
    <main className="flex min-h-[calc(100dvh-5rem)] items-center">
      <section className="w-full">
        <div className="grid gap-10 sm:gap-12">
          <ThoughtsBackLink />

          <div className="grid gap-3">
            <h1 className="text-[2rem] leading-none font-semibold text-white">
              reflection
            </h1>
            <p className="max-w-xl text-[0.95rem] leading-relaxed font-semibold text-white">
              notes, rants, misc - unstructured, mostly unfiltered
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6">
            {posts.map((post, index) => (
              <div
                key={post.link}
                className="grid gap-2 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-4"
              >
                <p className="text-[0.95rem] leading-none font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}/
                </p>

                <div className="max-w-xl text-[0.95rem] leading-relaxed font-semibold text-white">
                  <Link
                    href={post.link}
                    className="underline decoration-white/35 underline-offset-4 transition hover:decoration-white"
                  >
                    {post.title}
                  </Link>{" "}
                  <span className="text-white/72">{post.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
