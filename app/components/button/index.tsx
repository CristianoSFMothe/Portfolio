import { cn } from "@/app/libs/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "bg-emerald-600 py3 px-4 text-gray-50 flex items-center", 
        "justify-center gap-2 hover:bg-emerald-500 transition-all disabled:opacity-50",
        className
      )}
    >
      {children}
    </button>
  );
};
