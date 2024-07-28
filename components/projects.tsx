import Link from "next/link";
import Image from "next/image"
import Brainwave from "@/public/projects/project-1.png"
import Todo from "@/public/projects/project-2.png"
import Typing from "@/public/projects/project-3.png"
import TravelUI from "@/public/projects/project-4.png"


export default function Projects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of the projects I've worked on. From web applications to mobile apps, I've built a diverse
              portfolio showcasing my skills and creativity.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {/* Project 01 */}
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <Link href="https://github.com/notcodesid/Parallax-Pro-" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Project</span>
            </Link>
            <Image  
             src={Brainwave} 
             alt="Project 1" 
             width={400} 
             height={300} 
             className="object-cover w-full h-60"
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Brainwave</h3>
              <p className="text-sm text-muted-foreground">Design cool websites with parallax effects and bento box layouts.</p>
              <div className="flex gap-2 mt-4">
                <Link
                  href="https://parallax-pro.vercel.app/"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Live Site
                </Link>
                <Link
                  href="https://github.com/notcodesid/Parallax-Pro-"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <Link href="https://github.com/notcodesid/todo-app" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Project</span>
            </Link>
            <Image  
             src={Todo} 
             alt="Project 1" 
             width={400} 
             height={300} 
             className="object-cover w-full h-60"
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Todo App</h3>
              <p className="text-sm text-muted-foreground">A todo application and let's to do track your task.</p>
              <div className="flex gap-2 mt-4">
                <Link
                  href="https://todo-app-sandy-two-64.vercel.app/"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Live Site
                </Link>
                <Link
                  href="https://github.com/notcodesid/todo-app"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <Link href="https://github.com/notcodesid/typing-tester" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Project</span>
            </Link>
            <Image  
             src={Typing} 
             alt="Project 1" 
             width={400} 
             height={300} 
             className="object-cover w-full h-60"
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Typing Tester</h3>
              <p className="text-sm text-muted-foreground">
              A typing tester that let's you check you typing speed.
              </p>
              <div className="flex gap-2 mt-4">
                <Link
                  href="https://typing-tester-phi.vercel.app/"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Live Site
                </Link>
                <Link
                  href="https://github.com/notcodesid/typing-tester"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <Link href="https://github.com/notcodesid/Travel-app" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Project</span>
            </Link>
            <Image  
             src={TravelUI} 
             alt="Project 1" 
             width={400} 
             height={300} 
             className="object-cover w-full h-60"
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Travel Map</h3>
              <p className="text-sm text-muted-foreground">A travel app UI for seeking the satisfaction of seeing the incorruptible beauty of nature.</p>
              <div className="flex gap-2 mt-4">
                <Link
                  href="https://travel-app-nine-rho.vercel.app/"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Live Site
                </Link>
                <Link
                  href="https://github.com/notcodesid/Travel-app"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>

        
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Project</span>
            </Link>
            <img src="/placeholder.svg" alt="Project 5" width={400} height={300} className="object-cover w-full h-60" />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Project 5</h3>
              <p className="text-sm text-muted-foreground">A mobile app for booking and managing appointments.</p>
              <div className="flex gap-2 mt-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Live Site
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Project</span>
            </Link>
            <img src="/placeholder.svg" alt="Project 6" width={400} height={300} className="object-cover w-full h-60" />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">Project 6</h3>
              <p className="text-sm text-muted-foreground">
                A web-based platform for managing team projects and tasks.
              </p>
              <div className="flex gap-2 mt-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Live Site
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}