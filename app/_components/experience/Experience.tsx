import CodeBadge from '@/app/_components/CodeBadge'
import FlickeringGrid from '@/app/_components/FlickeringGrid'
import { cn } from '@/app/_lib/utils'

import ExperienceTimelineItem from './_components/ExperienceTimelineItem'

const Experience = () => {
  return (
    <section
      aria-labelledby='experience-title'
      className='relative mx-auto max-w-368 overflow-hidden border-t border-white/5 px-6 py-24 lg:px-10 xl:px-12'
      data-qa='experience-section'
      id='experience'
    >
      <div aria-hidden='true' className='pointer-events-none absolute inset-0'>
        <FlickeringGrid
          className='mask-[radial-gradient(circle_at_center,white,transparent_80%)] opacity-50'
          squareSize={4}
          gridGap={8}
          flickerChance={0.12}
          color='#47faf3'
          maxOpacity={0.12}
        />
        <div className='via-background/10 to-background/75 absolute inset-0 bg-linear-to-b from-transparent' />
      </div>

      <div
        className='relative z-10 mb-12'
        data-qa='experience-header'
        data-reveal='up'
      >
        <CodeBadge label='career-path' />
        <h2
          className='font-jakarta text-on-surface text-3xl font-bold'
          data-qa='experience-title'
          id='experience-title'
        >
          Experiência Profissional
        </h2>
      </div>

      <div
        className={cn(
          'relative z-10 space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full',
          'before:w-0.5 before:-translate-x-px before:bg-linear-to-b before:from-transparent',
          'before:via-white/20 before:to-transparent md:before:mx-auto md:before:translate-x-0',
        )}
        data-qa='experience-timeline'
      >
        <ExperienceTimelineItem
          company='TechCorp Global'
          role='Engenheiro de Software Sênior'
          period='Jan 2021 - Presente (3 anos)'
          responsibilities={[
            'Liderança técnica no desenvolvimento de microsserviços centrais da plataforma.',
            'Refatoração de sistemas legados, melhorando a performance em 40%.',
            'Implementação de pipelines de CI/CD automatizados para entregas contínuas.',
          ]}
          skills={['Node.js', 'Arquitetura de Software', 'AWS']}
          revealDelay={0}
        />

        <ExperienceTimelineItem
          company='InovaSystems LTDA'
          role='Engenheiro de Software Pleno'
          period='Mar 2018 - Dez 2020 (2 anos e 9 meses)'
          responsibilities={[
            'Desenvolvimento de novas features para o produto principal utilizando React e TypeScript.',
            'Integração com APIs de terceiros (pagamentos, logística).',
            'Otimização de consultas em banco de dados relacional.',
          ]}
          skills={['React', 'TypeScript', 'PostgreSQL']}
          revealDelay={90}
        />

        <ExperienceTimelineItem
          company='StartUp Web'
          role='Desenvolvedor Júnior'
          period='Jan 2016 - Fev 2018 (2 anos e 1 mês)'
          responsibilities={[
            'Manutenção de aplicações web e correção de bugs reportados por usuários.',
            'Criação de componentes UI reutilizáveis seguindo design system da empresa.',
            'Participação em code reviews e ritos ágeis (Scrum).',
          ]}
          skills={['JavaScript', 'HTML/CSS', 'Git']}
          revealDelay={180}
        />
      </div>
    </section>
  )
}

export default Experience
