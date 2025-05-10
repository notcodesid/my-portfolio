import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export const metadata: Metadata = {
  title: "siddharth",
  description: "engineer at the intersection of design and web development",
}

// Icon component for consistent logo display
const Icon = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex items-center justify-center w-10 h-10 bg-neutral-2 dark:bg-neutral-dark-2 rounded-lg overflow-hidden">
    <Image
      src={src}
      alt={alt}
      width={32}
      height={32}
      className="object-contain"
      crossOrigin="anonymous"
    />
  </div>
);

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-md px-4 py-32 flex flex-col gap-8">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Header/Intro Section */}
      <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
        <div>
          <h1 className="text-4xl text-neutral-8 dark:text-neutral-dark-8 lowercase tracking-tighter text-balance">
            I'm <span className="font-semibold">siddharth</span>, engineer* at the
            intersection of design &amp; development.
          </h1>
        </div>
      </div>

      <aside className=" sm:flex-row gap-2">
        <div>
          <p className="lowercase text-neutral-7 dark:text-neutral-dark-7 text-balance text-sm">
          * I write about things I'm learning,  &nbsp;
          <Link href="https://blog.notcodesid.xyz/" target="_blank">
          <span className=" bg-[#c8ff8a] text-black">
            &nbsp;reflections&nbsp;
          </span>
          </Link>
          &nbsp; and thoughts on life and  &nbsp;
          <Link href="https://medium.com/@notcodesid" target="_blank">
          <span className=" bg-[#c8ff8a] text-black ">
          &nbsp;tech&nbsp;
          </span>
          </Link>
          </p>
        </div>
      </aside>

      {/* Experience Section */}
      {/* <section className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
          <div>
            <h2 className="font-semibold text-xl sm:text-sm tracking-tight lowercase text-neutral-8 dark:text-neutral-dark-8">
              latest experience ( currently )
            </h2>
          </div>
        </div>
        <ol className="flex flex-col gap-4">
          <li>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <div className="w-full max-w-32 flex sm:justify-end">
                <Icon src="https://ext.same-assets.com/1107240702/3005105550.svg" alt="Inploi logo" />
              </div>
              <div>
                <header className="flex gap-1.5 lowercase text-sm">
                  <h3 className="text-neutral-8 dark:text-neutral-dark-8">
                    instant interior
                  </h3>
                  <div className="inline text-neutral-8 dark:text-neutral-dark-8">
                    ( freelance )
                  </div>
                </header>
                <p className="text-neutral-6 dark:text-neutral-dark-6 lowercase text-pretty text-sm">full stack project</p>
                <p className="text-neutral-6 dark:text-neutral-dark-6 lowercase text-pretty text-sm">
                  Product engineer currently building the dashboard, SDK, a custom CMS, &amp; more.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <div className="w-full max-w-32 flex sm:justify-end">
                <Icon src="https://ext.same-assets.com/1107240702/2448640114.svg" alt="Winden logo" />
              </div>
              <div>
                <header className="flex gap-1.5 lowercase text-sm">
                  <h3 className="text-neutral-8 dark:text-neutral-dark-8">
                    Winden
                  </h3>
                  <div className="inline text-neutral-8 dark:text-neutral-dark-8">
                    (<time dateTime="2022">2022</time>—<time dateTime="2023">2023</time>)
                  </div>
                </header>
                <p className="text-neutral-6 dark:text-neutral-dark-6 lowercase text-pretty text-sm">Fintech, united states (remote)</p>
                <p className="text-neutral-6 dark:text-neutral-dark-6 lowercase text-pretty text-sm">
                  Frontend platform engineer, introduced design system internal library, refactor &amp; tests to
                  modernise legacy codebase.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <div className="w-full max-w-32 flex sm:justify-end">
                <Icon src="https://ext.same-assets.com/1107240702/2959173167.svg" alt="Teya logo" />
              </div>
              <div>
                <header className="flex gap-1.5 lowercase text-sm">
                  <h3 className="text-neutral-8 dark:text-neutral-dark-8">
                    Teya
                  </h3>
                  <div className="inline text-neutral-8 dark:text-neutral-dark-8">
                    (<time dateTime="2021">2021</time>—<time dateTime="2022">2022</time>)
                  </div>
                </header>
                <p className="text-neutral-6 dark:text-neutral-dark-6 lowercase text-pretty text-sm">Fintech, united kingdom</p>
                <p className="text-neutral-6 dark:text-neutral-dark-6 lowercase text-pretty text-sm">
                  Frontend engineer, led the frontend development for customer-facing dashboard.
                </p>
              </div>
            </div>
          </li>
        </ol>
      </section> */}

            {/* Selected Projects Section */}
            <section className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
          <div>
            <h2 className="font-semibold text-xl sm:text-sm tracking-tight lowercase text-neutral-8 dark:text-neutral-dark-8">
              ongoing projects
            </h2>
          </div>
        </div>
        <ol className="flex flex-col gap-4">

        <li>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <div className="w-full max-w-32 flex sm:justify-end">
                <Icon src="https://ext.same-assets.com/1107240702/366769914.svg" alt="Inploi SDK logo" />
              </div>
              <div>
                <header className="lowercase text-sm">
                  <h3 className="text-neutral-8 dark:text-neutral-dark-8">
                    <Link href="https://github.com/notcodesid/Accountability-App" className="hover:bg-neutral-2 active:bg-neutral-3 dark:hover:bg-neutral-dark-2 dark:active:bg-neutral-dark-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-2 -mx-2 py-1 -my-1 rounded-lg">
                    accountability app
                      <span className="not-sr-only"> ↗</span>
                    </Link>
                  </h3>
                </header>
                <p className="text-neutral-6 dark:text-neutral-dark-6 lowercase text-pretty text-sm">
                A App (Blockchain) that will enable users to commit to personal goals, stake money on their success, and compete with others to stay accountable.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <div className="w-full max-w-32 flex sm:justify-end">
                <Icon src="https://ext.same-assets.com/1107240702/1618200265.svg" alt="Inploi SDK logo" />
              </div>
              <div>
                <header className="lowercase text-sm">
                  <h3 className="text-neutral-8 dark:text-neutral-dark-8">
                    <Link href="https://www.instantinterior.in/" className="hover:bg-neutral-2 active:bg-neutral-3 dark:hover:bg-neutral-dark-2 dark:active:bg-neutral-dark-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-2 -mx-2 py-1 -my-1 rounded-lg">
                    instant interior
                      <span className="not-sr-only"> ↗</span>
                    </Link>
                  </h3>
                </header>
                <p className="text-neutral-6 dark:text-neutral-dark-6 lowercase text-pretty text-sm">
                This application provides AI-powered interior design services, allowing users to transform their spaces with various design options.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <div className="w-full max-w-32 flex sm:justify-end">
                <Icon src="https://ext.same-assets.com/1107240702/4164160248.svg" alt="Winden UI logo" />
              </div>
              <div>
                <header className="lowercase text-sm">
                  <h3 className="text-neutral-8 dark:text-neutral-dark-8">
                    <Link href="https://travelhomes-frontend.vercel.app/" className="hover:bg-neutral-2 active:bg-neutral-3 dark:hover:bg-neutral-dark-2 dark:active:bg-neutral-dark-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-2 -mx-2 py-1 -my-1 rounded-lg">
                     travels homes
                      <span className="not-sr-only"> ↗</span>
                    </Link>
                  </h3>
                </header>
                <p className="text-neutral-6 dark:text-neutral-dark-6 lowercase text-pretty text-sm">
                a travel project that helps people plan and enjoy road trips in camper vans, rvs, and motorhomes, giving them the freedom to explore at their own pace.
                </p>
              </div>
            </div>
          </li>
        </ol>
      </section>

      {/* projects section */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
          <div>
            <h2 className="font-semibold text-xl sm:text-sm tracking-tight lowercase text-neutral-8 dark:text-neutral-dark-8">
              projects
            </h2>
          </div>
        </div>
        <ol className="flex flex-col gap-4">
          {/* Lolify project is currently down */}
          {/* <li>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <div className="w-full max-w-32 flex sm:justify-end">
                <Icon src="https://ext.same-assets.com/1107240702/2209693309.svg" alt="React Router Typesafe logo" />
              </div>
              <div>
                <header className="lowercase text-sm">
                  <h3 className="text-neutral-8 dark:text-neutral-dark-8">
                    <Link href="https://lolify.io/" className="hover:bg-neutral-2 active:bg-neutral-3 dark:hover:bg-neutral-dark-2 dark:active:bg-neutral-dark-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-2 -mx-2 py-1 -my-1 rounded-lg">
                    lolify ( frontend )
                      <span className="not-sr-only"> ↗</span>
                    </Link>
                  </h3>
                </header>
                <p className="text-neutral-6 dark:text-neutral-dark-6 lowercase text-pretty text-sm">
                lolify creates branded memes to boost engagement and drive better campaign results.
                </p>
              </div>
            </div>
          </li> */}
          <li>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <div className="w-full max-w-32 flex sm:justify-end">
                <Icon src="https://ext.same-assets.com/1107240702/366769914.svg" alt="Drizzle Toolbelt logo" />
              </div>
              <div>
                <header className="lowercase text-sm">
                  <h3 className="text-neutral-8 dark:text-neutral-dark-8">
                    <Link href="https://sidblogs.vercel.app/" className="hover:bg-neutral-2 active:bg-neutral-3 dark:hover:bg-neutral-dark-2 dark:active:bg-neutral-dark-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-2 -mx-2 py-1 -my-1 rounded-lg">
                    blogging website ( full stack )
                      <span className="not-sr-only">   ↗</span>
                    </Link>
                  </h3>
                </header>
                <p className="text-neutral-6 dark:text-neutral-dark-6 lowercase text-pretty text-sm">
                a blogging site for exploring code, sharing knowledge, and building the future.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <div className="w-full max-w-32 flex sm:justify-end">
                <Icon src="https://ext.same-assets.com/1107240702/2531423430.svg" alt="Zustand Context logo" />
              </div>
              <div>
                <header className="lowercase text-sm">
                  <h3 className="text-neutral-8 dark:text-neutral-dark-8">
                    <Link href="https://learnwebdev.vercel.app/" className="hover:bg-neutral-2 active:bg-neutral-3 dark:hover:bg-neutral-dark-2 dark:active:bg-neutral-dark-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-2 -mx-2 py-1 -my-1 rounded-lg">
                    learn web dev
                      <span className="not-sr-only"> ↗</span>
                    </Link>
                  </h3>
                </header>
                <p className="text-neutral-6 dark:text-neutral-dark-6 lowercase text-pretty text-sm">
                a basic roadmap and resources for learning Web development.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <div className="w-full max-w-32 flex sm:justify-end">
                <div className="flex items-center justify-center w-10 h-10 bg-neutral-2 rounded-lg overflow-hidden">
                  <span className="text-neutral-7 text-lg">T</span>
                </div>
              </div>
              <div>
                <header className="lowercase text-sm">
                  <h3 className="text-neutral-8 dark:text-neutral-dark-8">
                    <Link href="https://ama-beige.vercel.app/" className="hover:bg-neutral-2 active:bg-neutral-3 dark:hover:bg-neutral-dark-2 dark:active:bg-neutral-dark-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-2 -mx-2 py-1 -my-1 rounded-lg">
                    ask me anything
                      <span className="not-sr-only"> ↗</span>
                    </Link>
                  </h3>
                </header>
                <p className="text-neutral-6 dark:text-neutral-dark-6 lowercase text-pretty text-sm">
                for getting all the doubts and question at one place
                </p>
              </div>
            </div>
          </li>
        </ol>
      </section>


      {/* Contact Section */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
          <div>
            <h2 className="font-semibold text-xl sm:text-sm tracking-tight lowercase text-neutral-8 dark:text-neutral-dark-8">
              Contact
            </h2>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
          <div>
            <ol className="flex gap-2 -mx-1.5">
              <li>
                <Link
                  href="https://x.com/notcodesid"
                  className="lowercase text-neutral-8 dark:text-neutral-dark-8 text-sm bg-neutral-2 hover:bg-neutral-3 dark:bg-neutral-dark-2 dark:hover:bg-neutral-dark-3 active:bg-neutral-4 dark:active:bg-neutral-dark-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-3 py-2 rounded-full"
                >
                  Twitter / x
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/notcodesid"
                  className="lowercase text-neutral-8 dark:text-neutral-dark-8 text-sm bg-neutral-2 hover:bg-neutral-3 dark:bg-neutral-dark-2 dark:hover:bg-neutral-dark-3 active:bg-neutral-4 dark:active:bg-neutral-dark-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-3 py-2 rounded-full"
                >
                  GitHub
                </Link>
              </li>
              {/* LinkedIn */}
              <li>
                <Link
                  href="https://www.linkedin.com/in/sidharthh-pandro"
                  className="lowercase text-neutral-8 dark:text-neutral-dark-8 text-sm bg-neutral-2 hover:bg-neutral-3 dark:bg-neutral-dark-2 dark:hover:bg-neutral-dark-3 active:bg-neutral-4 dark:active:bg-neutral-dark-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-3 py-2 rounded-full"
                >
                  LinkedIn
                </Link>
              </li>

              {/* Email */}
              <li>
  <a
    href="mailto:notcodesid@gmail.com?subject=Hey%20Sidharth"
    className="lowercase text-neutral-8 dark:text-neutral-dark-8 text-sm bg-neutral-2 hover:bg-neutral-3 dark:bg-neutral-dark-2 dark:hover:bg-neutral-dark-3 active:bg-neutral-4 dark:active:bg-neutral-dark-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-7 dark:focus-visible:ring-neutral-dark-7 px-3 py-2 rounded-full"
  >
    say hello
  </a>
</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  )
}
