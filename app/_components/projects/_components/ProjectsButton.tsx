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
        'from-primary-container to-inverse-primary font-jetbrains h-auto rounded-lg border',
        'border-white/20 bg-linear-to-r px-8 py-3 text-sm font-bold text-white',
        'shadow-[0_8px_20px_rgba(var(--shadow-primary-rgb),0.18)] transition-all',
        'duration-300 hover:shadow-[0_0_20px_rgba(0,112,243,0.4)]',
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
