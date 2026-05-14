import { Badge } from '@/app/_components/ui/badge'
import { cn } from '@/app/_lib/utils'

export type ExperienceSkillBadgeProps = {
  label: string
  className?: string
}

const ExperienceSkillBadge = ({
  label,
  className,
}: ExperienceSkillBadgeProps) => {
  return (
    <Badge
      variant='outline'
      className={cn(
        'bg-surface-variant text-on-surface rounded border-white/10 px-2 py-1 text-xs',
        className,
      )}
    >
      {label}
    </Badge>
  )
}

export default ExperienceSkillBadge
