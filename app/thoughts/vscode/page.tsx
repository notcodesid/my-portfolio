export default function VscodePost() {
  return (
    <main className="pb-16">
      <article className="text-base leading-relaxed">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold mb-2 text-foreground">transition from cursor to vscode</h1>
          <p className="text-muted text-sm">april 18, 2025 • 5 min read</p>
        </header>

        <div className="space-y-6 text-muted">
          <p>i've always loved side projects, they're the best way to get that satisfaction of learning and building something cool. back in the day, i used to build projects on my own, coding late nights, debugging for hours, and feeling like i was learning at an exceptional level. it was all hands-on, and i loved the grind. but lately, things changed.</p>
          <p>i started using cursor a lot, especially since i couldn't afford the paid plan at first, but once i did, it became my go-to. it made coding feel so easy, but then i noticed something: i wasn't learning as much. this hit home during my last couple of technical interviews, where i couldn't solve simple problems. that's when i knew i had to make a change.</p>

          <h2 className="text-lg font-semibold text-foreground pt-4">those interview fails</h2>
          <p>it started with a few bad interviews. i couldn't solve simple coding problems, which surprised me since i used to feel confident. the problem wasn't that i didn't know the concepts—it was that i relied on cursor too much. it did most of the work, so i hadn't practiced thinking through problems. in interviews, with no ai to help, i got stuck. that showed me i needed a change.</p>

          <h2 className="text-lg font-semibold text-foreground pt-4">why i liked cursor</h2>
          <p>why did i use cursor so much? it made coding quick and easy. cursor has ai that writes code, fixes errors, and suggests ideas, all in a nice editor. when i couldn't afford paid tools, i built side projects the hard way and learned a lot. cursor changed that—it helped me finish projects faster and skip boring tasks. for a while, it felt like a great tool.</p>
          <p>but there was a catch. the more i used cursor, the less i coded myself. it fixed bugs before i could think. it wrote logic i didn't fully get. i wasn't learning or growing as a developer. my interview struggles proved i had to go back to basics.</p>

          <h2 className="text-lg font-semibold text-foreground pt-4">switching to vscode</h2>
          <p>after those interview fails, i switched back to vscode. it was a deliberate choice to make coding harder. i wanted to feel that struggle again, to think through problems and build solutions myself. vscode doesn't have built-in ai, so i had to write all the code myself, debug my own errors, and learn from my mistakes. it was frustrating at first, but that's the point—i needed to rebuild those problem-solving muscles.</p>
          <p>the first week was rough. i was slower, made more mistakes, and spent hours debugging. but by week two, i noticed something: i was thinking more clearly about my code. i was learning again, building that confidence back. i wasn't just copying ai suggestions—i was coding.</p>

          <h2 className="text-lg font-semibold text-foreground pt-4">how i use ai now</h2>
          <p>i still think ai tools are helpful, but i'm more careful. here's my plan:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>use ai for small tasks: cursor can do repetitive code, but i write the main parts myself.</li>
            <li>study ai's code: if cursor writes something, i read it closely to understand it.</li>
            <li>practice without ai: i solve coding problems on sites like leetcode without help to build my skills.</li>
          </ul>
          <p>this keeps me in control. i can use ai but still learn.</p>

          <h2 className="text-lg font-semibold text-foreground pt-4">conclusion: finding balance</h2>
          <p>ai tools like cursor make coding faster, but they can slow your growth if you rely on them too much. switching to vscode got me back to hands-on coding after my interview troubles. it's harder, but i'm learning again, and that feels right. i'm working on using ai wisely while keeping my skills strong.</p>
          <p>coding is about solving problems and growing. ai can help, but don't let it do everything.</p>
          <p className="font-medium text-foreground">don't automate the fun stuff.</p>
          <p className="pt-4">until then,<br />siddharth</p>
        </div>

        <footer className="mt-12 pt-8 border-t border-muted/20">
          <h2 className="text-lg font-semibold mb-4 text-foreground">say hello</h2>
          <p className="text-muted">
            say hi on{" "}
            <a href="https://x.com/notcodesid" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">x.com</a>
            {" "}or email{" "}
            <a href="mailto:notcodesid@gmail.com" className="text-accent hover:underline">notcodesid@gmail.com</a>
            . i read every message :)
          </p>
        </footer>
      </article>
    </main>
  );
}

