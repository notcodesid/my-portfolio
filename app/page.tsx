export default function Home() {
  return (
    <main className="min-h-[calc(100dvh-12rem)] flex flex-col">
      <div className="text-base leading-relaxed">
        <h1 className="text-xl font-semibold text-foreground mb-2">hi, im sid</h1>

        <ul className="text-muted space-y-1 mb-4">
          <li>• i&apos;m a 21 yrs old eng, learner and more.</li>
          <li>
            • i write about things i&apos;m{" "}
            <a
              href="https://medium.com/@notcodesid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline transition-colors"
            >
              learning↗
            </a>{" "}
            plus{" "}
            <a
              href="/thoughts"
              rel="noopener noreferrer"
              className="text-accent hover:underline transition-colors"
            >
              reflections↗
            </a>{" "}
            on life.
          </li>
          <li>
            • i&apos;m currently working at{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline transition-colors"
            >
              proven
            </a>
            , a habit staking app on solana where you bet on your goals and get
            rewarded for consistency.
          </li>
          <li>
            • member of{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline transition-colors"
            >
              superteamIN
            </a>{" "}
            contributing to solana ecosystem projects.
          </li>
        </ul>
      </div>

      <section className="pt-12 pb-[20px] text-base leading-relaxed">
        <h2 className="text-lg font-semibold mb-4 text-foreground">contact</h2>
        <div className="flex gap-4 text-sm">
          <a
            href="mailto:notcodesid@gmail.com"
            className="text-accent hover:underline transition-colors"
          >
            email
          </a>
          <a
            href="https://linkedin.com/in/sidharthh-pandro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline transition-colors"
          >
            linkedin
          </a>
          <a
            href="https://github.com/notcodesid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline transition-colors"
          >
            github
          </a>
          <a
            href="https://x.com/notcodesid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline transition-colors"
          >
            x
          </a>
        </div>
      </section>
    </main>
  );
}
