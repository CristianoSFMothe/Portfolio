import { cn } from "@/app/libs/utils";
import Image from "next/image";

export const ProjectCard = () => {
  return (
    <div
      className={cn(
        "rounded-lg h-[436px] flex flex-col bg-gray-800",
        "overflow-hidden border-2 border-gray-800 hover:border-emerald-500",
        "opacity-70 hover:opacity-100 transition-all group"
      )}
    >
      <div className="w-full h-48 overflow-hidden">
        <Image
          src="/images/project/project-01.png"
          alt="projeto 01"
          unoptimized
          width={380}
          height={200}
          className="group-hover:scale-110 w-full h-full object-cover duration-500 transition-all"
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-fuchsia-50/90 group-hover:text-emerald-500 transition-all">Projeto 01</strong>

        <p className="mt-2 text-gray-400 line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse amet
          explicabo cum voluptatem, a ut animi magni reprehenderit distinctio
          autem minus quidem asperiores maxime natus vitae similique enim
          voluptates hic?
        </p>

        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">Robot Framework, GitHub, GitHub Actions, Python</span>
      </div>
    </div>
  );
};
