import ProjectsSection from "@/components/ProjectsSection";

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

export default function CV() {
  return (
    <main className="pb-16">
      <div className="text-base leading-relaxed">
        <h1 className="text-xl font-semibold mb-2 text-foreground">cv</h1>
        <p className="text-muted mb-8">
          full-stack blockchain engineer with 2+ years of experience, looking
          for full-stack roles
        </p>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4 text-foreground">
            cool places I worked at
          </h2>

          <div className="space-y-6">
            {experiences.map((experience) => (
              <div key={`${experience.company}-${experience.role}`}>
                <div className="flex justify-between items-baseline mb-1 gap-4">
                  <h3 className="font-medium text-foreground">
                    {experience.role}
                  </h3>
                  <time className="text-muted text-sm whitespace-nowrap">
                    {experience.dates}
                  </time>
                </div>

                <p className="text-accent mb-1">
                  {experience.company}{" "}
                  <span className="text-muted text-sm">({experience.location})</span>
                </p>

                <ul className="text-muted text-sm space-y-1">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <ProjectsSection className="mb-10" />

        <section>
          <h2 className="text-lg font-semibold mb-4 text-foreground">
            contact
          </h2>
          <div className="flex gap-4 text-sm">
            <a
              href="mailto:notcodesid@gmail.com"
              className="text-accent hover:underline"
            >
              email
            </a>
            <a
              href="https://linkedin.com/in/sidharthh-pandro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              linkedin
            </a>
            <a
              href="https://github.com/notcodesid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              github
            </a>
            <a
              href="https://x.com/notcodesid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              x
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
