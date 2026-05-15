import Image from 'next/image'
import type { ComponentProps } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/app/_components/ui/card'
import { cn } from '@/app/_lib/utils'

import ProjectLink from './ProjectLink'
import ProjectTechnologyBadge from './ProjectTechnologyBadge'

export type ProjectCardProps = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  technologies: string[]
  href: string
  linkLabel?: string
  className?: string
  referrerPolicy?: ComponentProps<typeof Image>['referrerPolicy']
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  technologies,
  href,
  linkLabel = 'Ver projeto',
  className,
  referrerPolicy = 'no-referrer',
}: ProjectCardProps) => {
  return (
    <Card
      className={cn(
        'glass-panel glass-card-hover gap-0 border-white/10 bg-transparent py-0 shadow-none',
        className,
      )}
    >
      <CardContent className='flex flex-col items-center gap-8 p-6 md:flex-row'>
        <div className='relative h-62.5 w-full md:h-75 md:w-1/2'>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className='rounded-lg border border-white/10 object-cover shadow-lg'
            referrerPolicy={referrerPolicy}
          />
        </div>

        <div className='w-full space-y-4 md:w-1/2'>
          <CardTitle className='font-jakarta text-on-surface text-2xl leading-tight font-bold'>
            {title}
          </CardTitle>
          <CardDescription className='font-inter text-on-surface-variant text-base'>
            {description}
          </CardDescription>

          <div className='flex flex-wrap gap-2'>
            {technologies.map((technology) => (
              <ProjectTechnologyBadge key={technology} label={technology} />
            ))}
          </div>

          <ProjectLink href={href} label={linkLabel} />
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
