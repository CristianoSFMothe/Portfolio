"use client";

import Image from "next/image";
import { TechBadge } from "@/app/components/tech-badge";
import { WorkExperiences } from "@/app/types/work-experiences";
import { RichText } from "../../rich-text";
import { differenceInMonths, differenceInYears, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { motion } from "framer-motion";
import { fadeUpAnimation, techBadgeAnimation } from "@/app/libs/animations";

type ExperienceItemProps = {
  experience: WorkExperiences;
};

export const ExperiencieItem = ({ experience }: ExperienceItemProps) => {
  const {
    endDate,
    companyLogo,
    companyName,
    companyUrl,
    description,
    role,
    technologies,
  } = experience;

  const startDate = new Date(experience.startDate);

  const formattedStartDate = format(startDate, "MMM yyyy", { locale: ptBR });

  const formattedEndDate = endDate
    ? format(new Date(endDate), "MMM yyyy", { locale: ptBR })
    : "O momento";

  const end = endDate ? new Date(endDate) : new Date();

  const months = differenceInMonths(end, startDate);

  const years = differenceInYears(end, startDate);

  const monthsRemaining = months % 12;

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? "s" : ""}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? "es" : ""}`
            : ""
        }`
      : `${months} mes${months > 1 ? "es" : ""}`;

  return (
    <motion.div
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="https://us-west-2.graphassets.com/cm565vpwu0xda07lo67izgrxl/cm5ijwqq149rg07n4becedaad"
            alt={`Logo da empresa ${companyName}`}
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
            href={companyUrl}
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
          >
            @ {companyName}
          </a>

          <h4 className="text-gray-300">{role}</h4>

          <span className="text-gray-500">
            {formattedStartDate} • {formattedEndDate} • ({formattedDuration})
          </span>

          <div className="text-gray-400">
            <RichText content={description.raw} />
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          {technologies.map((tech, i) => (
            <TechBadge
              key={`experience-${companyName}-tech-${tech.name}`}
              name={tech.name}
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
