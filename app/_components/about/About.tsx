import CodeBadge from '@/app/_components/CodeBadge'
import RichText from '@/app/_components/RichText'
import Tetris from '@/app/_components/ui/tetris'
import { cn } from '@/app/_lib/utils'

import { getAbout } from './_data/about'

const About = async () => {
  const about = await getAbout()

  if (!about) {
    return null
  }

  return (
    <section
      aria-labelledby='about-title'
      className='relative mx-auto max-w-368 overflow-hidden border-t border-white/5 px-6 py-24 lg:px-10 xl:px-12'
      data-qa='about-section'
      id='about'
    >
      <div aria-hidden='true' className='pointer-events-none absolute inset-0'>
        <Tetris
          className='h-full mask-[radial-gradient(circle_at_center,white,transparent_75%)] opacity-70'
          base={80}
          borderColor='rgba(174, 198, 255, 0.06)'
          fillColor='rgba(174, 198, 255, 0.45)'
          hoverColor='rgba(174, 198, 255, 0.85)'
        />
        <div className='via-background/10 to-background/80 absolute inset-0 bg-linear-to-b from-transparent' />
      </div>

      <div
        className='relative z-10 mb-12'
        data-qa='about-header'
        data-reveal='up'
      >
        <CodeBadge label='about-me' />
        <h2
          className='font-jakarta text-on-surface text-3xl font-bold'
          data-qa='about-title'
          id='about-title'
        >
          {about.title}
        </h2>
      </div>
      <RichText
        className={cn(
          'glass-panel font-inter text-on-surface-variant relative z-10 space-y-6',
          'p-8 text-lg [&_code]:wrap-break-word [&_code]:whitespace-pre-wrap',
          '[&_pre]:wrap-break-word [&_pre]:whitespace-pre-wrap',
        )}
        data-qa='about-content'
        data-reveal='up'
        data-reveal-delay='100'
        html={about.contentHtml}
      />
    </section>
  )
}

export default About
