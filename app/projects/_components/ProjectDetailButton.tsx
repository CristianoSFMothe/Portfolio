import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/app/_components/ui/button'
import { cn } from '@/app/_lib/utils'

export type ProjectDetailButtonProps = {
  href: string
  label?: string
  className?: string
}

const ProjectDetailButton = ({
  href,
  label = 'Ver Detalhes',
  className,
}: ProjectDetailButtonProps) => {
  return (
    <Button
      asChild
      variant='outline'
      className={cn(
        'border-primary text-primary hover:bg-primary/10 font-jetbrains',
        'h-auto w-full justify-center gap-2 rounded-lg bg-transparent px-4 py-2',
        'text-sm transition-colors duration-300',
        className,
      )}
      data-qa='project-detail-button'
    >
      <Link href={href}>
        {label}
        <ArrowRight aria-hidden='true' />
      </Link>
    </Button>
  )
}

export default ProjectDetailButton
