export default function Things() {
  const projects = [
    {
      title: "Project One",
      description: "A description of your interesting project and what it does...",
      link: "#",
      tech: ["React", "TypeScript", "Node.js"],
    },
    {
      title: "Project Two",
      description: "Another cool project you've built or contributed to...",
      link: "#",
      tech: ["Python", "Machine Learning", "TensorFlow"],
    },
  ];

  return (
    <main className="container">
      <div className="content">
        <h1 className="page-title">Things I've Built</h1>
        <p className="page-description">Projects and experiments.</p>

        <div className="projects-list">
          {projects.map((project, index) => (
            <article key={index} className="project-item">
              <h2 className="project-title">
                <a href={project.link}>{project.title}</a>
              </h2>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
