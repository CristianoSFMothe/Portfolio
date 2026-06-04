import Image from 'next/image'

import { Card, CardContent } from '@/app/_components/ui/card'

type TechnologyCardProps = {
  iconUrl: string
  label: string
}

const TechnologyCard = ({ iconUrl, label }: TechnologyCardProps) => {
  return (
    <Card
      aria-label={label}
      className='glass-panel glass-card-hover h-full border-white/10 bg-transparent py-0 shadow-none'
      data-qa={`technology-card-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
    >
      <CardContent className='flex min-h-36 flex-col items-center justify-center gap-3 p-6 text-center'>
        <div className='flex h-16 w-16 items-center justify-center rounded-xl bg-white/95 p-2.5'>
          <Image
            src={iconUrl}
            alt={label}
            width={48}
            height={48}
            className='h-12 w-12 object-contain'
            unoptimized
          />
        </div>
        <span className='font-jetbrains text-on-surface text-sm'>{label}</span>
      </CardContent>
    </Card>
  )
}

export default TechnologyCard
