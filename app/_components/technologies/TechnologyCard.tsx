import type { ReactNode } from 'react'

import { Card, CardContent } from '@/app/_components/ui/card'

type TechnologyCardProps = {
  icon: ReactNode
  label: string
}

const TechnologyCard = ({ icon, label }: TechnologyCardProps) => {
  return (
    <Card className='glass-panel glass-card-hover h-full border-white/10 bg-transparent py-0 shadow-none'>
      <CardContent className='flex min-h-36 flex-col items-center justify-center gap-3 p-6 text-center'>
        <div aria-hidden='true'>{icon}</div>
        <span className='font-jetbrains text-on-surface text-sm'>{label}</span>
      </CardContent>
    </Card>
  )
}

export default TechnologyCard
