import { cn } from "@/app/libs/utils";
import { Project } from "@/app/types/projects";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const technologies = project.technologies.map(x => x.name).join(', ')

  return (
    <div
      className={cn(
        "rounded-lg h-[436px] flex flex-col bg-gray-800",
        "overflow-hidden border-2 border-gray-800 hover:border-emerald-500",
        "opacity-70 hover:opacity-100 transition-all group",
      )}
    >
      <div className="w-full h-48 overflow-hidden">
        <Image
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          unoptimized
          width={380}
          height={200}
          className="group-hover:scale-110 w-full h-full object-cover duration-500 transition-all"
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-fuchsia-50/90 group-hover:text-emerald-500 transition-all">
          {project.title}
        </strong>

        <p className="mt-2 text-gray-400 line-clamp-4">
          {project.shortDescription}
        </p>

        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          {technologies}
        </span>
      </div>
    </div>
  );
};
