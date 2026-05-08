import Image from "next/image";
import ReflectionArticleLayout from "@/components/ReflectionArticleLayout";

const tweetLink = "https://x.com/waitin4agi_/status/2045388581129330905";

const hiImages = [
  {
    src: "/portfolio/key-6063.jpg",
    alt: "Siddharth childhood photo",
    className: "sm:row-span-3",
    position: "center 42%",
    sizes: "(min-width: 640px) 20rem, 44vw",
  },
  {
    src: "/portfolio/key-3913.jpg",
    alt: "Siddharth taking a mirror photo",
    className: "",
    position: "center 55%",
    sizes: "(min-width: 640px) 12rem, 34vw",
  },
  {
    src: "/portfolio/key-4642.jpg",
    alt: "Siddharth mirror portrait",
    className: "",
    position: "center 54%",
    sizes: "(min-width: 640px) 12rem, 34vw",
  },
  {
    src: "/portfolio/key-4507.jpg",
    alt: "Siddharth smiling",
    className: "",
    position: "center 40%",
    sizes: "(min-width: 640px) 12rem, 34vw",
  },
];

export default function HiPost() {
  return (
    <ReflectionArticleLayout title="hi" meta="may 6, 2026 • 2 min read">
      <p>it started from a tweet by Varun Mayya.</p>
      <aside className="rounded-[6px] border border-white/10 bg-white/[0.03] p-5 text-white/70">
        <div className="mb-4 flex items-baseline justify-between gap-4">
          <div>
            <p className="leading-none font-semibold text-white">Varun Mayya</p>
            <p className="mt-1 text-sm leading-none text-white/45">
              @waitin4agi_ · Apr 18
            </p>
          </div>
          <a
            href={tweetLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-semibold text-white/55 underline decoration-white/25 underline-offset-4 transition hover:text-white hover:decoration-white"
          >
            view tweet
          </a>
        </div>
        <p>
          “If your goal is to get big on social platforms the stupidest thing
          you can do is to be anonymous.”
        </p>
        <p className="mt-4 text-white/55">
          the rest of the point was simple: hidden faces make trust harder, and
          the imagined downside of showing up is usually bigger than the real
          one.
        </p>
      </aside>
      <p>i never wanted to use my real face on social media because of some insecurities. for the longest time i preferred staying behind the product instead of being the face of it.</p>
      <p>but recently i started noticing something.</p>
      <p>for the last 2-3 weeks, my tweets haven&apos;t been getting much interaction. not that i ever chased impressions or engagement, but while building Proven i realised something important:</p>
      <p>as a founder, people don&apos;t just connect with the product. they connect with the person behind it.</p>
      <p>when someone repeatedly sees the same face, same thoughts, and same voice over time, their brain builds familiarity and trust. there&apos;s a human anchor attached to the content.</p>
      <p>anon/anime accounts can still grow, but they usually have to work much harder because there&apos;s no personal connection attached to the posts.</p>
      <p>so this is basically an experiment.</p>
      <p>i&apos;m trying to see what happens when i stop hiding behind the product and start showing the human building it.</p>
      <figure className="grid aspect-square grid-cols-2 grid-rows-2 gap-2 sm:aspect-[5/6] sm:grid-cols-[1.35fr_0.85fr] sm:grid-rows-3">
        {hiImages.map((image, index) => (
          <div
            key={image.src}
            className={`relative min-w-0 overflow-hidden rounded-[6px] border border-white/10 bg-white/5 ${image.className}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              draggable={false}
              sizes={image.sizes}
              className="select-none object-cover opacity-90"
              style={{ objectPosition: image.position }}
            />
          </div>
        ))}
      </figure>
      <p className="pt-4">
        all of my love,
        <br />
        Siddharth
      </p>
    </ReflectionArticleLayout>
  );
}
