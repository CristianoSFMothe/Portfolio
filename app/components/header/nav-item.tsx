import { cn } from "@/app/libs/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  label: string;
  href: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-gray-400 flex flex-col items-center gap-2 font-medium",
        "font-mono hover:text-gray-50",
        isActive && "text-gray-50"
      )}
    >
      <div className="flex items-center gap-2">
        <span className="text-emerald-400">#</span>
        {label}
      </div>
      {isActive && (
        <span className="w-full h-[2px] bg-emerald-400 rounded-md mt-1" />
      )}
    </Link>
  );
};
