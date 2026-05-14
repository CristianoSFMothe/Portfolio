import CodeBadge from '@/app/_components/CodeBadge'

import ExperienceTimelineItem from './_components/ExperienceTimelineItem'
import { experienceItems } from './_data/experience-items'

const Experience = () => {
  return (
    <section
      className='relative mx-auto max-w-368 border-t border-white/5 px-6 py-24 lg:px-10 xl:px-12'
      id='experience'
    >
      <div className='mb-12'>
        <CodeBadge label='career-path' />
        <h2 className='font-jakarta text-on-surface text-3xl font-bold'>
          Experiência Profissional
        </h2>
      </div>

      <div className='relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent md:before:mx-auto md:before:translate-x-0'>
        {experienceItems.map((experience) => (
          <ExperienceTimelineItem
            key={`${experience.company}-${experience.role}`}
            {...experience}
          />
        ))}
      </div>
    </section>
  )
}

export default Experience
