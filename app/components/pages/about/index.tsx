"use client";

import { Button } from "@/app/components/button";
import { SectionTitle } from "@/app/components/section-title";
import { cn } from "@/app/libs/utils";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { HomePageInfo } from "@/app/types/page-info";
import { RichText } from "../../rich-text";

type HomeSectionProps = {
  homeInfo: HomePageInfo;
};

export const AboutMe = ({ homeInfo }: HomeSectionProps) => {
  return (
    <section className="container py-16" id="about">
      <SectionTitle subtitle="sobre" title="Um pouco sobre mim" />

      <div className="flex flex-col md:flex-row gap-16 mt-10 items-center md:items-start">
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
              src={homeInfo.profileAbout.url}
              alt="Foto de Perfil do Cristiano Ferreira"
              className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] rounded-full object-cover"
              unoptimized
            />
          </motion.div>
        </motion.div>

        <div className="flex-1 flex flex-col items-center md:items-start">
          {/* Animação e renderização do RichText */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
            viewport={{ once: false }} // Isso permite que a animação aconteça várias vezes
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gray-400 text-sm sm:text-base flex flex-col gap-4"
            >
              <RichText content={homeInfo.aboutMe.raw} />
            </motion.div>
          </motion.div>

          {/* Botão para download do CV */}
          <motion.div
            initial={{ x: 100, y: 100, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileTap={{ scale: 0.9 }}
            className="w-max"
          >
            <a href={homeInfo.urlCurriculum} target="_blank">
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
