import { cn } from "@/app/libs/utils";
import { KnownTech as IKnownTech } from "@/app/types/projects";
import { getRelativeTimeString } from "@/app/utils/get-relative-time";
import { CMSIcon } from "../../cms-icon";

type KnownTechProps = {
  tech: IKnownTech
};

export const KnowTech = ({ tech }: KnownTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    "pt-BR"
  ).replace("há ", "");

  return (
    <div
      className={cn(
        "p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col",
        "gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all hover:scale-105"
      )}
    >
      <div className="flex items-center justify-between">
        <p className={`font-medium ${tech.name}`}>{tech.name}</p>
        <CMSIcon icon={tech.iconSvg} />
      </div>

      <span>{relativeTime} de experiência</span>
    </div>
  );
};
