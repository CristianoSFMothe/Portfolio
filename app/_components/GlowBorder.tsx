'use client'

import type { CSSProperties } from 'react'

import { cn } from '@/app/_lib/utils'

export type GlowBorderProps = {
  borderRadius?: number | string
  color?: string | string[]
  borderWidth?: number
  duration?: number
  className?: string
}

const GlowBorder = ({
  borderRadius = 'inherit',
  color = '#ffffff',
  borderWidth = 2,
  duration = 10,
  className,
}: GlowBorderProps) => {
  const glowColors = Array.isArray(color) ? color.join(',') : color
  const styles: CSSProperties = {
    backgroundImage: `radial-gradient(transparent, transparent, ${glowColors}, transparent, transparent)`,
    backgroundSize: '300% 300%',
    padding: `${borderWidth}px`,
    borderRadius:
      typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMask:
      'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    animationDuration: `${duration}s`,
  }

  return (
    <div
      aria-hidden='true'
      className={cn(
        'animate-glow-border pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position]',
        className,
      )}
      style={styles}
    />
  )
}

export default GlowBorder
