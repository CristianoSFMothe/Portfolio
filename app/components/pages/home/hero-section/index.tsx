"use client";

import { Button } from "@/app/components/button";
import { CMSIcon } from "@/app/components/cms-icon";
import { RichText } from "@/app/components/rich-text";
import { TechBadge } from "@/app/components/tech-badge";
import { cn } from "@/app/libs/utils";
import { HomePageInfo } from "@/app/types/page-info";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { techBadgeAnimation } from "@/app/libs/animations";

type HomeSectionProps = {
  homeInfo: HomePageInfo;
};

export const HeroSection = ({ homeInfo }: HomeSectionProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector("#contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={cn(
        "w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat",
        "flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]",
      )}
    >
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-emerald-400">Prazer, eu sou...</p>

          <motion.h2
            className="text-4xl font-medium mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="inline-block"
              initial={{ width: 0 }}
              animate={{
                width: "auto",
              }}
              transition={{
                duration: 3,
                ease: "linear",
              }}
              style={{ whiteSpace: "nowrap", overflow: "hidden" }}
            >
              Cristiano Ferreira
            </motion.span>
            <motion.span
              className="inline-block w-1 bg-white ml-1"
              animate={{
                opacity: [1, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: "ease",
              }}
            >
              &nbsp;
            </motion.span>
          </motion.h2>

          <div className="text-gray-400 my-6 text-sm sm:text-base">
            <RichText content={homeInfo.introduction.raw} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {homeInfo.technologies.map((tech, i) => (
              <TechBadge
                name={tech.name}
                key={`intro-tech-${tech.name}`}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: i * 0.1 }}
              />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button
              className="shadow-button w-max btn-contact-home"
              onClick={handleContact}
            >
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {homeInfo.socials.map((contact, index) => (
                <motion.a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CMSIcon icon={contact.iconSvg} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            width={420}
            height={404}
            src={homeInfo.profilePicture.url}
            alt="Foto de Perfil do Cristiano Ferreira"
            className={cn(
              "w-[300px] h-[300px] lg:w-[420px] lg:h-[404px]",
              "mb-6 lg:mb-0 rounded-lg shadow-2xl object-cover img-profile-home",
            )}
          />
        </motion.div>
      </div>
    </section>
  );
};
