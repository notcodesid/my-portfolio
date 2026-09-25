import type { Metadata } from "next";
import Link from "next/link";
import IdeasBackLink from "@/components/IdeasBackLink";
import { ideas } from "@/lib/ideas";

export const metadata: Metadata = {
  title: "ideas — sid",
  description: "Patterns and frameworks I want to keep thinking about.",
};

export default function IdeasPage() {
  const featured = ideas[0];

  return (
    <main className="pb-24">
      <IdeasBackLink />

      <header className="pt-16 sm:pt-20">
        <h1 className="text-[2.75rem] leading-none font-semibold tracking-[-0.025em] text-white sm:text-[3.75rem]">
          ideas
        </h1>
        <p className="mt-5 max-w-[34rem] text-[1.02rem] leading-relaxed font-medium text-white/62">
          things i find on the internet, notice in the world, or cannot stop
          thinking about — compressed into something worth returning to.
        </p>
      </header>

      <section aria-labelledby="featured-idea" className="mt-16 sm:mt-20">
        <p
          id="featured-idea"
          className="mb-4 text-sm font-semibold text-white/45"
        >
          currently thinking about
        </p>
        <Link
          href={`/ideas/${featured.slug}`}
          className="group block rounded-xl border border-white/14 p-6 transition hover:border-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:p-8"
        >
          <p className="max-w-[34rem] text-[1.2rem] leading-relaxed font-medium text-white/76 sm:text-[1.35rem]">
            {featured.summary}
          </p>
          <div className="mt-8 flex items-end justify-between gap-6 border-t border-white/10 pt-5">
            <h2 className="text-[1rem] font-semibold text-white underline decoration-white/30 underline-offset-4 transition group-hover:decoration-white">
              {featured.title}
            </h2>
            <span aria-hidden="true" className="text-white/45 transition group-hover:translate-x-1 group-hover:text-white">
              →
            </span>
          </div>
        </Link>
      </section>

      <section aria-labelledby="all-ideas" className="mt-20 sm:mt-24">
        <div className="mb-8 flex items-baseline justify-between border-b border-white/14 pb-4">
          <h2 id="all-ideas" className="text-[1.5rem] font-semibold text-white">
            all ideas
          </h2>
          <p className="text-sm font-semibold text-white/42">
            {String(ideas.length).padStart(2, "0")}
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold text-white/45">
            brand &amp; marketing
          </h3>
          <ol>
            {ideas.map((idea) => (
              <li key={idea.slug} className="border-t border-white/10 first:border-t-0">
                <Link
                  href={`/ideas/${idea.slug}`}
                  className="group grid min-h-16 grid-cols-[2.75rem_minmax(0,1fr)_auto] items-center gap-3 py-4 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <span className="text-sm font-semibold text-white/35">
                    {idea.number}
                  </span>
                  <span className="text-[1rem] font-semibold text-white/82 transition group-hover:text-white">
                    {idea.title}
                  </span>
                  <span aria-hidden="true" className="text-white/32 transition group-hover:translate-x-1 group-hover:text-white">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
