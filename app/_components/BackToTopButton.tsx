'use client'

import { useLenis } from 'lenis/react'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

import { cn } from '@/app/_lib/utils'

import { Button } from './ui/button'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleBackToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Button
      type='button'
      size='icon-lg'
      aria-label='Voltar ao topo'
      title='Voltar ao topo'
      onClick={handleBackToTop}
      className={cn(
        'from-primary-container to-secondary-container via-[#0d5fd1]',
        'fixed right-6 bottom-6 z-50 rounded-full border border-white/15',
        'bg-linear-to-br text-white shadow-[0_10px_30px_rgba(var(--shadow-primary-rgb),0.28)]',
        'backdrop-blur-xl transition-all duration-300 hover:-translate-y-1',
        'hover:shadow-[0_0_24px_rgba(var(--shadow-primary-rgb),0.45)] sm:right-8 sm:bottom-8',
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <ArrowUp size={18} />
    </Button>
  )
}

export default BackToTopButton
