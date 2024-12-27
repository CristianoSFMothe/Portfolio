"use client"

import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav-item";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Sobre",
    href: "#about",
  },
  {
    label: "Projetos",
    href: "/projects",
  },
  {
    label: "Experiência",
    href: "#experience",
  },
];

export const Header = () => {
  return (
    <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            width={68}
            height={59}
            src="/images/logo-sigla-cf.svg"
            alt="Logo CF QA Dev"
          />
        </Link>

        <nav className="flex items-center sm:gap-10 gap-4">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  );
};
