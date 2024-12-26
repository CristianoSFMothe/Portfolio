import { Link } from "@/app/components/link";
import { SectionTitle } from "@/app/components/section-title";
import { cn } from "@/app/libs/utils";
import { HiArrowNarrowLeft } from "react-icons/hi";

export const PageIntroduction = () => {
  return (
    <section
      className={cn(
        "w-full h-[450px] bg-hero-image bg-cover",
        "bg-no-repeat flex flex-col items-center justify-center px-2"
      )}
    >
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />

      <div className="flex flex-col items-center">
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Aqui você encontra uma lista de projetos que desenvolvi ao longo da
          minha carreira. Navegue à vontade e explore os projetos que foram
          criados, como foram feitos, as tecnologias utilizadas.
        </p>

        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Voltar para home
        </Link>
      </div>
    </section>
  );
};
