import type { ReactNode } from 'react'

import { cn } from '@/app/_lib/utils'

type FloatingBadgeProps = {
  text: string
  icon: ReactNode
  className?: string
  dataQa?: string
  ariaHidden?: boolean
}

const FloatingBadge = ({
  text,
  icon,
  className,
  dataQa,
  ariaHidden,
}: FloatingBadgeProps) => {
  return (
    <div
      aria-hidden={ariaHidden}
      className={cn(
        'glass-panel glass-card-hover absolute z-20 flex items-center gap-2 px-4 py-2',
        className,
      )}
      data-qa={dataQa}
    >
      {icon}
      <span className='font-jetbrains text-on-surface text-sm'>{text}</span>
    </div>
  )
}

export default FloatingBadge
