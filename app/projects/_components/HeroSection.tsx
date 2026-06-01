import { SquareTerminal } from 'lucide-react'

import CodeBadge from '@/app/_components/CodeBadge'

const HeroSection = () => {
  return (
    <section className='mb-16 md:mb-24'>
      <div className='text-secondary mb-4 flex items-center gap-2 text-sm [&_.code-badge]:mb-0'>
        <SquareTerminal />
        <CodeBadge label='all-projects' />
      </div>

      <h1 className='font-jakarta text-on-surface mb-6 text-4xl font-extrabold tracking-tight md:text-5xl'>
        Todos os Projetos
      </h1>

      <p className='font-inter text-on-surface-variant max-w-3xl text-lg'>
        Uma coleção abrangente de soluções de automação de testes, frameworks
        personalizados e ferramentas de garantia de qualidade focadas em
        escalabilidade e precisão.
      </p>
    </section>
  )
}

export default HeroSection
