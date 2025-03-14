import { HorizontalDivider } from "@/app/components/divider/horizontal";
import { SectionTitle } from "@/app/components/section-title";
import { ProjectCart } from "./project-cart";
import { Link } from "@/app/components/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Project } from "@/app/types/projects";

type HighlightedProjectsProps = {
  projects: Project[];
};

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  // console.log(projects);

  return (
    <section className="container py-16 text-right">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      <HorizontalDivider className="mb-16" />

      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCart project={project} />
            <HorizontalDivider className="my-16" />
          </div>
        ))}

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link className="inline-flex" href="/projects">
            Ver todos os projetos
            <HiArrowNarrowRight size={18} />
          </Link>
        </p>
      </div>
    </section>
  );
};
