
export default function About() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hi, I'm Jane Doe, a passionate web developer with a keen eye for design. I've been creating beautiful and
              functional websites for the past 5 years, honing my skills in HTML, CSS, JavaScript, and various front-end
              frameworks.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Background</h3>
              <p className="text-muted-foreground">
                I hold a Bachelor's degree in Computer Science and have experience working with both small startups and
                large enterprises. I'm always eager to learn new technologies and stay up-to-date with the latest industry
                trends.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Skills</h3>
              <p className="text-muted-foreground">
                My core skills include HTML, CSS, JavaScript, React, Vue.js, and Node.js. I'm also proficient in
                responsive design, UI/UX principles, and version control with Git.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Interests</h3>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring the great outdoors, reading the latest tech blogs, or
                tinkering with personal projects. I'm passionate about using technology to solve real-world problems and
                make a positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }