'use client'

import {
  Box,
  Cloud,
  Code2,
  Database,
  GitMerge,
  Layers,
  Terminal,
} from 'lucide-react'
import * as React from 'react'

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/_components/ui/carousel'

import TechnologyCard from './TechnologyCard'

const AUTOPLAY_DELAY = 4000

const technologies = [
  {
    icon: <Code2 size={36} className='text-primary' />,
    label: 'JS / TS',
  },
  {
    icon: <Layers size={36} className='text-secondary' />,
    label: 'React / Next.js',
  },
  {
    icon: <Terminal size={36} className='text-tertiary' />,
    label: 'Node.js / Express',
  },
  {
    icon: <Database size={36} className='text-primary' />,
    label: 'PostgreSQL / MongoDB',
  },
  {
    icon: <Cloud size={36} className='text-secondary' />,
    label: 'AWS / Azure',
  },
  {
    icon: <Box size={36} className='text-tertiary' />,
    label: 'Docker / Kubernetes',
  },
  {
    icon: <GitMerge size={36} className='text-primary' />,
    label: 'CI/CD / Git',
  },
  {
    icon: <Layers size={36} className='text-secondary' />,
    label: 'Microsserviços',
  },
]

const Technologies = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [isPaused, setIsPaused] = React.useState(false)

  React.useEffect(() => {
    if (!api || isPaused) return

    const intervalId = window.setInterval(() => {
      api.scrollNext()
    }, AUTOPLAY_DELAY)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [api, isPaused])

  return (
    <section
      className='relative mx-auto max-w-368 border-t border-white/5 px-6 py-24 lg:px-10 xl:px-12'
      id='technologies'
    >
      <div className='mb-12'>
        <div className='code-badge'>&lt;tech-stack /&gt;</div>
        <h2 className='font-jakarta text-on-surface text-3xl font-bold'>
          Principais Tecnologias
        </h2>
      </div>

      <Carousel
        aria-label='Tecnologias'
        className='mx-auto w-full'
        onBlurCapture={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        opts={{ align: 'start', loop: true }}
        setApi={setApi}
      >
        <CarouselContent>
          {technologies.map((technology) => (
            <CarouselItem
              key={technology.label}
              className='basis-full sm:basis-1/2 lg:basis-1/4'
            >
              <TechnologyCard icon={technology.icon} label={technology.label} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='bg-surface/80 text-on-surface hover:bg-surface -left-4 hidden border-white/10 md:flex lg:-left-5' />
        <CarouselNext className='bg-surface/80 text-on-surface hover:bg-surface -right-4 hidden border-white/10 md:flex lg:-right-5' />
      </Carousel>
    </section>
  )
}

export default Technologies
