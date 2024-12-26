import { cn } from "@/app/libs/utils";
import { ProjectCard } from "./project-card";
import Link from "next/link";

export const ProjectList = () => {
  return (
    <section
      className={cn(
        "container py-32 grid grid-cols-1",
        "sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]",
        "gap-x-4 gap-y-6"
      )}
    >
      <Link href="/projects/projeto-01">
        <ProjectCard />
      </Link>
    </section>
  );
};
