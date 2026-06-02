import Image from 'next/image'
import type { ComponentProps } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/app/_components/ui/card'
import { cn } from '@/app/_lib/utils'

import ProjectDetailButton from './ProjectDetailButton'
import ProjectStatusBadge from './ProjectStatusBadge'
import ProjectTechTag, { type ProjectTechTone } from './ProjectTechTag'

export type ProjectTech = {
  label: string
  tone?: ProjectTechTone
}

export type ProjectCardProps = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  technologies: ProjectTech[]
  status?: string
  detailLabel?: string
  className?: string
  referrerPolicy?: ComponentProps<typeof Image>['referrerPolicy']
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  technologies,
  status,
  detailLabel,
  className,
  referrerPolicy = 'no-referrer',
}: ProjectCardProps) => {
  const qaSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const titleId = `project-card-title-${qaSlug}`

  return (
    <Card
      aria-labelledby={titleId}
      className={cn(
        'glass-card group relative flex flex-col gap-0 overflow-hidden',
        'rounded-xl border-0 bg-transparent py-0 shadow-none',
        className,
      )}
      data-qa={`project-card-${qaSlug}`}
    >
      {status ? <ProjectStatusBadge label={status} /> : null}

      <div className='bg-surface-container-high relative h-48 w-full overflow-hidden'>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className='object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-100'
          data-qa='project-card-image'
          referrerPolicy={referrerPolicy}
        />
        <div className='from-surface absolute inset-0 bg-linear-to-t to-transparent' />
      </div>

      <CardContent className='relative flex grow flex-col bg-[rgba(26,18,37,0.1)] p-6'>
        <CardTitle
          className='font-jakarta text-on-surface group-hover:text-primary mb-3 text-2xl font-bold transition-colors'
          id={titleId}
        >
          {title}
        </CardTitle>

        <CardDescription className='font-inter text-on-surface-variant mb-6 grow text-base'>
          {description}
        </CardDescription>

        <div className='mb-6 flex flex-wrap gap-2'>
          {technologies.map((tech) => (
            <ProjectTechTag
              key={tech.label}
              label={tech.label}
              tone={tech.tone}
            />
          ))}
        </div>

        <ProjectDetailButton label={detailLabel} />
      </CardContent>
    </Card>
  )
}

export default ProjectCard
