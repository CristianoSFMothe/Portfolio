import { RichText as CRMRichText } from "@graphcms/rich-text-react-renderer";
import { ComponentProps } from "react";
import { motion } from "framer-motion";

type RichTextProps = ComponentProps<typeof CRMRichText>;

export const RichText = ({ ...props }: RichTextProps) => {
  return (
    <CRMRichText
      {...props}
      renderers={{
        p: ({ children }) => (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 text-sm sm:text-base"
          >
            {children}
          </motion.p>
        ),
        bold: ({ children }) => (
          <b className="text-emerald-400 font-medium">{children}</b>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside pl-2 flex flex-col gap-1">
            {children}
          </ul>
        ),
        a: ({ children, ...props }) => (
          <a
            {...props}
            className="hover:text-emerald-500 transition-all underline"
          >
            {children}
          </a>
        ),
      }}
    />
  );
};
