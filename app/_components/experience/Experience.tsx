import CodeBadge from '@/app/_components/CodeBadge'
import FlickeringGrid from '@/app/_components/FlickeringGrid'
import { cn } from '@/app/_lib/utils'

import ExperienceTimelineItem from './_components/ExperienceTimelineItem'
import { experienceItems } from './_data/experience-items'

const Experience = () => {
  return (
    <section
      className='relative mx-auto max-w-368 overflow-hidden border-t border-white/5 px-6 py-24 lg:px-10 xl:px-12'
      id='experience'
    >
      <div className='pointer-events-none absolute inset-0'>
        <FlickeringGrid
          className='mask-[radial-gradient(circle_at_center,white,transparent_80%)] opacity-50'
          squareSize={4}
          gridGap={8}
          flickerChance={0.12}
          color='#47faf3'
          maxOpacity={0.12}
        />
        <div className='via-background/10 to-background/75 absolute inset-0 bg-linear-to-b from-transparent' />
      </div>

      <div className='relative z-10 mb-12' data-reveal='up'>
        <CodeBadge label='career-path' />
        <h2 className='font-jakarta text-on-surface text-3xl font-bold'>
          Experiência Profissional
        </h2>
      </div>

      <div
        className={cn(
          'relative z-10 space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full',
          'before:w-0.5 before:-translate-x-px before:bg-linear-to-b before:from-transparent',
          'before:via-white/20 before:to-transparent md:before:mx-auto md:before:translate-x-0',
        )}
      >
        {experienceItems.map((experience, index) => (
          <ExperienceTimelineItem
            key={`${experience.company}-${experience.role}`}
            {...experience}
            reveal={index % 2 === 0 ? 'left' : 'right'}
            revealDelay={index * 90}
          />
        ))}
      </div>
    </section>
  )
}

export default Experience
