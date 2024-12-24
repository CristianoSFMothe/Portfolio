import { TbBrandCypress } from "react-icons/tb";
import { SectionTitle } from "../../section-title";
import { KnowTech } from "./known-teck";

export const KnownTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <KnowTech
            key={index}
            tech={{
              icon: <TbBrandCypress />,
              name: "Cypress",
              startDate: "2022-03-01",
            }}
          />
        ))}
      </div>
    </section>
  );
};
