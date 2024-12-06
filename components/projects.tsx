import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Blogging Website",
    description: "A blogging site for exploring code, sharing knowledge, and building the future.",
    image: "/projects/project-1.png",
    liveSite: "https://sidblogs.vercel.app/",
    github: "https://github.com/notcodesid/personal-blogging",
    techStack: ["Next", "Tailwind", "TypeScript" , "Cloudflare", "Postgres"],
  },
  {
    title: "Ask Me Anything",
    description: "For getting all the doubts and question at one place",
    image: "/projects/project-2.png",
    liveSite: "https://ama-beige.vercel.app/",
    github: "https://github.com/notcodesid/askmeanything",
    techStack: ["Next", "TypeScript", "Tailwind", "Mongo"],
  },
  {
    title: "Learn Web Dev",
    description: "A basic roadmap and resources for learning Web development.",
    image: "/projects/project-3.png",
    liveSite: "https://learnwebdev.vercel.app/",
    github: "https://github.com/notcodesid/learnwebdev",
    techStack: ["React", "Next", "Tailwind"],
  },
  {
    title: "Dognosis",
    description: "Reimagining the relationship between humans and our best friends",
    image: "/projects/project-4.png",
    liveSite: "https://dognosis.vercel.app/",
    github: "https://github.com/notcodesid/dognosis",
    techStack: ["Next", "React", "Tailwind"],
  },
  {
    title: "Brainwave",
    description: "Design cool websites with parallax effects and bento box layouts.",
    image: "/projects/project-5.png",
    liveSite: "https://parallax-pro.vercel.app/",
    github: "https://github.com/notcodesid/Parallax-Pro-",
    techStack: ["React", "Tailwind"],
  },
  {
    title: "Typing Tester",
    description: "A typing tester that lets you check your typing speed.",
    image: "/projects/project-6.png",
    liveSite: "https://typing-tester-phi.vercel.app/",
    github: "https://github.com/notcodesid/typing-tester",
    techStack: ["React", "TypeScript", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Check out some of the projects I have worked on. I have built a diverse
            portfolio showcasing my skills and creativity.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}