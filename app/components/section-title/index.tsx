import { cn } from "@/app/libs/utils";

type SectionTitleProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export const SectionTitle = ({
  title,
  subtitle,
  className,
}: SectionTitleProps) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <span className="font-mono text-sm text-emerald-400">{`.../${subtitle}`}</span>
      <h3 className="font-medium text-3xl">{title}</h3>
    </div>
  );
};
