"use client";

import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav-item";
import { motion } from "framer-motion";

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
    label: "Experiência",
    href: "#work-experience",
  },
  {
    label: "Projetos",
    href: "/projects",
  },
];

export const Header = () => {
  return (
    <motion.header
      className="absolute top-0 w-full z-10 h-24 flex items-center justify-center"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.header>
  );
};
