import ProtectedImage from "@/components/ProtectedImage";

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
    value: "building",
    linkLabel: "tryproven.fun",
    href: "https://tryproven.fun",
    secondaryHref: "/stuff",
    secondaryLabel: "+4 more",
  },
  {
    label: "writing/",
    value: "reflection",
    href: "/reflection",
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
      { label: "cv", href: "/cv" },
      { label: "instagram", href: "https://www.instagram.com/sid.ously/" },
    ],
  },
];

export default function Home() {
  return (
    <main className="home-shell flex min-h-[calc(100dvh-5rem)] items-center py-10 sm:py-14">
      <section className="w-full">
        <div className="home-grid">
          <ProtectedImage />

          <div className="grid min-w-0 gap-10 sm:gap-12">
            <p className="text-[2.75rem] leading-none font-semibold text-white sm:text-[3.75rem]">
              i&apos;m sid
            </p>

            <div className="grid gap-8 sm:gap-10">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="home-detail-row grid min-w-0 gap-2"
                >
                  <p className="text-[0.95rem] leading-none font-semibold text-white">
                    {item.label}
                  </p>

                  {"links" in item && item.links ? (
                    <div className="max-w-xl text-[0.95rem] leading-relaxed font-semibold text-white/72">
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
                            className="underline decoration-white/35 underline-offset-4 transition hover:text-white hover:decoration-white"
                          >
                            {link.label}
                          </a>
                        </span>
                      ))}
                    </div>
                  ) : item.href ? (
                    <div className="max-w-xl text-[0.95rem] leading-relaxed font-semibold text-white/72">
                      {"linkLabel" in item && item.linkLabel ? `${item.value} ` : null}

                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="underline decoration-white/35 underline-offset-4 transition hover:text-white hover:decoration-white"
                      >
                        {"linkLabel" in item && item.linkLabel ? item.linkLabel : item.value}
                      </a>

                      {"secondaryHref" in item && item.secondaryHref ? (
                        <>
                          {" "}
                          {"linkLabel" in item && item.linkLabel ? "" : "and "}
                          <a
                            href={item.secondaryHref}
                            target={
                              item.secondaryHref.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              item.secondaryHref.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="underline decoration-white/35 underline-offset-4 transition hover:text-white hover:decoration-white"
                          >
                            {item.secondaryLabel}
                          </a>
                        </>
                      ) : null}
                    </div>
                  ) : (
                    <p className="max-w-xl text-[0.95rem] leading-relaxed font-semibold text-white/72">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
