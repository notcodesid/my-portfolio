import Image from "next/image";

import ReflectionArticleLayout from "@/components/ReflectionArticleLayout";

const products = [
  {
    name: "summon",
    description: "pokemon go, but with real animals and on-chain collections.",
    href: "https://github.com/notcodesid/Summon",
  },
  {
    name: "creativity",
    description:
      "a place to capture ideas, work on them, and prove you actually shipped.",
    href: "https://github.com/notcodesid/createvity-boost",
  },
  {
    name: "cluch",
    description:
      "live prediction battles with friends during sports matches, settled on-chain.",
    href: "https://github.com/notcodesid/Cluch",
  },
  {
    name: "learn-to-code",
    description: "help people write their first 1,000 lines of rust.",
    href: "https://github.com/notcodesid/learn-to-code",
  },
  {
    name: "read",
    description: "an offline, distraction-free reading app.",
    href: "https://github.com/notcodesid/read",
  },
  {
    name: "veil",
    description: "trade privately, settle publicly.",
    href: "https://github.com/notcodesid/veil",
  },
  {
    name: "signal",
    description: "embedded ai inside all crypto protocols.",
    href: "https://github.com/notcodesid/Signal",
  },
  {
    name: "shadow fuzzer",
    description:
      "a private sandbox for on-chain agents to simulate transactions without getting front-run.",
    href: "https://github.com/notcodesid/shadow-fuzzer",
  },
  {
    name: "latent-tech-news",
    description:
      "a telegram bot that reads hacker news and sends short ai summaries of the best ai stories.",
    href: "https://github.com/notcodesid/latent-tech-news",
  },
  {
    name: "friday",
    description: "an ai that helps distribute your product.",
    href: "https://github.com/notcodesid/Friday",
  },
  {
    name: "scout",
    description: "a better way to find real yc jobs and generate cold emails worth sending.",
    href: "https://github.com/notcodesid/scout",
  },
];

const endingImages = [
  {
    src: "/portfolio/eleven-products/img-2758-cropped.jpg",
    alt: "a photo from the stretch of building these ideas",
    width: 830,
    height: 900,
  },
  {
    src: "/portfolio/eleven-products/img-3283-cropped.jpg",
    alt: "a photo from the stretch of building these ideas",
    width: 830,
    height: 900,
  },
  {
    src: "/portfolio/eleven-products/img-3546-cropped.jpg",
    alt: "a photo from the stretch of building these ideas",
    width: 830,
    height: 900,
  },
  {
    src: "/portfolio/eleven-products/img-3573-cropped.jpg",
    alt: "a photo from the stretch of building these ideas",
    width: 830,
    height: 900,
  },
];

export default function ElevenProductsPost() {
  return (
    <ReflectionArticleLayout
      title="i kept building because launching scared me"
      meta="july 25, 2026 • 4 min read"
    >
      <p>
        over the last couple of weeks, i worked on more ideas than i ever have.
        not because i was trying to start 11 companies. i just had ideas that i
        couldn&apos;t stop thinking about, so i started building them.
      </p>
      <p>
        some turned into working products. some stayed unfinished. some were
        mostly ideas that never became more than a repo, a rough prototype, or a
        direction i wanted to test.
      </p>
      <p>here&apos;s what came out of my head:</p>
      <ul>
        {products.map((product) => (
          <li key={product.href}>
            <a
              href={product.href}
              className="font-semibold underline decoration-white/35 underline-offset-4 transition hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {product.name}
            </a>{" "}
            — {product.description}
          </li>
        ))}
      </ul>
      <p>
        looking back, i&apos;m happy i touched all of them. every project, prototype,
        and idea taught me something new. some made me learn new tech. some
        made me think differently about products. some were just really fun to
        explore.
      </p>
      <p>
        but i also made the same mistake again and again. most of these ideas
        never made it outside my mac. sometimes i built the interesting part.
        sometimes i only got a rough version working. sometimes it stayed as an
        idea. then another idea showed up. the new one always looked cooler. so
        i jumped.
      </p>
      <p>
        i never really launched most of them. i never put the unfinished ones in
        front of real people. i never stayed around long enough to see which
        ones actually deserved to become products. that&apos;s probably the biggest
        lesson i&apos;ve learned.
      </p>
      <p>
        <strong>code doesn&apos;t make a product.</strong>
        <br />
        <strong>users do.</strong>
      </p>
      <p>
        another thing i learned is that my first idea is almost never the final
        idea. what i build first is usually just a rough version of what&apos;s in
        my head. it still needs a lot more thinking, a lot more work, and most
        importantly, real user feedback.
      </p>
      <p>
        i&apos;ve realized that i can&apos;t decide what&apos;s good just by sitting in front
        of my mac. people use products in ways you never expect. they point
        out problems you never noticed. sometimes they even use it for
        something completely different than what you imagined. that&apos;s why
        launching matters. not because the first version is perfect, but
        because it&apos;s the fastest way to learn what the product should actually
        become.
      </p>
      <p>
        another thing i realized is that i genuinely enjoy this. i like coming
        up with ideas. i like starting from nothing and turning it into
        something that works. i don&apos;t think i&apos;ll ever stop doing that.
      </p>
      <p>
        but i also learned something the hard way. i can&apos;t bootstrap every idea
        i have. right now i don&apos;t have a job, so every product costs time,
        money, and attention that i don&apos;t really have. even if i could build ten
        products, i definitely can&apos;t grow ten products.
      </p>

      <p>
        <mark className="box-decoration-clone rounded-[4px] bg-amber-200/60 px-1 text-white">
          (if you&apos;re hiring, or if someone in your network is looking for
          someone who loves building, i&apos;d genuinely appreciate an introduction.)
        </mark>
      </p>

      <p>
        so instead of trying to build everything, i need to pick one and give
        it a real chance. the rest can wait. they&apos;re not bad ideas.
        they&apos;re just ideas for another time.
      </p>
      <p>
        i don&apos;t regret building any of these projects. if anything, they helped
        me understand myself a little better. i&apos;m someone who loves building.
      </p>
      <p>
        now i want to become someone who also finishes, launches, and sticks
        around long enough to see people actually use what i build.
      </p>
      <p>i think that&apos;s the next chapter.</p>
      <figure className="grid grid-cols-2 gap-2 pt-2">
        {endingImages.map((image) => (
          <div
            key={image.src}
            className="relative aspect-[83/90] overflow-hidden rounded-[6px] border border-white/10 bg-white/5"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 640px) 15.75rem, calc(50vw - 1.5rem)"
              className="select-none object-cover opacity-90"
            />
          </div>
        ))}
      </figure>
    </ReflectionArticleLayout>
  );
}
