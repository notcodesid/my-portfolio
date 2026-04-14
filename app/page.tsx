const details = [
  {
    label: "who/",
    value: "21, m, india",
  },
  {
    label: "about/",
    value: "dropout, doing odd jobs, chasing knowledge, serial-ly attempting things.",
  },
  {
    label: "actively learning/",
    value: "math, code, writing, blockchain(solana), gaming virality, chess, sales & marketing",
  },
  {
    label: "work/",
    value: "founder of",
    linkLabel: "tryproven.fun",
    href: "https://aquamarine-operators-401678.framer.app/",
  },
  {
    label: "writing/",
    value: "reflection",
    href: "/thoughts",
    secondaryHref: "https://medium.com/@notcodesid",
    secondaryLabel: "technical blogs",
  },
  {
    label: "links/",
    links: [
      { label: "x", href: "https://x.com/notcodesid" },
      { label: "github", href: "https://github.com/notcodesid" },
      { label: "email", href: "mailto:notcodesid@gmail.com" },
      {
        label: "linkedin",
        href: "https://linkedin.com/in/sidharthh-pandro",
      },
      { label: "instagram", href: "https://www.instagram.com/sid.ously/" },
    ],
  },
];

export default function Home() {
  return (
    <main className="flex min-h-[calc(100dvh-5rem)] items-center">
      <section className="w-full">
        <div className="grid gap-10 sm:gap-12">
          <p className="text-[2rem] leading-none font-semibold text-white">
            i&apos;m sid
          </p>

          <div className="grid gap-8 sm:gap-10">
            {details.map((item) => (
              <div
                key={item.label}
                className="grid gap-2 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-8"
              >
                <p className="text-[0.95rem] leading-none font-semibold text-white">
                  {item.label}
                </p>

                {"links" in item && item.links ? (
                  <div className="max-w-xl text-[0.95rem] leading-relaxed font-semibold text-white">
                    {item.links.map((link, index) => (
                      <span key={link.label}>
                        {index > 0 ? ", " : null}
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            link.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="underline decoration-white/35 underline-offset-4 transition hover:decoration-white"
                        >
                          {link.label}
                        </a>
                      </span>
                    ))}
                  </div>
                ) : item.href ? (
                  <div className="max-w-xl text-[0.95rem] leading-relaxed font-semibold text-white">
                    {"linkLabel" in item && item.linkLabel ? `${item.value} ` : null}

                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="underline decoration-white/35 underline-offset-4 transition hover:decoration-white"
                    >
                      {"linkLabel" in item && item.linkLabel ? item.linkLabel : item.value}
                    </a>

                    {"secondaryHref" in item && item.secondaryHref ? (
                      <>
                        {" "}
                        and {" "}
                        <a
                          href={item.secondaryHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-white/35 underline-offset-4 transition hover:decoration-white"
                        >
                          {item.secondaryLabel}
                        </a>
                      </>
                    ) : null}
                  </div>
                ) : (
                  <p className="max-w-xl text-[0.95rem] leading-relaxed font-semibold text-white">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
