
export default function About() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hey! I'm Siddharth. I'm really into making websites. Been doing it for about a year now. I work with stuff like JavaScript, React, and Node.js. Love making sites that look good and work great!
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Background</h3>
              <p className="text-muted-foreground">
              I've doing a Bachelor's in Science, by the way. I've worked with small teams and done some Hackathons too. Always trying to learn new tech stuff - I'm kinda addicted to keeping up with what's new in the industry!
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Skills</h3>
              <p className="text-muted-foreground">
              My main skills? I'm really good with TypeScript, JavaScript, React, and Node.js. I also know my way around NextJS, ExpressJS, and a bunch of other cool libraries. I can make websites look great on any device, and I get the whole UI/UX thing. Oh, and I'm pretty handy with Git for keeping track of all my code changes.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Interests</h3>
              <p className="text-muted-foreground">
              When I'm not coding, I'm usually out playing cricket or football. I love keeping up with the latest tech stuff online too. In my free time, you'll find me binge-watching anime or catching some action movies. I'm always tinkering with my own little projects on the side. What really gets me excited is using tech to solve real problems and make a difference, you know?
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }