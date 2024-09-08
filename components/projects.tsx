import ProjectCard from "@/components/ProjectCard";
import Bloging from "@/public/projects/project-1.png";
import Ama from "@/public/projects/project-2.png";
import learnwebdev from "@/public/projects/project-3.png";
import TravelUI from "@/public/projects/project-4.png";
import Brainwave from "@/public/projects/project-5.png";
import Password from "@/public/projects/project-6.png";

const projects = [
  {
    title: "Blogging Website",
    description: "A blogging site for exploring code, sharing knowledge, and building the future.",
    image: Bloging,
    liveSite: "personal-blogging-7ap2.vercel.app/",
    github: "https://github.com/notcodesid/personal-blogging"
  },
  {
    title: "Ask Me Anything",
    description: "For getting all the doubts and question at one place",
    image: Ama,
    liveSite: "https://ama-beige.vercel.app/",
    github: "https://github.com/notcodesid/askmeanything"
  },
  {
    title: "Learn Web Dev",
    description: "A basic roadmap and resources for learning Web development.",
    image:learnwebdev ,
    liveSite: "https://learnwebdev.vercel.app/",
    github: "https://github.com/notcodesid/learnwebdev"
  },
  {
    title: "Travel Map",
    description: "A travel app UI for seeking the satisfaction of seeing the incorruptible beauty of nature.",
    image: TravelUI,
    liveSite: "https://travel-app-nine-rho.vercel.app/",
    github: "https://github.com/notcodesid/Travel-app"
  },
  {
    title: "Brainwave",
    description: "Design cool websites with parallax effects and bento box layouts.",
    image: Brainwave,
    liveSite: "https://parallax-pro.vercel.app/",
    github: "https://github.com/notcodesid/Parallax-Pro-"
  },
   {
    title: "Typing Tester",
    description: "A typing tester that let you check you typing speed.",
    image: Password,
    liveSite: "https://typing-tester-phi.vercel.app/",
    github: "https://github.com/notcodesid/typing-tester"
  },
  // Add more projects here...
];

export default function Projects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of the projects I hae worked on. From web applications to mobile apps, I have built a diverse
              portfolio showcasing my skills and creativity.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}