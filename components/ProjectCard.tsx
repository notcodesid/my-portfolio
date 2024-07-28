import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }:any) {
  return (
    <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
      <Link href={project.github} className="absolute inset-0 z-10" prefetch={false}>
        <span className="sr-only">View Project</span>
      </Link>
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={300}
        className="object-cover w-full h-60"
      />
      <div className="p-4 bg-background">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <div className="flex gap-2 mt-4">
          <Link
            href={project.liveSite}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            prefetch={false}
          >
            Live Site
          </Link>
          <Link
            href={project.github}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            prefetch={false}
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}