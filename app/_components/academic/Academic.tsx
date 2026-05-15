import CodeBadge from '@/app/_components/CodeBadge'
import Tetris from '@/app/_components/ui/tetris'

const Academic = () => {
  return (
    <section
      className='relative mx-auto max-w-368 overflow-hidden border-t border-white/5 px-6 py-24 lg:px-10 xl:px-12'
      id='academic'
    >
      <div className='pointer-events-none absolute inset-0'>
        <Tetris
          className='h-full mask-[radial-gradient(circle_at_center,white,transparent_80%)] opacity-70'
          base={80}
          borderColor='rgba(71, 250, 243, 0.05)'
          fillColor='rgba(71, 250, 243, 0.4)'
          hoverColor='rgba(71, 250, 243, 0.75)'
        />
        <div className='via-background/10 to-background/80 absolute inset-0 bg-linear-to-b from-transparent' />
      </div>

      <div className='relative z-10 mb-12' data-reveal='up'>
        <CodeBadge label='education' />
        <h2 className='font-jakarta text-on-surface text-3xl font-bold'>
          Formação Acadêmica
        </h2>
      </div>
      <div className='relative z-10 space-y-6'>
        <div
          className='glass-panel glass-card-hover p-8'
          data-reveal='up'
          data-reveal-delay='80'
        >
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
        <div
          className='glass-panel glass-card-hover p-8'
          data-reveal='up'
          data-reveal-delay='160'
        >
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
