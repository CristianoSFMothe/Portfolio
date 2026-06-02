import { Badge } from '@/app/_components/ui/badge'
import { cn } from '@/app/_lib/utils'

export type ProjectTechTone = 'primary' | 'tertiary' | 'neutral'

const toneStyles: Record<ProjectTechTone, string> = {
  primary: 'bg-primary-container/20 text-primary border-primary/30',
  tertiary: 'bg-tertiary-container/20 text-tertiary border-tertiary/30',
  neutral:
    'bg-surface-container-highest text-on-surface-variant border-outline-variant',
}

export type ProjectTechTagProps = {
  label: string
  tone?: ProjectTechTone
  className?: string
}

const ProjectTechTag = ({
  label,
  tone = 'primary',
  className,
}: ProjectTechTagProps) => {
  return (
    <Badge
      variant='outline'
      className={cn(
        'font-jetbrains rounded-full px-3 py-1 text-[12px]',
        toneStyles[tone],
        className,
      )}
      data-qa={`project-tech-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
    >
      {label}
    </Badge>
  )
}

export default ProjectTechTag
