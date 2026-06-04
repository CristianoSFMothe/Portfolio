'use client'

import * as React from 'react'

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/_components/ui/carousel'

import type { Technology } from '../_types/technology'
import TechnologyCard from './TechnologyCard'

const AUTOPLAY_DELAY = 4000

type TechnologiesCarouselProps = {
  technologies: Technology[]
}

const TechnologiesCarousel = ({ technologies }: TechnologiesCarouselProps) => {
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
    <Carousel
      aria-label='Tecnologias'
      className='mx-auto w-full'
      data-qa='technologies-carousel'
      onBlurCapture={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      opts={{ align: 'start', loop: true }}
      setApi={setApi}
    >
      <CarouselContent className='py-3'>
        {technologies.map((technology) => (
          <CarouselItem
            key={technology.name}
            className='basis-full sm:basis-1/2 lg:basis-1/4'
          >
            <TechnologyCard
              iconUrl={technology.iconUrl}
              label={technology.name}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        aria-label='Tecnologia anterior'
        className='text-on-surface hover:bg-surface -left-4 hidden border-white/10 bg-white md:flex lg:-left-5'
        data-qa='technologies-carousel-previous'
      />
      <CarouselNext
        aria-label='Próxima tecnologia'
        className='bg-surface/80 text-on-surface hover:bg-surface -right-4 hidden border-white/10 md:flex lg:-right-5'
        data-qa='technologies-carousel-next'
      />
    </Carousel>
  )
}

export default TechnologiesCarousel
