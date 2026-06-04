import CodeBadge from '@/app/_components/CodeBadge'
import RichText from '@/app/_components/RichText'
import Tetris from '@/app/_components/ui/tetris'

import { getAcademics } from './_data/academic'

const Academic = async () => {
  const academics = await getAcademics()

  if (academics.length === 0) {
    return null
  }

  return (
    <section
      aria-labelledby='academic-title'
      className='relative mx-auto max-w-368 overflow-hidden border-t border-white/5 px-6 py-24 lg:px-10 xl:px-12'
      data-qa='academic-section'
      id='academic'
    >
      <div aria-hidden='true' className='pointer-events-none absolute inset-0'>
        <Tetris
          className='h-full mask-[radial-gradient(circle_at_center,white,transparent_80%)] opacity-70'
          base={80}
          borderColor='rgba(71, 250, 243, 0.05)'
          fillColor='rgba(71, 250, 243, 0.4)'
          hoverColor='rgba(71, 250, 243, 0.75)'
        />
        <div className='via-background/10 to-background/80 absolute inset-0 bg-linear-to-b from-transparent' />
      </div>

      <div
        className='relative z-10 mb-12'
        data-qa='academic-header'
        data-reveal='up'
      >
        <CodeBadge label='education' />
        <h2
          className='font-jakarta text-on-surface text-3xl font-bold'
          data-qa='academic-title'
          id='academic-title'
        >
          Formação Acadêmica
        </h2>
      </div>
      <div className='relative z-10 space-y-6' data-qa='academic-list'>
        {academics.map((academic, index) => (
          <div
            className='glass-panel glass-card-hover p-8'
            data-qa={`academic-item-${index}`}
            data-reveal='up'
            data-reveal-delay={`${(index + 1) * 80}`}
            key={`${academic.degree}-${index}`}
          >
            <h3 className='font-jakarta text-on-surface mb-2 text-2xl font-semibold'>
              {academic.degree}
            </h3>
            <p className='font-jetbrains text-primary mb-4 text-sm'>
              {academic.institution} - {academic.period}
            </p>
            <RichText
              className='font-inter text-on-surface-variant'
              html={academic.descriptionHtml}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Academic
