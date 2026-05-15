import CodeBadge from '@/app/_components/CodeBadge'
import Tetris from '@/app/_components/ui/tetris'

const About = () => {
  return (
    <section
      className='relative mx-auto max-w-368 overflow-hidden border-t border-white/5 px-6 py-24 lg:px-10 xl:px-12'
      id='about'
    >
      <div className='pointer-events-none absolute inset-0'>
        <Tetris
          className='h-full mask-[radial-gradient(circle_at_center,white,transparent_75%)] opacity-70'
          base={80}
          borderColor='rgba(174, 198, 255, 0.06)'
          fillColor='rgba(174, 198, 255, 0.45)'
          hoverColor='rgba(174, 198, 255, 0.85)'
        />
        <div className='via-background/10 to-background/80 absolute inset-0 bg-linear-to-b from-transparent' />
      </div>

      <div className='relative z-10 mb-12' data-reveal='up'>
        <CodeBadge label='about-me' />
        <h2 className='font-jakarta text-on-surface text-3xl font-bold'>
          Perfil Profissional
        </h2>
      </div>
      <div
        className='glass-panel relative z-10 p-8'
        data-reveal='up'
        data-reveal-delay='100'
      >
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
