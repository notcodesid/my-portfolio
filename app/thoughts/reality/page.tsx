import Image from "next/image";

import ReflectionArticleLayout from "@/components/ReflectionArticleLayout";

export default function TwoMeetingsAndARealityCheckPost() {
  return (
    <ReflectionArticleLayout
      title="two meetings and a reality check"
      meta="aug 10, 2026 • 4 min read"
    >
      <p>this week was hectic and rough, but two meetings happened that stayed in my head for different reasons.</p>
      <p>one made me rethink proven. the other made me rethink myself.</p>
      <p>the first meeting started from a student program i had applied to. they were mostly looking for students from top colleges, and i wasn&apos;t one, but i applied anyway. i didn&apos;t expect anything quick from it. then, somehow, i got on a call with someone from the team.</p>
      <figure className="space-y-3">
        <Image
          src="/portfolio/reality/product-feedback-call-v2.jpg"
          alt="a laptop on a yellow table during the first feedback call"
          width={1200}
          height={1344}
          className="h-auto w-full rounded-sm border border-white/10"
          sizes="(min-width: 640px) 32rem, calc(100vw - 2rem)"
        />
        <figcaption className="text-sm leading-6 text-white/42">
          the first call, from a quiet room with a yellow table.
        </figcaption>
      </figure>
      <p>i went into that call thinking about growth. more users. more attention. web3, social media, viral loops, funding, all those big words that make a product feel like it is moving even when it might not be.</p>
      <p>his feedback was calm but sharp. proven is interesting, but i&apos;m trying to scale it too early.</p>
      <p>that hit because it was true. i already have around 100 beta users and around 500 people on the waitlist, so it is easy to feel like the next problem is growth. but his point was that i don&apos;t have a growth problem yet. i have a validation problem.</p>
      <p>the challenge he gave me was simple and annoying in the best way: talk to 300 people, manually onboard 100 users, and see how many of them still use proven after 30 days.</p>
      <p>not instagram. not reels. not paid ads. not some big launch plan. just real people.</p>
      <p>go around my locality. find people who already have accountability relationships, like gym buddies, study partners, or friends trying to build a habit together. help them understand proven. watch where they get confused. see if the product actually helps them come back again and again.</p>
      <p>he also pushed back on the web3 part. solana and stablecoins may sound exciting to me, but for indian users they can create friction before the habit even starts. maybe upi is enough. maybe even an iou between friends is enough. the important part is the accountability mechanism, not the blockchain.</p>
      <p>that was the first lesson of the week: stop hiding behind scale. if 100 ordinary people cannot use proven consistently for a month, spending Rs. 10 lakh to bring 10,000 people will only make the failure louder.</p>
      <div
        aria-hidden="true"
        className="my-6 h-px w-full bg-white/18"
      />
      <p>then came the second meeting.</p>
      <p>it was a technical interview with a startup team. i prepared for almost two and a half days. at first i thought it would be an easy, funny talk, but as the interview got closer, the nervousness started. i kept saying things to myself like, &ldquo;i want this offer because i&apos;m broke. i need this job, man.&rdquo;</p>
      <figure className="space-y-3">
        <Image
          src="/portfolio/reality/technical-interview-call-v4.jpg"
          alt="a privacy-blurred screenshot from the technical interview call"
          width={1400}
          height={618}
          className="h-auto w-full rounded-sm border border-white/10"
          sizes="(min-width: 640px) 32rem, calc(100vw - 2rem)"
        />
        <figcaption className="text-sm leading-6 text-white/42">
          the technical interview call, right before the reality check.
        </figcaption>
      </figure>
      <p>the interview began normally. basic introduction, what i do, what they do. then the questions started.</p>
      <p>first they asked theory. what is a server? what is cors? how do both work together? those questions were familiar, so i handled them fine. for a few minutes, i felt okay.</p>
      <p>then they asked me to design a system for a merchant, customer referrals, and follow-up emails. i don&apos;t know system design deeply, so they told me to write down how i would architect it.</p>
      <p>somehow, anyhow, i drew it on pen and paper. i&apos;m not sure if it was right or wrong, but it looked reasonable to me. i explained my points. then they asked me to take the first step and write basic code for it.</p>
      <p>that is where everything broke.</p>
      <p>i couldn&apos;t write a simple function to query from the db. it sounds funny now, but in that moment it was painful. i couldn&apos;t even write the right syntax for a javascript function with confidence.</p>
      <p>they noticed. they asked me what language i was good at. i said typescript. they said, &ldquo;then we&apos;re giving you javascript for it.&rdquo;</p>
      <p>after that, i said the thing i had probably been avoiding saying to myself: i haven&apos;t written code properly in the last 3-4 months. i&apos;ve been using ai, codex, and claude heavily in my day-to-day work, and it showed.</p>
      <p>my github looks good. the products look good. from the outside, it looks like i build a lot. so they asked me what i call myself: a prompt engineer, or an engineer?</p>
      <p>i went speechless.</p>
      <p>i always call myself an engineer. but if i cannot write a simple function without ai, then what exactly am i calling myself?</p>
      <p>the senior engineers were not rude. that almost made it worse. they gave me the advice clearly. using ai is fine. they use ai too. but i should at least understand what the ai is writing. forgetting syntax is okay. not knowing the foundation is not okay.</p>
      <p>that interview was my rock bottom. not because i failed one interview, but because it showed me a gap i could no longer ignore.</p>
      <div
        aria-hidden="true"
        className="py-2 text-center text-[1.1rem] leading-none tracking-[0.35em] text-white/38"
      >
        ...
      </div>
      <p>both meetings were about the same thing in different forms.</p>
      <p>with proven, i wanted to scale before proving that people truly cared. with engineering, i wanted the output of building without staying close enough to the actual code.</p>
      <p>both are shortcuts. both feel productive from far away. and both fall apart when a real person asks a real question.</p>
      <p>so the lesson from this week is not some big motivational thing. it is very simple. for proven, i need to go talk to people and prove retention. for myself, i need to write code again until the basics are mine, not borrowed from ai.</p>
      <p>that is the work now.</p>
    </ReflectionArticleLayout>
  );
}
