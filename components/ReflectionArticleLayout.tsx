import type { ReactNode } from "react";
import ThoughtsBackLink from "@/components/ThoughtsBackLink";

type ReflectionArticleLayoutProps = {
  title: string;
  meta: string;
  children: ReactNode;
};

export default function ReflectionArticleLayout({
  title,
  meta,
  children,
}: ReflectionArticleLayoutProps) {
  return (
    <main className="pb-20">
      <ThoughtsBackLink href="/reflection" label="reflection" />

      <article className="mx-auto w-full max-w-[32rem] pt-24 sm:pt-28">
        <header className="mb-10">
          <h1 className="mb-2 text-[2rem] leading-none font-semibold text-white">
            {title}
          </h1>
          <p className="text-sm font-semibold text-white/45">{meta}</p>
        </header>

        <div className="space-y-8 text-[1.02rem] leading-9 font-medium text-white/62 [&_blockquote]:border-l [&_blockquote]:border-white/20 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-white/70 [&_em]:text-white/88 [&_strong]:text-white/88 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          {children}
        </div>
      </article>
    </main>
  );
}
