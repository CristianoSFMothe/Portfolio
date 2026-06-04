import CodeBadge from '@/app/_components/CodeBadge'
import RichText from '@/app/_components/RichText'
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
      className='relative mx-auto max-w-368 border-t border-white/5 px-6 py-24 lg:px-10 xl:px-12'
      data-qa='about-section'
      id='about'
    >
      <div className='mb-12' data-qa='about-header'>
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
          'glass-panel font-inter text-on-surface-variant space-y-6',
          'p-8 text-lg [&_code]:wrap-break-word [&_code]:whitespace-pre-wrap',
          '[&_pre]:wrap-break-word [&_pre]:whitespace-pre-wrap',
        )}
        data-qa='about-content'
        html={about.contentHtml}
      />
    </section>
  )
}

export default About
