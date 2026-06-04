import CodeBadge from '@/app/_components/CodeBadge'

import TechnologiesCarousel from './_component/TechnologiesCarousel'
import { getTechnologies } from './_data/technologies'

const Technologies = async () => {
  const technologies = await getTechnologies()

  if (technologies.length === 0) {
    return null
  }

  return (
    <section
      aria-labelledby='technologies-title'
      className='relative mx-auto max-w-368 border-t border-white/5 px-6 py-24 lg:px-10 xl:px-12'
      data-qa='technologies-section'
      id='technologies'
    >
      <div className='mb-12' data-qa='technologies-header'>
        <CodeBadge label='tech-stack' />
        <h2
          className='font-jakarta text-on-surface text-3xl font-bold'
          data-qa='technologies-title'
          id='technologies-title'
        >
          Principais Tecnologias
        </h2>
      </div>

      <TechnologiesCarousel technologies={technologies} />
    </section>
  )
}

export default Technologies
