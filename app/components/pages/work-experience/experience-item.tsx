import Image from "next/image";
import { TechBadge } from "@/app/components/tech-badge";

export const ExperiencieItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="/images/icons/wlabs_io_logo.svg"
            alt="Logo wlabs.io"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800"></div>
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://www.linkedin.com/company/wlabs-io/"
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
          >
            @ WLabs.io
          </a>

          <h4 className="text-gray-300">
            Analista de Sistema | Quality Assurance | QA
          </h4>

          <span className="text-gray-500">
            mar 2021 • dex 2024 • (2 ano e 10 meses)
          </span>

          <p className="text-gray-400">
            ● Criação de documentos de testes: cenários de teste, relatórios e
            evidências
          </p>
          <p className="text-gray-400">
            ● Execução de testes manuais exploratórios.
          </p>
          <p className="text-gray-400">
            ● Automação de testes Web e Mobile utilizando ferramentas como
            Cypress e Robot Framework (com Appium para aplicativos nativos e
            Flutter)
          </p>
          <p className="text-gray-400">
            ● Treinamento de analistas de testes em automação Web e Mobile com
            Robot Framework
          </p>
          <p className="text-gray-400">
            ● Participação em projeto POC para testes móveis, segurança e
            usabilidade
          </p>
        </div>

        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          <TechBadge name="Cypress" />
          <TechBadge name="Cypress" />
          <TechBadge name="Cypress" />
          <TechBadge name="Cypress" />
          <TechBadge name="Cypress" />
        </div>
      </div>
    </div>
  );
};
