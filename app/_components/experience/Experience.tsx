import CodeBadge from '@/app/_components/CodeBadge'
import { cn } from '@/app/_lib/utils'

import ExperienceTimelineItem from './_components/ExperienceTimelineItem'

const Experience = () => {
  return (
    <section
      className='relative mx-auto max-w-368 border-t border-white/5 px-6 py-24 lg:px-10 xl:px-12'
      id='experience'
    >
      <div className='mb-12'>
        <CodeBadge label='career-path' />
        <h2 className='font-jakarta text-on-surface text-3xl font-bold'>
          Experiência Profissional
        </h2>
      </div>

      <div
        className={cn(
          'relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full',
          'before:w-0.5 before:-translate-x-px before:bg-linear-to-b before:from-transparent',
          'before:via-white/20 before:to-transparent md:before:mx-auto md:before:translate-x-0',
        )}
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
        />
      </div>
    </section>
  )
}

export default Experience
