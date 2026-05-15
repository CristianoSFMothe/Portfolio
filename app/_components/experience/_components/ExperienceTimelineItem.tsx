import { Briefcase } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/app/_components/ui/card'
import { cn } from '@/app/_lib/utils'

import type { ExperienceItem } from '../_types/experience-item'
import ExperienceSkillBadge from './ExperienceSkillBadge'

export type ExperienceTimelineItemProps = ExperienceItem & {
  className?: string
  reveal?: 'up' | 'left' | 'right' | 'scale'
  revealDelay?: number
}

const ExperienceTimelineItem = ({
  company,
  role,
  period,
  responsibilities,
  skills,
  className,
  reveal = 'up',
  revealDelay = 0,
}: ExperienceTimelineItemProps) => {
  return (
    <div
      className='group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse'
      data-reveal={reveal}
      data-reveal-delay={revealDelay}
    >
      <div className='bg-surface-container-high text-primary z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 shadow md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2'>
        <Briefcase size={16} />
      </div>

      <Card
        className={cn(
          'glass-panel glass-card-hover w-[calc(100%-4rem)] gap-0 border-white/10 bg-transparent py-0 shadow-none md:w-[calc(50%-2.5rem)]',
          className,
        )}
      >
        <CardContent className='space-y-4 p-6'>
          <div className='flex flex-col'>
            <CardTitle className='font-jakarta text-on-surface text-xl font-bold'>
              {company}
            </CardTitle>
            <p className='font-jetbrains text-secondary my-1 text-sm'>{role}</p>
            <CardDescription className='font-inter text-on-surface-variant text-sm'>
              {period}
            </CardDescription>
          </div>

          <div>
            <h4 className='text-on-surface mb-2 font-bold'>Atividades:</h4>
            <ul className='text-on-surface-variant font-inter list-inside list-disc space-y-1 text-sm'>
              {responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='text-on-surface mb-2 font-bold'>Competências:</h4>
            <div className='flex flex-wrap gap-2'>
              {skills.map((skill) => (
                <ExperienceSkillBadge key={skill} label={skill} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ExperienceTimelineItem
