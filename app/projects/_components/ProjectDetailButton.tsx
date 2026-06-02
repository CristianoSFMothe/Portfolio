import { ArrowRight } from 'lucide-react'
import type { ComponentProps } from 'react'

import { Button } from '@/app/_components/ui/button'
import { cn } from '@/app/_lib/utils'

export type ProjectDetailButtonProps = ComponentProps<typeof Button> & {
  label?: string
}

const ProjectDetailButton = ({
  label = 'Ver Detalhes',
  className,
  ...props
}: ProjectDetailButtonProps) => {
  return (
    <Button
      variant='outline'
      className={cn(
        'border-primary text-primary hover:bg-primary/10 font-jetbrains',
        'h-auto w-full justify-center gap-2 rounded-lg bg-transparent px-4 py-2',
        'text-sm transition-colors duration-300',
        className,
      )}
      data-qa='project-detail-button'
      {...props}
    >
      {label}
      <ArrowRight aria-hidden='true' />
    </Button>
  )
}

export default ProjectDetailButton
