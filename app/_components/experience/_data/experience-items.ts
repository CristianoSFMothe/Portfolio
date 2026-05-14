import type { ExperienceItem } from '../_types/experience-item'

export const experienceItems = [
  {
    company: 'TechCorp Global',
    role: 'Engenheiro de Software Sênior',
    period: 'Jan 2021 - Presente (3 anos)',
    responsibilities: [
      'Liderança técnica no desenvolvimento de microsserviços centrais da plataforma.',
      'Refatoração de sistemas legados, melhorando a performance em 40%.',
      'Implementação de pipelines de CI/CD automatizados para entregas contínuas.',
    ],
    skills: ['Node.js', 'Arquitetura de Software', 'AWS'],
  },
  {
    company: 'InovaSystems LTDA',
    role: 'Engenheiro de Software Pleno',
    period: 'Mar 2018 - Dez 2020 (2 anos e 9 meses)',
    responsibilities: [
      'Desenvolvimento de novas features para o produto principal utilizando React e TypeScript.',
      'Integração com APIs de terceiros (pagamentos, logística).',
      'Otimização de consultas em banco de dados relacional.',
    ],
    skills: ['React', 'TypeScript', 'PostgreSQL'],
  },
  {
    company: 'StartUp Web',
    role: 'Desenvolvedor Júnior',
    period: 'Jan 2016 - Fev 2018 (2 anos e 1 mês)',
    responsibilities: [
      'Manutenção de aplicações web e correção de bugs reportados por usuários.',
      'Criação de componentes UI reutilizáveis seguindo design system da empresa.',
      'Participação em code reviews e ritos ágeis (Scrum).',
    ],
    skills: ['JavaScript', 'HTML/CSS', 'Git'],
  },
] satisfies ExperienceItem[]
