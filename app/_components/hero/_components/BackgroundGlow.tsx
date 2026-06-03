import { cn } from '@/app/_lib/utils'

type BackgroundGlowProps = {
  className?: string
  dataQa?: string
}

const BackgroundGlow = ({ className, dataQa }: BackgroundGlowProps) => {
  return (
    <div
      aria-hidden='true'
      className={cn(
        'pointer-events-none absolute -z-10 rounded-full',
        className,
      )}
      data-qa={dataQa}
    />
  )
}

export default BackgroundGlow
