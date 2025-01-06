import { cn } from "@/app/libs/utils";
import { ProjectCard } from "./project-card";
import Link from "next/link";
import { Project } from "@/app/types/projects";

type ProjectListProps = {
  projects: Project[]
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <section
      className={cn(
        "container py-32 grid grid-cols-1",
        "sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]",
        "gap-x-4 gap-y-6"
      )}
    >
     {projects.map((project) => (
       <Link key={project.title} href={`/projects/${project.slug}`}>
       <ProjectCard project={project} />
     </Link>
     ))}
    </section>
  );
};
