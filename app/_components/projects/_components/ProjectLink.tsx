import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

import { Button } from '@/app/_components/ui/button'
import { cn } from '@/app/_lib/utils'

export type ProjectLinkProps = Omit<ComponentProps<typeof Link>, 'children'> & {
  label: string
  icon?: ReactNode
}

const ProjectLink = ({
  href,
  label,
  icon,
  className,
  ...props
}: ProjectLinkProps) => {
  return (
    <Button
      asChild
      variant='link'
      className={cn(
        'text-secondary hover:text-primary font-jetbrains mt-4 inline-flex',
        'h-auto gap-2 p-0 text-sm no-underline transition-colors hover:no-underline',
        className,
      )}
    >
      <Link
        aria-label={label}
        data-qa={`project-link-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
        href={href}
        {...props}
      >
        {label}
        {icon ?? <ArrowRight aria-hidden='true' size={16} />}
      </Link>
    </Button>
  )
}

export default ProjectLink
