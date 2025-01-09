import { WorkExperiences as IwWrkExperiences } from "@/app/types/work-experiences";
import { SectionTitle } from "../../section-title";
import { ExperiencieItem } from "./experience-item";

type WorkExperiencesProps = {
  experiences: IwWrkExperiences[];
};

export const WorkExperience = ({ experiences }: WorkExperiencesProps) => {
  return (
    <section
      className="container py-16 flex gap-10 md:gap-4 lg:gap-16 md:flex-col flex-col"
    >
      <div className="max-w-[420px]">
        <SectionTitle subtitle="experiência" title="Experiência Profissional" />

        <p className="text-gray-400 mt-6">
          estou sempre aberto para novos desafios e projetos emocionantes.
          Trabalhando para criar soluções incríveis e inovadoras.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {experiences?.map((experience) => (
          <ExperiencieItem
            key={`${experience.companyName}-${experience.startDate}`}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
};
