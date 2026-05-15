'use client'

import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
} from 'react'
import { useEffect, useRef, useState } from 'react'

import { cn } from '@/app/_lib/utils'

type BlurRevealOwnProps<T extends ElementType = 'div'> = {
  as?: T
  children: ReactNode
  className?: string
  duration?: number
  delay?: number
  blur?: string
  yOffset?: number
  once?: boolean
}

export type BlurRevealProps<T extends ElementType = 'div'> =
  BlurRevealOwnProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof BlurRevealOwnProps<T>>

const BlurReveal = <T extends ElementType = 'div'>({
  as,
  children,
  className,
  duration = 1,
  delay = 0,
  blur = '20px',
  yOffset = 20,
  once = false,
  style,
  ...props
}: BlurRevealProps<T>) => {
  const Component = (as ?? 'div') as ElementType
  const elementRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      const frameId = window.requestAnimationFrame(() => {
        setIsVisible(true)
      })

      return () => {
        window.cancelAnimationFrame(frameId)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          if (once) {
            observer.disconnect()
          }

          return
        }

        if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [once])

  return (
    <Component
      ref={elementRef}
      className={cn(
        'transition-none will-change-[filter,opacity,transform]',
        className,
      )}
      style={{
        ...(style as CSSProperties | undefined),
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : `blur(${blur})`,
        transform: isVisible
          ? 'translate3d(0, 0, 0)'
          : `translate3d(0, ${yOffset}px, 0)`,
        transition: [
          `opacity ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
          `filter ${duration}s ease ${delay}s`,
          `transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
        ].join(', '),
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

export default BlurReveal
