import { Link } from "@/app/components/link";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";

export const ProjectCart = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          src="/images/project/project-01.png"
          alt="Project 1"
          width={420}
          height={304}
          className="w-full h-[220px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={32}
            height={32}
            src="/images/icons/project-title-icon.svg"
            alt=""
          />
          Robot Actions
        </h3>

        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          similique, voluptate eaque sit nemo ut dolorem fugit voluptates!
          Officia, molestias.
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="Robot Framework" />
          <TechBadge name="Robot Framework" />
          <TechBadge name="Robot Framework" />
        </div>

        <Link href="/projects/robot-actions">
        Ver projeto
        <FaRegEye size={18} />
        </Link>
      </div>
    </div>
  );
};
