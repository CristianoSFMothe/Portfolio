import { IoMdHeart } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="h-14 w-full flex items-center justify-center bg-gray-950">
      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
        &trade; Feitor por
        <IoMdHeart className="text-red-600" size={13} />
      </span>{" "}
      <strong className="text-emerald-500 font-medium">
        {" "}
        Cristiano Ferreira{" "}
      </strong>{" "}
      <p className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400"> - 2024</p>
    </footer>
  );
};
