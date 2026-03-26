const projects = [
  {
    name: "friday",
    link: "https://friday-q8eb.vercel.app/",
    description: "is an AI-powered marketing operator.",
  },
  {
    name: "proven",
    link: "https://tryproven.fun/",
    description:
      "a habit-tracking app that pays users for consistently completing daily habits or challenges",
  },
  {
    name: "instant interior",
    link: "https://www.instantinterior.ai/",
    description:
      "an ai-powered interior design tool that instantly transforms room and exterior photos into professional, photorealistic designs",
  },
  {
    name: "travel homes",
    link: "https://travelhomes-frontend.vercel.app/",
    description:
      "a demo site for an Indian platform where you can rent fully equipped camper vans, caravans, and motorhomes for road trips, basically Airbnb for RVs in India",
  },
];

export default function ProjectsSection({
  className,
}: {
  className?: string;
}) {
  return (
    <section className={className}>
      <h2 className="text-lg font-semibold mb-4 text-foreground">
        stuff i&apos;ve built
      </h2>

      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.name}>
            <p className="text-muted text-sm">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline transition-colors font-medium"
              >
                {project.name}
              </a>{" "}
              - {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
