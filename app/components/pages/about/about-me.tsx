"use client";

import { Button } from "@/app/components/button";
import { SectionTitle } from "@/app/components/section-title";
import { cn } from "@/app/libs/utils";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

export const AboutMe = () => { 

  const urlCV = "https://drive.google.com/file/d/1tRMhWRT-M6fsSFRWJOPSBKsY93ZZJq0T/view?usp=sharing"

  return (
    <section className="container py-16">
      <SectionTitle subtitle="sobre" title="Um pouco sobre mim" />

      <div
        id="about"
        className="flex flex-col md:flex-row gap-16 mt-10 items-center md:items-start"
      >
        <div
          className={cn(
            "w-[320px] h-[320px] lg:w-[440px] lg:h-[440px]",
            "flex items-center justify-center",
            "rounded-full border-2 border-emerald-500 shadow-2xl",
            "hidden sm:flex",
          )}
        >
          <Image
            width={420}
            height={404}
            src="/images/profile-pic.png"
            alt="Foto de Perfil do Cristiano Ferreira"
            className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] rounded-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col items-center md:items-start">
          <p className="text-gray-400 text-sm sm:text-base">
            Olá, sou{" "}
            <span className="text-emerald-500 text-lg sm:text-base font-normal sm:font-bold">
              Cristiano Ferreira
            </span>{" "}
            um Quality Assurance, graduado em{" "}
            <span className="text-emerald-500 text-lg">
              Sistema de Informações
            </span>{" "}
            , pela a Universidade Estácio de Sá.
          </p>

          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Apaixonado por tecnologia, posso mais de{" "}
            <span className="text-emerald-500 text-lg ">
              2 anos de experiência
            </span>{" "}
            em testes de software, atuando tanto em testes manuais quanto em
            automação, sempre com o objetivo de assegurar qualidade e eficiência
            nas operações.
          </p>

          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Tenho especial interesse e dedicação à automação de testes,
            utilizando diversas tecnologias e ferramentas para elevar a
            performance e a confiabilidade do software.
          </p>

          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Além disso, sou experiente em{" "}
            <span className="text-emerald-500 font-medium">
              Metodologia Ágil (Scrum e Kanban)
            </span>
            , contribuindo para maior agilidade e organização no
            desenvolvimento.
          </p>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Estou constantemente em busca de novos desafios que me permitam
            evoluir e construir uma carreira sólida no campo de Testes de
            Software.
          </p>

          <a href={urlCV} target="_blank">
            <Button
              className="shadow-button w-max mt-6 md:self-start btn-download-cv"
            >
              Download do CV
              <FaDownload size={18} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
