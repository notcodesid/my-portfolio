import ThoughtsBackLink from "@/components/ThoughtsBackLink";

const experiences = [
  {
    role: "software engineer",
    company: "supernormal",
    location: "remote",
    dates: "dec 2025 - mar 2026",
    bullets: [
      "discovered arbitrage opportunities across prediction markets",
      "built and tested automated trading strategies",
      "optimized execution using real market data and team feedback",
    ],
  },
  {
    role: "front-end intern",
    company: "kidjig",
    location: "remote",
    dates: "sep 2024 - nov 2024",
    bullets: [
      "developed and maintained the project using typescript and javascript",
      "implemented ui designs using tailwind css and similar frameworks",
      "fixed bugs and improved features to enhance website functionality",
    ],
  },
];

const projects = [
  {
    name: "friday",
    link: "https://friday-q8eb.vercel.app/",
    description: "ai-powered marketing operator",
  },
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
    name: "travel homes",
    link: "https://travelhomes-frontend.vercel.app/",
    description: "airbnb-for-rvs style demo for camper van road trips in india",
  },
];

const links = [
  { label: "email", href: "mailto:notcodesid@gmail.com" },
  {
    label: "linkedin",
    href: "https://linkedin.com/in/sidharthh-pandro",
  },
  { label: "github", href: "https://github.com/notcodesid" },
  { label: "x", href: "https://x.com/notcodesid" },
];

export default function CV() {
  return (
    <main className="flex min-h-[calc(100dvh-5rem)] items-center">
      <section className="w-full">
        <div className="grid gap-10 sm:gap-12">
          <ThoughtsBackLink />

          <div className="grid gap-3">
            <h1 className="text-[2rem] leading-none font-semibold text-white">
              cv
            </h1>
            <p className="max-w-xl text-[0.95rem] leading-relaxed font-semibold text-white">
              full-stack blockchain engineer with 2+ years of experience.
            </p>
          </div>

          <div className="grid gap-8 sm:gap-10">
            <div className="grid gap-2 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-8">
              <p className="text-[0.95rem] leading-none font-semibold text-white">
                summary/
              </p>
              <p className="max-w-xl text-[0.95rem] leading-relaxed font-semibold text-white">
                frontend-heavy product engineer building across web, mobile,
                design systems, and blockchain apps.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-8">
              <p className="text-[0.95rem] leading-none font-semibold text-white">
                experience/
              </p>
              <div className="grid gap-5 sm:gap-6">
                {experiences.map((experience) => (
                  <div
                    key={`${experience.company}-${experience.role}`}
                    className="max-w-xl text-[0.95rem] leading-relaxed font-semibold text-white"
                  >
                    <p>
                      {experience.role} at {experience.company}{" "}
                      <span className="text-white/72">
                        ({experience.location}, {experience.dates})
                      </span>
                    </p>
                    <ul className="mt-2 space-y-1 text-white/72">
                      {experience.bullets.map((bullet) => (
                        <li key={bullet}>- {bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-8">
              <p className="text-[0.95rem] leading-none font-semibold text-white">
                selected work/
              </p>
              <div className="grid gap-4 sm:gap-5">
                {projects.map((project) => (
                  <div
                    key={project.name}
                    className="max-w-xl text-[0.95rem] leading-relaxed font-semibold text-white"
                  >
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
                ))}
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-8">
              <p className="text-[0.95rem] leading-none font-semibold text-white">
                links/
              </p>
              <div className="max-w-xl text-[0.95rem] leading-relaxed font-semibold text-white">
                {links.map((link, index) => (
                  <span key={link.label}>
                    {index > 0 ? ", " : null}
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="underline decoration-white/35 underline-offset-4 transition hover:decoration-white"
                    >
                      {link.label}
                    </a>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
