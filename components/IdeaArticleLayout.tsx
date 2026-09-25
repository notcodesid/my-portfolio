import type { ReactNode } from "react";
import IdeasBackLink from "@/components/IdeasBackLink";

type IdeaArticleLayoutProps = {
  title: string;
  meta: string;
  children: ReactNode;
};

export default function IdeaArticleLayout({
  title,
  meta,
  children,
}: IdeaArticleLayoutProps) {
  return (
    <main className="pb-20">
      <IdeasBackLink href="/ideas" label="all ideas" />

      <article className="mx-auto w-full max-w-[34rem] pt-20 sm:pt-24">
        <header className="mb-10 border-b border-white/12 pb-8">
          <p className="mb-4 text-sm font-semibold text-white/48">{meta}</p>
          <h1 className="text-[2.25rem] leading-[1.08] font-semibold tracking-[-0.02em] text-white sm:text-[2.75rem]">
            {title}
          </h1>
        </header>

        <div className="idea-prose space-y-6 text-[1.05rem] leading-[1.75] font-medium text-white/70">
          {children}
        </div>
      </article>
    </main>
  );
}
