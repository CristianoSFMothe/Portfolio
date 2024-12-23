import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inptus: ClassValue[]) => {
  return twMerge(clsx(...inptus))
}