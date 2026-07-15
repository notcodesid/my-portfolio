import Image from "next/image";
import ReflectionArticleLayout from "@/components/ReflectionArticleLayout";

const founderNoteImages = [
  {
    src: "/portfolio/founder-note/building-proven.jpeg",
    alt: "building proven from a laptop",
    width: 3024,
    height: 4032,
  },
  {
    src: "/portfolio/founder-note/search-your-mind.jpeg",
    alt: "a cap that says search your mind see what you find",
    width: 1179,
    height: 1340,
  },
  {
    src: "/portfolio/founder-note/working-together.jpeg",
    alt: "working together at a table",
    width: 1078,
    height: 602,
  },
  {
    src: "/portfolio/founder-note/zero-to-one.jpeg",
    alt: "zero to one beside a laptop",
    width: 1980,
    height: 3520,
  },
  {
    src: "/portfolio/founder-note/pull-ups.jpeg",
    alt: "doing pull-ups at night",
    width: 584,
    height: 1062,
  },
  {
    src: "/portfolio/founder-note/handstand.jpeg",
    alt: "practicing a handstand outside",
    width: 588,
    height: 1070,
  },
  {
    src: "/portfolio/founder-note/five-k-run.jpeg",
    alt: "five kilometer run result",
    width: 996,
    height: 1346,
  },
];

export default function FounderNotePost() {
  return (
    <ReflectionArticleLayout
      title="why proven matters to me"
      meta="july 15, 2026 • 4 min read"
    >
      <p>
        so this is a founder note from the proven side. what i wanted to say is
        that i&apos;ve been building proven for a long time, and i&apos;ve made a lot of
        mistakes. i&apos;ve tried to solve some of them and make sure i don&apos;t make
        the same mistakes again. we&apos;ve made a lot of mistakes, and i&apos;ve
        personally realized that.
      </p>
      <p>
        sometimes i&apos;m excited to build the app, and sometimes i feel down about
        it because, financially, i&apos;m not always able to continue building it.
      </p>
      <p>
        recently, i&apos;ve seen a lot of apps with a similar context and similar
        ideas. i believe the idea is crazy, and if i execute and distribute it
        well, i think i can crack it. if i have the mentality of a founder, or
        the kind of skills that steve jobs or elon musk had, i think i can make
        it work. that&apos;s what i&apos;ve realized.
      </p>
      <p>
        instead of trying a lot of things, i just want to focus on one thing.
      </p>
      <p>
        of course, financially, i&apos;m not stable right now. i&apos;ve realized that i
        have to do things that can make some money so i can pay the cloud and
        codex bills.
      </p>
      <p>
        but i really want to build a startup because i like the struggle and
        hard work behind startups. it&apos;s not because i&apos;ve worked as an employee,
        because i have some high-agency problem, or because the people i&apos;ve
        worked with were not good. i really want to work with great people, but
        i don&apos;t want to work under someone who just gives me orders.
      </p>
      <p>
        sometimes it&apos;s good when the person understands you and gives you good
        instructions or teaches you something. but what i believe is that i
        have the traits to build startups.
      </p>
      <p>
        of course, this could be an illusion or just my delusion. i&apos;ve seen a
        lot of people build startups and, after one or two years, unfortunately
        shut them down for different reasons. i don&apos;t think about that part. i
        just want to build proven.
      </p>
      <p>
        for me, i don&apos;t only want to build a startup. i just want to build a lot
        of stuff. that&apos;s why, in the last week, i shipped one or two products.
        of course, they haven&apos;t been used by many people, but i built a rust
        practice tool that i use every day, and some of my friends use it too.
      </p>
      <p>
        i also built a reading app that lets me read online without any
        distractions. i like building things, but something about proven has
        stuck with me.
      </p>
      <p>
        i really believe the idea is very noble. if the execution is good and
        the distribution is good enough, i think the idea can be huge.
      </p>
      <figure className="columns-2 gap-2">
        {founderNoteImages.map((image) => (
          <div
            key={image.src}
            className="mb-2 break-inside-avoid overflow-hidden rounded-[6px] border border-white/10 bg-white/5"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 640px) 15.75rem, calc(50vw - 1.5rem)"
              className="h-auto w-full select-none grayscale opacity-90"
            />
          </div>
        ))}
      </figure>
    </ReflectionArticleLayout>
  );
}
