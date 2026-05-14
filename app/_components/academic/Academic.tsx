import CodeBadge from '@/app/_components/CodeBadge'

const Academic = () => {
  return (
    <section
      className='relative mx-auto max-w-368 border-t border-white/5 px-6 py-24 lg:px-10 xl:px-12'
      id='academic'
    >
      <div className='mb-12'>
        <CodeBadge label='education' />
        <h2 className='font-jakarta text-on-surface text-3xl font-bold'>
          Formação Acadêmica
        </h2>
      </div>
      <div className='space-y-6'>
        <div className='glass-panel glass-card-hover p-8'>
          <h3 className='font-jakarta text-on-surface mb-2 text-2xl font-semibold'>
            Bacharelado em Ciência da Computação
          </h3>
          <p className='font-jetbrains text-primary mb-4 text-sm'>
            Universidade Federal - 2015 a 2019
          </p>
          <p className='font-inter text-on-surface-variant'>
            Foco em algoritmos, estruturas de dados, e engenharia de software
            fundamental. Desenvolvimento de projetos acadêmicos com ênfase em
            sistemas distribuídos.
          </p>
        </div>
        <div className='glass-panel glass-card-hover p-8'>
          <h3 className='font-jakarta text-on-surface mb-2 text-2xl font-semibold'>
            Pós-Graduação em Arquitetura de Software
          </h3>
          <p className='font-jetbrains text-primary mb-4 text-sm'>
            Instituto de Tecnologia - 2020 a 2021
          </p>
          <p className='font-inter text-on-surface-variant'>
            Especialização em padrões de projeto, arquiteturas escaláveis, cloud
            computing e práticas avançadas de desenvolvimento de software.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Academic
