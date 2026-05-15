'use client'

import Lenis from 'lenis'
import { usePathname } from 'next/navigation'
import { useEffect, useLayoutEffect, useRef } from 'react'

const REVEAL_SELECTOR = '[data-reveal]'

const ScrollEffects = () => {
  const pathname = usePathname()
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      return
    }

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      allowNestedScroll: true,
      lerp: 0.08,
      smoothWheel: true,
      stopInertiaOnNavigate: true,
    })

    const handleScrollToTop = () => {
      lenis.scrollTo(0, {
        duration: 1.1,
      })
    }

    lenisRef.current = lenis
    window.addEventListener('app:scroll-to-top', handleScrollToTop)

    return () => {
      window.removeEventListener('app:scroll-to-top', handleScrollToTop)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    lenisRef.current?.resize()
  }, [pathname])

  useLayoutEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    )

    if (nodes.length === 0) {
      return
    }

    for (const node of nodes) {
      node.classList.add('scroll-reveal')

      if (node.dataset.revealDelay) {
        node.style.setProperty(
          '--reveal-delay',
          `${node.dataset.revealDelay}ms`,
        )
      }
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      for (const node of nodes) {
        node.classList.add('is-visible')
      }

      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle('is-visible', entry.isIntersecting)
        }
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    for (const node of nodes) {
      observer.observe(node)
    }

    return () => {
      observer.disconnect()
    }
  }, [pathname])

  return null
}

export default ScrollEffects
