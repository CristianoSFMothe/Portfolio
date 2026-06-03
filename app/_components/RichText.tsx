import type { ComponentProps } from 'react'

type RichTextProps = Omit<
  ComponentProps<'div'>,
  'dangerouslySetInnerHTML' | 'children'
> & {
  html: string
}

const RichText = ({ html, ...props }: RichTextProps) => {
  return <div {...props} dangerouslySetInnerHTML={{ __html: html }} />
}

export default RichText
