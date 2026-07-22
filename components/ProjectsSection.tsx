const projects = [
  {
    name: "friday",
    link: "https://friday-q8eb.vercel.app/",
    description: "is an AI-powered marketing operator.",
  },
  {
    name: "proven",
    link: "https://tryproven.fun",
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
    name: "learn to code",
    link: "https://learntocode.notcodesid.com",
    description: "a learn-to-code platform for beginners",
  },
];

export default function ProjectsSection({
  className,
  headingTag = "h2",
}: {
  className?: string;
  headingTag?: "h1" | "h2";
}) {
  const Heading = headingTag;
  const headingClassName =
    headingTag === "h1"
      ? "text-xl font-semibold mb-4 text-foreground"
      : "text-lg font-semibold mb-4 text-foreground";

  return (
    <section className={className}>
      <Heading className={headingClassName}>
        stuff i&apos;ve built
      </Heading>

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
