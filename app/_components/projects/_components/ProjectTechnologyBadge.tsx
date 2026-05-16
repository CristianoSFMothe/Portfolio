import { Badge } from '@/app/_components/ui/badge'
import { cn } from '@/app/_lib/utils'

export type ProjectTechnologyBadgeProps = {
  label: string
  className?: string
}

const ProjectTechnologyBadge = ({
  label,
  className,
}: ProjectTechnologyBadgeProps) => {
  return (
    <Badge
      data-qa={`project-technology-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
      variant='outline'
      className={cn(
        'border-primary/10 bg-primary/10 text-primary font-jetbrains rounded px-3 py-1 text-sm',
        className,
      )}
    >
      {label}
    </Badge>
  )
}

export default ProjectTechnologyBadge
