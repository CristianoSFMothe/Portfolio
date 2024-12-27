import { cn } from "@/app/libs/utils";

type NavItemProps = {
  label: string;
  href: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "text-gray-400 flex items-center gap-2 font-medium font-mono",
        "hover:text-gray-50"
      )}
    >
      <span className="text-emerald-400">#</span>
      {label}
    </a>
  );
};
