import CodeBadge from '@/app/_components/CodeBadge'

const About = () => {
  return (
    <section
      aria-labelledby='about-title'
      className='relative mx-auto max-w-368 border-t border-white/5 px-6 py-24 lg:px-10 xl:px-12'
      data-qa='about-section'
      id='about'
    >
      <div className='mb-12' data-qa='about-header'>
        <CodeBadge label='about-me' />
        <h2
          className='font-jakarta text-on-surface text-3xl font-bold'
          data-qa='about-title'
          id='about-title'
        >
          Perfil Profissional
        </h2>
      </div>
      <div className='glass-panel p-8' data-qa='about-content'>
        <p className='font-inter text-on-surface-variant mb-6 text-lg'>
          Como Engenheiro de Software, dedico-me à criação de soluções robustas,
          escaláveis e eficientes. Acredito firmemente nos princípios do Clean
          Code e em arquiteturas bem estruturadas como base para qualquer
          projeto de sucesso.
        </p>
        <p className='font-inter text-on-surface-variant text-lg'>
          Meu foco está em desenvolver software que não apenas atenda aos
          requisitos de negócios, mas que também seja sustentável a longo prazo,
          otimizado para performance e fácil de manter. Trabalho constantemente
          para aprimorar minhas habilidades e adotar as melhores práticas da
          engenharia de software moderna.
        </p>
      </div>
    </section>
  )
}

export default About
