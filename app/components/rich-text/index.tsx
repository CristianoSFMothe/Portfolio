import { RichText as CRMRichText } from "@graphcms/rich-text-react-renderer"
import { ComponentProps } from "react"

type RichTextProps = ComponentProps<typeof CRMRichText>

export const RichText = ({ ...props }: RichTextProps) => {
  return (
    <CRMRichText
      {...props}
      renderers={{
        bold: ({ children }) => (
          <b className="text-gray-50 font-medium">{children}</b>
        )
      }}
    />
  )
}