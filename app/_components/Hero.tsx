import { ArrowRight, Cloud, Code2, Database } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '../_lib/utils'
import BackgroundGlow from './BackgroundGlow'
import FloatingBadge from './FloatingBadge'
import { Badge } from './ui/badge'

const Hero = () => {
  return (
    <main
      className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-20'
      data-qa='hero-main'
    >
      <section
        aria-describedby='hero-description'
        aria-labelledby='hero-title'
        className={cn(
          'relative flex min-h-[calc(100svh-5rem)] flex-col overflow-x-clip',
          'items-center justify-center gap-12 py-16 sm:gap-14 sm:py-20',
          'lg:min-h-217.5 lg:flex-row lg:justify-between lg:gap-16 lg:py-24',
        )}
        data-qa='hero-section'
        id='inicio'
      >
        <BackgroundGlow
          className='bg-primary-container/10 top-8 -left-12 h-64 w-64 blur-[80px] sm:top-12 sm:left-0 sm:h-80 sm:w-80 sm:blur-[90px] lg:top-20 lg:h-96 lg:w-96 lg:blur-[100px]'
          data-qa='hero-glow-primary'
        />
        <BackgroundGlow
          className='bg-tertiary-container/10 -right-10 bottom-8 h-56 w-56 blur-[90px] sm:right-8 sm:bottom-6 sm:h-72 sm:w-72 sm:blur-[100px] lg:right-20 lg:bottom-0 lg:h-80 lg:w-80 lg:blur-[120px]'
          data-qa='hero-glow-tertiary'
        />

        <header
          className='z-10 flex w-full max-w-2xl flex-1 flex-col items-center space-y-6 text-center sm:space-y-8 lg:max-w-3xl lg:items-start lg:pr-8 lg:text-left'
          data-qa='hero-content'
        >
          <Badge
            aria-label='Status profissional: open to work'
            className={cn(
              'border-primary/30 bg-primary/5 font-jetbrains text-primary',
              'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm',
            )}
            data-qa='hero-status-badge'
          >
            <span
              aria-hidden='true'
              className='bg-secondary h-2 w-2 animate-pulse rounded-full'
            ></span>
            Open to work
          </Badge>

          <h1
            className='font-jakarta text-on-surface max-w-[12ch] text-4xl leading-tight font-extrabold tracking-tight sm:max-w-[14ch] sm:text-5xl xl:text-6xl'
            data-qa='hero-title'
            id='hero-title'
          >
            Engenheiro de Software focado em construir{' '}
            <span className='from-primary to-secondary neon-text-glow bg-linear-to-r bg-clip-text text-transparent'>
              soluções robustas
            </span>{' '}
            e escaláveis
          </h1>

          <p
            className='font-inter text-on-surface-variant max-w-xl text-base sm:text-lg'
            data-qa='hero-description'
            id='hero-description'
          >
            Sou Cristiano Ferreira, um desenvolvedor com paixão por código
            limpo, arquitetura eficiente e inovação constante. Construo
            aplicações modernas focadas em performance e experiência do usuário.
          </p>

          <div
            aria-label='Acoes principais'
            className='flex w-full flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 sm:pt-4 lg:justify-start'
            data-qa='hero-actions'
            role='group'
          >
            <Link
              aria-label='Ver projetos'
              className={cn(
                'from-primary-container to-inverse-primary font-jetbrains w-full justify-center px-8 py-3 text-sm sm:w-auto',
                'flex items-center gap-2 rounded-lg border border-white/20 bg-linear-to-r font-bold',
                'text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--shadow-primary-rgb),0.4)]',
              )}
              data-qa='hero-projects-link'
              href='#projetos'
            >
              Ver projetos
              <ArrowRight aria-hidden='true' size={20} />
            </Link>
            <Link
              aria-label='Entrar em contato'
              className={cn(
                'glass-panel font-jetbrains text-primary hover:bg-primary/10 flex w-full items-center justify-center gap-2',
                'rounded-lg px-8 py-3 text-sm font-bold transition-all duration-300 sm:w-auto',
              )}
              data-qa='hero-contact-link'
              href='#contato'
            >
              Entrar em contato
            </Link>
          </div>
        </header>

        <figure
          aria-labelledby='hero-visual-caption'
          className='relative z-10 flex w-full flex-1 items-center justify-center lg:justify-end'
          data-qa='hero-visual'
        >
          <figcaption className='sr-only' id='hero-visual-caption'>
            Workspace de desenvolvimento com badges de Backend Dev, Frontend Dev
            e Cloud & DevOps.
          </figcaption>
          <div
            className='relative h-[20rem] w-full max-w-xs sm:h-[24rem] sm:max-w-sm md:h-[28rem] md:max-w-md lg:h-125 lg:w-100 lg:max-w-none'
            data-qa='hero-visual-frame'
          >
            <div
              aria-hidden='true'
              className='from-primary/20 to-tertiary/20 absolute inset-0 rounded-2xl bg-linear-to-br blur-lg sm:blur-xl'
              data-qa='hero-image-glow'
            ></div>
            <Image
              src='https://lh3.googleusercontent.com/aida-public/AB6AXuDLJ4cO3gUKt9PY-2nj26oUJxfbaEpKthPxT59HU-AJSpJeOsTkyzRd84iPR-1EaEch-uh6TZxXyYFjM1y0_CThfM2jmayIsoO-dlqQ163KLILugvYgA-yVf5Uw9u-yPZO1gZn_mDWBHcMXoJALop0ucwi2JgCfxjD33TP-8LwrgVv9k_qnEwzy-2ksvtySTMos0oJMBVpVlu19JI7muryAy0g5i1zuLv8Fu36xGW8bkRvUrW-s0KiLRheR7JFT9Gv_HXTI9ziF6b8'
              alt='Coding workspace'
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
    </main>
  )
}

export default Hero
