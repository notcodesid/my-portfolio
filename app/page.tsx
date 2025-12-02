export default function Home() {
  return (
    <main>
      <div className="text-base leading-relaxed">
        <h1 className="text-xl font-semibold text-foreground mb-2">hi, im siddharth</h1>
        
        <p className="text-muted mb-1">i'm a 21 yrs old eng, web3 learner and more.</p>

        <p className="text-muted">
        i write about things i'm {" "}
        
        <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline transition-colors"
          >
            learning ↗ 
          </a>{" "}
        
        
        plus  <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline transition-colors"
          >
            reflections ↗ 
          </a>{" "}
          on life.
        </p>

        <p className=" text-muted">
          i'm currently working at{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline transition-colors"
          >
            proven
          </a>{" "}
          a habit staking app on solana where you bet on your goals and get rewarded for consistency.
        </p>

        <p className=" text-muted">
        member of {" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline transition-colors"
          >
            superteamIN
          </a> {" "}
          contributing to solana ecosystem projects.
        </p>

        <p className="mb-4 text-muted">
          previously, i worked at{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline transition-colors"
          >
            web 2 startup 
          </a>{" "}
          as a software engineer intern.
        </p>

        <div className="flex gap-4 items-center text-sm mt-8">
          <a
            href="https://x.com/notcodesid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline transition-colors"
          >
            x
          </a>
          <a
            href="http://linkedin.com/in/sidharthh-pandro/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline transition-colors"
          >
            linkedin
          </a>
        </div>
      </div>
    </main>
  );
}
