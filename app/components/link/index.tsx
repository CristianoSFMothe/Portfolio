import { cn } from "@/app/libs/utils";
import NextLink from "next/link";
import { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof NextLink>;

export const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <NextLink
      className={cn(
        "flex items-center gap-2 text-gray-300",
        "hover:text-emerald-500 transition-colors", className
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
};
