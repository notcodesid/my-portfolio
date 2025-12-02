export default function CV() {
  const projects = [
    {
      name: "instant interior",
      link: "https://www.instantinterior.in/",
      description: "restful api using express, typescript, and prisma orm for room transformation services with jwt, google oauth, and ai integrations"
    },
    {
      name: "travel homes",
      link: "https://travelhomes-frontend.vercel.app/",
      description: "next.js 15 vacation rental platform with typescript, tailwind, jwt auth, dynamic pricing and booking flow"
    },
    {
      name: "blogging website",
      link: "https://sidblogs.vercel.app/",
      description: "restful api using hono and prisma with postgresql, react frontend with dynamic blog editor"
    },
    {
      name: "learn web dev",
      link: "https://learnwebdev.vercel.app/",
      description: "interactive learning platform with html canvas mind map, progress tracker, and built-in code editor"
    }
  ];

  return (
    <main className="pb-16">
      <div className="text-base leading-relaxed">
        <h1 className="text-xl font-semibold mb-2 text-foreground">cv</h1>
        <p className="text-muted mb-8">full-stack engineer with 1+ years of experience</p>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4 text-foreground">
            experience
          </h2>

          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-1 gap-4">
              <h3 className="font-medium text-foreground">
                front-end intern
              </h3>
              <time className="text-muted text-sm whitespace-nowrap">
                sep 2024 - nov 2024
              </time>
            </div>
            <p className="text-accent mb-1">kidjig</p>
            <ul className="text-muted text-sm space-y-1">
              <li>• developed and maintained the project using typescript and javascript</li>
              <li>• implemented ui designs using tailwind css and similar frameworks</li>
              <li>• fixed bugs and improved features to enhance website functionality</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4 text-foreground">
            projects
          </h2>

          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index}>
                <a
                  href={project.link}
                  className="text-accent hover:underline transition-colors font-medium"
                >
                  {project.name}
                </a>
                <p className="text-muted text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4 text-foreground">skills</h2>
          <div className="space-y-2">
            <div>
              <span className="text-foreground text-sm">technical: </span>
              <span className="text-muted text-sm">javascript, typescript, react, next.js, tailwind css, prisma, mongodb, docker</span>
            </div>
            <div>
              <span className="text-foreground text-sm">tools: </span>
              <span className="text-muted text-sm">git, vs code, postman, figma</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4 text-foreground">contact</h2>
          <div className="flex gap-4 text-sm">
            <a href="mailto:notcodesid@gmail.com" className="text-accent hover:underline">email</a>
            <a href="https://linkedin.com/in/sidharthh-pandro" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">linkedin</a>
            <a href="https://github.com/notcodesid" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">github</a>
            <a href="https://x.com/notcodesid" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">x</a>
          </div>
        </section>
      </div>
    </main>
  );
}
