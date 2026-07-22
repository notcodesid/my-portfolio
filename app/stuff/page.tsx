import ThoughtsBackLink from "@/components/ThoughtsBackLink";

const projects = [
  {
    name: "proven",
    link: "https://tryproven.fun",
    description: "habit-tracking app that pays users for consistency",
  },
  {
    name: "instant interior",
    link: "https://www.instantinterior.ai/",
    description: "ai interior design tool for photoreal room transformations",
  },
  {
    name: "learn to code",
    link: "https://learntocode.notcodesid.com",
    description: "learn-to-code platform for beginners",
  },
];

export default function Stuff() {
  return (
    <main className="flex min-h-[calc(100dvh-5rem)] items-center">
      <section className="w-full">
        <div className="grid gap-10 sm:gap-12">
          <ThoughtsBackLink />

          <div className="grid gap-3">
            <h1 className="text-[2rem] leading-none font-semibold text-white">
              work
            </h1>
            <p className="max-w-xl text-[0.95rem] leading-relaxed font-semibold text-white">
              things i&apos;ve built
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className="grid gap-2 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-4"
              >
                <p className="text-[0.95rem] leading-none font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}/
                </p>

                <div className="max-w-xl text-[0.95rem] leading-relaxed font-semibold text-white">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-white/35 underline-offset-4 transition hover:decoration-white"
                  >
                    {project.name}
                  </a>{" "}
                  <span className="text-white/72">{project.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
