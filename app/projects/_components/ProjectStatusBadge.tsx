import { cn } from '@/app/_lib/utils'

export type ProjectStatusBadgeProps = {
  label?: string
  className?: string
}

const ProjectStatusBadge = ({
  label = 'Live',
  className,
}: ProjectStatusBadgeProps) => {
  return (
    <div
      aria-label={`Status: ${label}`}
      className={cn(
        'bg-surface-container-low/80 border-secondary/30 absolute top-4 right-4',
        'glow-shadow-secondary z-10 flex items-center gap-2 rounded-full',
        'border px-3 py-1 backdrop-blur-md',
        className,
      )}
      data-qa='project-status-badge'
    >
      <span aria-hidden='true' className='relative flex h-2 w-2'>
        <span className='bg-secondary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75' />
        <span className='bg-secondary relative inline-flex h-2 w-2 rounded-full' />
      </span>
      <span className='font-jetbrains text-secondary text-[10px] font-bold uppercase'>
        {label}
      </span>
    </div>
  )
}

export default ProjectStatusBadge
