'use client'

import { ReactLenis } from 'lenis/react'
import { useSyncExternalStore } from 'react'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

const subscribeReducedMotion = (callback: () => void) => {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY)
  mediaQuery.addEventListener('change', callback)

  return () => {
    mediaQuery.removeEventListener('change', callback)
  }
}

const getReducedMotionSnapshot = () =>
  window.matchMedia(REDUCED_MOTION_QUERY).matches

const getReducedMotionServerSnapshot = () => false

const LenisProvider = () => {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  )

  if (prefersReducedMotion) {
    return null
  }

  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        anchors: true,
        allowNestedScroll: true,
        // Modo duration + easing (recomendado pela doc do Lenis) no lugar de
        // `lerp`: dá uma curva de scroll suave e controlada. Easing oficial.
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        stopInertiaOnNavigate: true,
      }}
    />
  )
}

export default LenisProvider
