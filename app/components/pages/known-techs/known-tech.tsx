import { cn } from "@/app/libs/utils";
import { KnownTech as IKnownTech } from "@/app/types/projects";
import { CMSIcon } from "../../cms-icon";
import { getExactExperience } from "@/app/utils/get-relative-time";

type KnownTechProps = {
  tech: IKnownTech;
};

export const KnowTech = ({ tech }: KnownTechProps) => {
  const experience = getExactExperience(new Date(tech.startDate), "pt-BR");

  return (
    <div
      className={cn(
        "p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col",
        "gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all hover:scale-105"
      )}
    >
      <div className="flex items-center justify-between">
        <p className="font-medium truncate">{tech.name}</p>
        <CMSIcon icon={tech.iconSvg} />
      </div>

      {/* <span className="truncate">{experience} de experiência</span> */}
    </div>
  );
};
