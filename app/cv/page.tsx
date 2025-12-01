export default function CV() {
  return (
    <main className="container">
      <div className="content">
        <h1 className="page-title">CV</h1>

        <section className="cv-section">
          <h2 className="cv-section-title">Experience</h2>

          <div className="cv-item">
            <div className="cv-item-header">
              <h3 className="cv-item-title">Software Engineer</h3>
              <time className="cv-item-date">2024 - Present</time>
            </div>
            <p className="cv-item-company">Your Company</p>
            <p className="cv-item-description">
              Working on AI safety research and building scalable systems.
              Developing tools and frameworks for better alignment.
            </p>
          </div>

          <div className="cv-item">
            <div className="cv-item-header">
              <h3 className="cv-item-title">Data Platform Engineer</h3>
              <time className="cv-item-date">2022 - 2024</time>
            </div>
            <p className="cv-item-company">Previous Company</p>
            <p className="cv-item-description">
              Built and maintained data infrastructure. Worked on ETL pipelines
              and data processing systems.
            </p>
          </div>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">Education</h2>

          <div className="cv-item">
            <div className="cv-item-header">
              <h3 className="cv-item-title">Master of Science in Computer Science</h3>
              <time className="cv-item-date">2023 - 2025</time>
            </div>
            <p className="cv-item-company">Your University</p>
            <p className="cv-item-description">
              Focus on machine learning, artificial intelligence, and distributed
              systems.
            </p>
          </div>

          <div className="cv-item">
            <div className="cv-item-header">
              <h3 className="cv-item-title">Bachelor of Science in Computer Science</h3>
              <time className="cv-item-date">2018 - 2022</time>
            </div>
            <p className="cv-item-company">Previous University</p>
            <p className="cv-item-description">
              Graduated with honors. Focus on software engineering and algorithms.
            </p>
          </div>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-category-title">Languages</h3>
              <p>JavaScript, TypeScript, Python, Go, Rust</p>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Technologies</h3>
              <p>React, Next.js, Node.js, PostgreSQL, Redis</p>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Tools</h3>
              <p>Git, Docker, Kubernetes, AWS, GCP</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
