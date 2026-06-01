import CodeBadge from '@/app/_components/CodeBadge'

import ProjectCard from './_components/ProjectCard'
import ProjectsButton from './_components/ProjectsButton'

const Projects = () => {
  return (
    <section
      aria-labelledby='projects-title'
      className='relative mx-auto max-w-368 border-t border-white/5 px-6 py-24 lg:px-10 xl:px-12'
      data-qa='projects-section'
      id='projects'
    >
      <div className='mb-12' data-qa='projects-header'>
        <CodeBadge label='featured-work' />
        <h2
          className='font-jakarta text-on-surface text-3xl font-bold'
          data-qa='projects-title'
          id='projects-title'
        >
          Projetos em Destaque
        </h2>
      </div>

      <div className='mb-12 space-y-12' data-qa='projects-list'>
        <ProjectCard
          title='Plataforma de E-Commerce Global'
          description='Arquitetura e desenvolvimento de uma plataforma de e-commerce altamente escalável, capaz de processar milhares de transações simultâneas com latência mínima.'
          imageSrc='https://lh3.googleusercontent.com/aida-public/AB6AXuCyzHLDpkOW0XnaqUckShYYGZgnef_RdxnFkiVPg7URJJHv_MrTRhtKrDmmXOWUhlE2WozHYDPfkAvRvczMXH4NxDbN0ZMU4WMnuE_4j6iIThB7pK07RLbzsoWyYTU4zlzviYmarrs_T7I10opHJWVEY5h8woBSSNwLeXrYyxUIqk4hnTAS5I9l20vXhcLBHOJtJiAIv62yZPKrwDnHXBN5kxutMRVEXkc-s-OS3gJA6fX3BhV2MOOZiluyVciykL6akUhKIXmAyvg'
          imageAlt='Project 1'
          technologies={['Node.js', 'React', 'AWS']}
          href='#'
        />

        <ProjectCard
          title='Dashboard Analytics Financeiro'
          description='Painel de controle em tempo real para análise de dados financeiros, utilizando WebSockets para atualizações instântaneas e visualização complexa de dados.'
          imageSrc='https://lh3.googleusercontent.com/aida-public/AB6AXuAnsHY5BCHZ_5DIYtWbjmjQ7M7tDJ-r7GWHXzBF3Z0j3uMe3_K5T_Zc5W_ol4IXf3pgAqtvYmvD7voxOxGLH382FkBgLRZI8nmuQFWA0ClYkiPHBlkFb-oLf05kDoEQOuTZrenm9imkRhQ4VV7cAczZReqD7A8vjJRHFu_h-dJd89ZUkAzmejuAIOMrXnZqZPcxiwRjB3FToiHSKLHshrwm9V1OMSWiaGUAY9Hj4hirZyOpNxMLvIJM_NqqNpzQQ7tkZ3OB1NitIp8'
          imageAlt='Project 2'
          technologies={['TypeScript', 'Next.js', 'PostgreSQL']}
          href='#'
        />

        <ProjectCard
          title='API de Sistema de Saúde'
          description='Construção de uma API RESTful segura para integração de sistemas de saúde, garantindo conformidade com padrões rigorosos de proteção de dados.'
          imageSrc='https://lh3.googleusercontent.com/aida-public/AB6AXuDZEwAj9rWsddF5FxN2TsNTM8TQ-2cN05gBLo-EoP2AUWHs0ozbaTYtb4qQnNfoo7PuaPARtuRquKMxVIUxPOWmAsCeCSzudCAb8kvXXJjOGdqyx1PlN8eIifly3lJfjgFCaM0FD0tl7UpdjuT1DtLdwQFA6rbL25VsFJJiNa5ZSY9dyRbYS1k8VvfP_d4BR0j7bhD5eliRiS38ypPZh4xsqx-hqBdM_c6wiMMS6RQQPaMH5YGWzCFVBsWALcB7q6gSxm0h8qaYCHc'
          imageAlt='Project 3'
          technologies={['Java', 'Spring Boot', 'Docker']}
          href='#'
        />

        <ProjectCard
          title='Gerenciador de Dispositivos IoT'
          description='Sistema distribuído para monitoramento e controle de milhares de dispositivos IoT em campo, com arquitetura orientada a eventos.'
          imageSrc='https://lh3.googleusercontent.com/aida-public/AB6AXuCQcYywVcOdRcEIL713E4oXDq2RlufQq96c9h0FW3eOJc6iiSxa4GYETiAWANQq_yaUL7MLy2vBeCHVjWQPIqvVYVu6HWSaHAqfTig-q9qyyvwphjoTcqtoxUDiCS5nTzZNjqVoTG7a7LZOi60vWxkdY4ArBaRWQ9gv6Ppi1xSMAyYY4cA_Yre1hqVSTqCVWVoSVP9yhMqjsvahCWBVgOHNFyh7NYz_b2QoHLusKwc_wWrHzaguhC2SkdSXDCPViI3FvNDx8iH0iho'
          imageAlt='Project 4'
          technologies={['Python', 'Kafka', 'Kubernetes']}
          href='#'
        />

        <ProjectCard
          title='Plataforma de Conteúdo com IA'
          description='Integração de modelos de linguagem (LLMs) em uma plataforma de geração de conteúdo, otimizando fluxos de trabalho editoriais automatizados.'
          imageSrc='https://lh3.googleusercontent.com/aida-public/AB6AXuBkXnue-YUWdOlIvP6a8b0JZsV8hNtbNBrWkyXn_j48LAYKGEWkjVcDyYGfQ0TdHochIUPFuQXJTN-Of2sN3AAheg0bq-lC0xeSIIsK0Ly-R5P6NkRcXSfBZOuzc-chueSc1WnTCy_GDevcjkaKADtpiI0b-49Hefmv6BX-94zNSmgNVc6odEjyXfZIGEvOD330lwhG4EldXWw7zq9cyuM4FPQAJlfUtfjn7mf1LF-ug-PvWMqPm-4u--2t0foopV7c1O6xlKGjkAw'
          imageAlt='Project 5'
          technologies={['Go', 'Vue.js', 'OpenAI API']}
          href='#'
        />
      </div>

      <div className='glass-panel p-8 text-center' data-qa='projects-cta'>
        <p className='font-inter text-on-surface mb-6 text-lg'>
          Interessado em ver mais soluções que construí?
        </p>
        <ProjectsButton href='/projects' label='Ver todos os projetos' />
      </div>
    </section>
  )
}

export default Projects
