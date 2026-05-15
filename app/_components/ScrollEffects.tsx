'use client'

import { usePathname } from 'next/navigation'
import { useLayoutEffect } from 'react'

const REVEAL_SELECTOR = '[data-reveal]'

const ScrollEffects = () => {
  const pathname = usePathname()

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
