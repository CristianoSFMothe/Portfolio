"use client";

import { Button } from "@/app/components/button";
import { SectionTitle } from "@/app/components/section-title";
import { cn } from "@/app/libs/utils";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { HomePageInfo } from "@/app/types/page-info";

type HomeSectionProps = {
  homeInfo: HomePageInfo;
};

export const AboutMe = ({ homeInfo }: HomeSectionProps) => {
  const urlCV =
    "https://drive.google.com/file/d/1tRMhWRT-M6fsSFRWJOPSBKsY93ZZJq0T/view?usp=sharing";

  const paragraphTexts = [
    <>
      Prazer, eu sou...{" "}
      <span className="text-emerald-500 text-lg sm:text-base font-normal sm:font-bold">
        Cristiano Ferreira
      </span>{" "}
      um Quality Assurance, graduado em{" "}
      <span className="text-emerald-500 text-lg">Sistema de Informações</span>,
      pela a Universidade Estácio de Sá.
    </>,
    <>
      Apaixonado por tecnologia, possuo mais de{" "}
      <span className="text-emerald-500 text-lg">2 anos de experiência</span> em
      testes de software, atuando tanto em testes manuais quanto em automação,
      sempre com o objetivo de assegurar qualidade e eficiência nas operações.
    </>,
    <>
      Tenho especial interesse e dedicação à automação de testes, utilizando
      diversas tecnologias e ferramentas para elevar a performance e a
      confiabilidade do software.
    </>,
    <>
      Além disso, sou experiente em{" "}
      <span className="text-emerald-500 font-medium">
        Metodologia Ágil (Scrum e Kanban)
      </span>
      , contribuindo para maior agilidade e organização no desenvolvimento.
    </>,
    <>
      Estou constantemente em busca de novos desafios que me permitam evoluir e
      construir uma carreira sólida no campo de Testes de Software.
    </>,
  ];

  return (
    <section className="container py-16">
      <SectionTitle subtitle="sobre" title="Um pouco sobre mim" />

      <div
        id="about"
        className="flex flex-col md:flex-row gap-16 mt-10 items-center md:items-start"
      >
        <motion.div
          className={cn(
            "w-[320px] h-[320px] lg:w-[440px] lg:h-[440px]",
            "flex items-center justify-center",
            "rounded-full border-2 border-emerald-500 shadow-2xl",
            "hidden sm:flex",
          )}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.div
            className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] rounded-full overflow-hidden"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              width={420}
              height={404}
              src={homeInfo.profilePicture.url}
              alt="Foto de Perfil do Cristiano Ferreira"
              className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] rounded-full object-cover"
            />
          </motion.div>
        </motion.div>

        <div className="flex-1 flex flex-col items-center md:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
          >
            {paragraphTexts.map((text, index) => (
              <motion.p
                key={index}
                className={`text-gray-400 text-sm sm:text-base ${
                  index !== 0 ? "mt-4" : ""
                }`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            initial={{ x: 100, y: 100, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileTap={{ scale: 0.9 }}
            className="w-max"
          >
            <a href={urlCV} target="_blank">
              <Button className="shadow-button w-max mt-6 md:self-start btn-download-cv">
                Download do CV
                <FaDownload size={18} />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
