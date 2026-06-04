import { ArrowRight, Cloud, Code2, Database } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import RichText from '@/app/_components/RichText'
import { cn } from '@/app/_lib/utils'

import BlurReveal from '../BlurReveal'
import { Badge } from '../ui/badge'
import BackgroundGlow from './_components/BackgroundGlow'
import FloatingBadge from './_components/FloatingBadge'
import { getHero } from './_data/hero'

const Hero = async () => {
  const hero = await getHero()

  if (!hero) {
    return null
  }

  return (
    <div
      className='mx-auto max-w-368 px-6 sm:px-6 lg:px-10 xl:px-12'
      data-qa='hero-main'
    >
      <section
        aria-describedby='hero-description'
        aria-labelledby='hero-title'
        className={cn(
          'relative flex min-h-[calc(100svh-5rem)] flex-col overflow-x-clip lg:overflow-visible',
          'items-center justify-center gap-12 py-16 sm:gap-14 sm:py-20',
          'lg:min-h-217.5 lg:flex-row lg:justify-between lg:gap-16 lg:py-24',
        )}
        data-qa='hero-section'
        id='home'
      >
        <BackgroundGlow
          className={cn(
            'bg-primary-container/10 top-8 -left-12 h-64 w-64 blur-[80px] sm:top-12',
            'sm:left-0 sm:h-80 sm:w-80 sm:blur-[90px] lg:top-20 lg:h-96 lg:w-96 lg:blur-[100px]',
          )}
          data-qa='hero-glow-primary'
        />
        <BackgroundGlow
          className={cn(
            'bg-tertiary-container/10 -right-10 bottom-8 h-56 w-56 blur-[90px] sm:right-8 sm:bottom-6',
            'sm:h-72 sm:w-72 sm:blur-[100px] lg:right-20 lg:bottom-0 lg:h-80 lg:w-80 lg:blur-[120px]',
          )}
          data-qa='hero-glow-tertiary'
        />

        <header
          className={cn(
            'z-10 flex w-full max-w-2xl flex-1 flex-col items-center space-y-6',
            'text-center sm:space-y-8 lg:max-w-3xl lg:items-start lg:pr-8 lg:text-left',
          )}
          data-qa='hero-content'
        >
          <Badge
            aria-label={`Status profissional: ${hero.workStatus}`}
            className={cn(
              'border-primary/30 bg-primary/5 font-jetbrains text-primary',
              'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm',
            )}
            data-qa='hero-status-badge'
            data-reveal='up'
          >
            <span
              aria-hidden='true'
              className='bg-secondary h-2 w-2 animate-pulse rounded-full'
            ></span>
            {hero.workStatus}
          </Badge>

          <BlurReveal
            as='h1'
            blur='12px'
            className={cn(
              'font-jakarta text-on-surface max-w-[12ch] text-4xl leading-tight',
              'font-extrabold tracking-tight sm:max-w-[14ch] sm:text-5xl xl:text-6xl',
            )}
            delay={0.04}
            data-qa='hero-title'
            duration={1.15}
            id='hero-title'
            once={false}
            yOffset={12}
          >
            {hero.title}{' '}
            <span className='from-primary to-secondary neon-text-glow bg-linear-to-r bg-clip-text text-transparent'>
              {hero.highlightedText}
            </span>{' '}
            {hero.titleSuffix}
          </BlurReveal>

          <RichText
            className='font-inter text-on-surface-variant max-w-xl text-base sm:text-lg'
            data-qa='hero-description'
            data-reveal='up'
            data-reveal-delay='120'
            html={hero.descriptionHtml}
            id='hero-description'
          />

          <div
            aria-label='Acoes principais'
            className={cn(
              'flex w-full flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:justify-center',
              'sm:gap-4 sm:pt-4 lg:justify-start',
            )}
            data-qa='hero-actions'
            data-reveal='up'
            data-reveal-delay='180'
            role='group'
          >
            <Link
              aria-label={hero.primaryButtonText}
              className={cn(
                'btn-gradient to-inverse-primary flex w-full items-center justify-center gap-2',
                'rounded-lg border border-white/20 px-8 py-3 text-sm sm:w-auto',
                'hover:shadow-glow-primary-strong',
              )}
              data-qa='hero-projects-link'
              href={hero.primaryButtonLink}
            >
              {hero.primaryButtonText}
              <ArrowRight aria-hidden='true' size={20} />
            </Link>
            <Link
              aria-label={hero.secondaryButtonText}
              className={cn(
                'glass-panel font-jetbrains text-primary hover:bg-primary/10 flex w-full',
                'items-center justify-center gap-2 rounded-lg px-8 py-3 text-sm',
                'font-bold transition-all duration-300 sm:w-auto',
              )}
              data-qa='hero-contact-link'
              href={hero.secondaryButtonLink}
            >
              {hero.secondaryButtonText}
            </Link>
          </div>
        </header>

        <figure
          aria-labelledby='hero-visual-caption'
          className='relative z-10 flex w-full flex-1 items-center justify-center lg:justify-end lg:pr-10 xl:pr-16'
          data-qa='hero-visual'
          data-reveal='right'
          data-reveal-delay='120'
        >
          <figcaption className='sr-only' id='hero-visual-caption'>
            Workspace de desenvolvimento com badges de Backend Dev, Frontend Dev
            e Cloud & DevOps.
          </figcaption>
          <div
            className='relative h-80 w-full max-w-xs sm:h-96 sm:max-w-sm md:h-112 md:max-w-md lg:h-125 lg:w-100 lg:max-w-none'
            data-qa='hero-visual-frame'
          >
            <div
              aria-hidden='true'
              className='from-primary/20 to-tertiary/20 absolute inset-0 rounded-2xl bg-linear-to-br blur-lg sm:blur-xl'
              data-qa='hero-image-glow'
            ></div>
            <Image
              src={hero.imageUrl}
              alt={hero.imageAlt}
              fill
              className='relative z-10 h-full w-full rounded-2xl border border-white/10 object-cover shadow-2xl'
              data-qa='hero-image'
              referrerPolicy='no-referrer'
              sizes='(max-width: 639px) 100vw, (max-width: 767px) 24rem, (max-width: 1023px) 28rem, 25rem'
            />

            <FloatingBadge
              ariaHidden
              text='Backend Dev'
              data-qa='hero-badge-backend'
              icon={
                <Database
                  aria-hidden='true'
                  size={20}
                  className='text-secondary'
                />
              }
              className='hidden sm:top-8 sm:-left-4 sm:flex lg:top-20 lg:-left-12'
            />
            <FloatingBadge
              ariaHidden
              text='Frontend Dev'
              data-qa='hero-badge-frontend'
              icon={
                <Code2 aria-hidden='true' size={20} className='text-primary' />
              }
              className='hidden sm:top-1/2 sm:-right-3 sm:flex lg:-right-8'
            />
            <FloatingBadge
              ariaHidden
              text='Cloud & DevOps'
              data-qa='hero-badge-cloud-devops'
              icon={
                <Cloud aria-hidden='true' size={20} className='text-tertiary' />
              }
              className='hidden sm:-bottom-4 sm:left-5 sm:flex lg:-bottom-6 lg:left-8'
            />
          </div>
        </figure>
      </section>
    </div>
  )
}

export default Hero
