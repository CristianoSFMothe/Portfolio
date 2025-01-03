import { TbBrandCypress } from "react-icons/tb";
import { SectionTitle } from "../../section-title";
import { KnowTech } from "./known-tech";
import { KnownTech as IknownTech } from '@/app/types/projects';

type KnownTechsProps = {
  techs: IknownTech[]
}

export const KnownTechs = ({ techs }: KnownTechsProps ) => {
  return (
    <section className="container py-16 text-right">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((tech) => (
          <KnowTech
            key={tech.name}
            tech={tech}
          />
        ))}
      </div>
    </section>
  );
};
