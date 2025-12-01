export default function Home() {
  return (
    <main className="container">
      <div className="content">
        <p className="intro">
          Hi! I'm <strong>Your Name</strong>, a software engineer, ai enthusiast, football nerd and more.
        </p>

        <p>
          I'm currently working at{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Your Company
          </a>{" "}
          on interesting problems in AI safety and engineering.
        </p>

        <p>
          I'm pursuing my master's degree in Computer Science at{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Your University
          </a>
          .
        </p>

        <p>
          Previously, I worked at{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Previous Company
          </a>{" "}
          on their data platform team, building scalable systems.
        </p>

        <div className="social-links">
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <span className="separator">·</span>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span className="separator">·</span>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>

        <p className="footnote">
          <small>
            I subscribe to{" "}
            <a href="https://www.lesswrong.com/tag/crocker-s-rules" target="_blank" rel="noopener noreferrer">
              Crocker's rules
            </a>
            .
          </small>
        </p>
      </div>
    </main>
  );
}
