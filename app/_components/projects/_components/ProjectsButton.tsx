import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

import { Button } from '@/app/_components/ui/button'
import { cn } from '@/app/_lib/utils'

export type ProjectsButtonProps = Omit<
  ComponentProps<typeof Link>,
  'children'
> & {
  label: string
  icon?: ReactNode
}

const ProjectsButton = ({
  href,
  label,
  icon,
  className,
  ...props
}: ProjectsButtonProps) => {
  return (
    <Button
      asChild
      className={cn(
        'btn-gradient to-inverse-primary h-auto rounded-lg border border-white/20',
        'shadow-glow-primary hover:shadow-glow-primary-strong px-8 py-3 text-sm',
        className,
      )}
    >
      <Link
        aria-label={label}
        data-qa={`projects-button-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
        href={href}
        {...props}
      >
        {label}
        {icon ?? <ArrowRight aria-hidden='true' size={20} />}
      </Link>
    </Button>
  )
}

export default ProjectsButton
