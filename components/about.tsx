
export default function About() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">about me</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            hey! I&apos;m siddharth. i&apos;m really into making websites. been doing it for about a year now. i work with stuff like <span className="font-bold text-red-500 "> typescipt, javascript, react, and node.js.</span>  
            
            <br />
            <br />
            love making sites that look good and work great.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">background</h3>
              <p className="text-muted-foreground">
              i&apos;m pursuing a bachelor&apos;s degree in science., by the way. I&apos;ve worked with small teams and done some Hackathons too. always trying to learn new tech stuff - i&apos;m kinda addicted to keeping up with what&apos;s new in the industry!
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">skills</h3>
              <p className="text-muted-foreground">
              my main skills? i&apos;m really good with typescript, javascript, react, and node.js. i also know my way around nextjs, expressjs, and a bunch of other cool libraries. i can make websites look great on any device, and I get the whole ui/ux thing. oh, and i&apos;m pretty handy with git for keeping track of all my code changes.
              </p>
            </div>
    
          </div>
        </div>
      </section>
    )
  }