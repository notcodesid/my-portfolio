export default function StudyPost() {
  return (
    <main className="pb-16">
      <article className="text-base leading-relaxed">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold mb-2 text-foreground">how to study 4 hours every day</h1>
          <p className="text-muted text-sm">2024-10-05 • 4 min read</p>
        </header>

        <div className="space-y-6 text-muted">
          <p>i randomly came across a video where someone talked about what they've done in just one year:</p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>math</li>
            <li>computer science</li>
            <li>data engineering</li>
            <li>ai/ml</li>
          </ul>
          <p>as someone who's seen friends grind through four-year degrees for the same, i was skeptical. how?</p>
          <p>here are some tips they shared about studying 4 hours a day, every day:</p>

          <h2 className="text-lg font-semibold text-foreground pt-4">fewer hobbies</h2>
          <p>we all have hobbies like reading novels, gaming, or binge-watching shows. keep the ones you truly enjoy, but cut out the half-hearted ones. you don't need to sacrifice all your hobbies, just the ones you're not very interested in.</p>

          <h2 className="text-lg font-semibold text-foreground pt-4">buy time, not just coffee</h2>
          <p>time is your most limited resource. if you want to learn something new, invest in good courses or cohorts where resources are structured. or, if you have household chores, pay someone else to do them.</p>

          <h2 className="text-lg font-semibold text-foreground pt-4">multitasking intelligence</h2>
          <p>avoid multitasking, but pair low-brain tasks with learning. for example, listen to lectures while walking, then practice what you've learned afterward.</p>

          <h2 className="text-lg font-semibold text-foreground pt-4">energy &gt; hours</h2>
          <p>high energy lets you pursue your interests fully. exercise is a great way to boost your brain. movement signals to the brain that something important is happening. if exercise were a drug, it would be the most powerful one ever created.</p>
          <blockquote className="border-l-2 border-accent pl-4 italic">entrepreneurs mind. athletes body. artists soul.</blockquote>

          <h2 className="text-lg font-semibold text-foreground pt-4">change environment</h2>
          <p>working in one place all day is boring. try working from a park, cafe, or balcony. new surroundings act like a "reset button" for your focus.</p>

          <h2 className="text-lg font-semibold text-foreground pt-4">sleep as your brain depends on it</h2>
          <p>i'm not the best person to advise on sleep (my schedule is messed up), but a good sleep schedule keeps you fresh. even a short nap during the day can help.</p>

          <h2 className="text-lg font-semibold text-foreground pt-4">focus on one thing</h2>
          <p>don't try to learn ai/ml, web3, and development all at once. focus on one thing at a time, especially if you have limited hours to study.</p>

          <h2 className="text-lg font-semibold text-foreground pt-4">default actively</h2>
          <p>use small pockets of time wisely. instead of scrolling social media, spend 5-10 minutes reading something worthwhile.</p>

          <h2 className="text-lg font-semibold text-foreground pt-4">take time off</h2>
          <p>if you're working 24/7, you'll burn out. spend time with loved ones and have fun. remember: "it's just part of your life, not your whole life."</p>
          <p>that's all for now. thanks for being here.</p>
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

