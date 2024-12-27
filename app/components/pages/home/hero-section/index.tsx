"use client"

import { Button } from "@/app/components/button";
import { TechBadge } from "@/app/components/tech-badge";
import { cn } from "@/app/libs/utils";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";

const MOCK_CONTACTS = [
  {
    url: "https://www.linkedin.com/in/cristiano-da-silva-ferreira/",
    icon: <TbBrandGithub />,
  },
  {
    url: "https://github.com/CristianoSFMothe",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "https://wa.me/5521983765945",
    icon: <TbBrandWhatsapp />,
  },
];

export const HeroSection = () => {
  const handleContact = () => {
    const contactSection = document.querySelector("#contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth"})
    }
  }

  return (
    <section
      className={cn(
        "w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat",
        "flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]"
      )}
    >
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é...</p>
          <h2 className="text-4xl font-medium mt-3">Cristiano Ferreira</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Olá, sou um Quality Assurance, apaixonado por tecnologia, com mais
            de 2 anos de experiência em testes de software. Com foco em
            automação, para garantir a qualidade e eficiência das aplicações no
            qual estou envolvido.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge name="Cypress" />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="shadow-button w-max btn-contact-home" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile-pic.png"
          alt="Foto de Perfil do Cristiano Ferreira"
          className={cn(
            "w-[300px] h-[300px] lg:w-[420px] lg:h-[404px]",
            "mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover img-profile-home"
          )}
        />
      </div>
    </section>
  );
};
