import {
  Box,
  Cloud,
  Code2,
  Database,
  GitMerge,
  Layers,
  Terminal,
} from 'lucide-react'

const Technologies = () => {
  return (
    <section
      className='relative mx-auto max-w-7xl border-t border-white/5 px-6 py-24 lg:px-20'
      id='technologies'
    >
      <div className='mb-12'>
        <div className='code-badge'>&lt;tech-stack /&gt;</div>
        <h2 className='font-jakarta text-on-surface text-3xl font-bold'>
          Principais Tecnologias
        </h2>
      </div>
      <div className='space-y-12'>
        <div className='space-y-6'>
          <h3 className='font-jakarta text-primary text-xl font-semibold'>
            Linguagens & Frameworks
          </h3>
          <div className='grid grid-cols-2 gap-6 md:grid-cols-4'>
            <div className='glass-panel glass-card-hover flex flex-col items-center justify-center gap-3 p-6'>
              <Code2 size={36} className='text-primary' />
              <span className='font-jetbrains text-on-surface text-sm'>
                JS / TS
              </span>
            </div>
            <div className='glass-panel glass-card-hover flex flex-col items-center justify-center gap-3 p-6'>
              <Layers size={36} className='text-secondary' />
              <span className='font-jetbrains text-on-surface text-sm'>
                React / Next.js
              </span>
            </div>
          </div>
        </div>

        <div className='space-y-6'>
          <h3 className='font-jakarta text-secondary text-xl font-semibold'>
            Backend & Bancos de Dados
          </h3>
          <div className='grid grid-cols-2 gap-6 md:grid-cols-4'>
            <div className='glass-panel glass-card-hover flex flex-col items-center justify-center gap-3 p-6'>
              <Terminal size={36} className='text-tertiary' />
              <span className='font-jetbrains text-on-surface text-sm'>
                Node.js / Express
              </span>
            </div>
            <div className='glass-panel glass-card-hover flex flex-col items-center justify-center gap-3 p-6'>
              <Database size={36} className='text-primary' />
              <span className='font-jetbrains text-on-surface text-sm'>
                PostgreSQL / MongoDB
              </span>
            </div>
          </div>
        </div>

        <div className='space-y-6'>
          <h3 className='font-jakarta text-tertiary text-xl font-semibold'>
            Infraestrutura & Cloud
          </h3>
          <div className='grid grid-cols-2 gap-6 md:grid-cols-4'>
            <div className='glass-panel glass-card-hover flex flex-col items-center justify-center gap-3 p-6'>
              <Cloud size={36} className='text-secondary' />
              <span className='font-jetbrains text-on-surface text-sm'>
                AWS / Azure
              </span>
            </div>
            <div className='glass-panel glass-card-hover flex flex-col items-center justify-center gap-3 p-6'>
              <Box size={36} className='text-tertiary' />
              <span className='font-jetbrains text-on-surface text-sm'>
                Docker / Kubernetes
              </span>
            </div>
          </div>
        </div>

        <div className='space-y-6'>
          <h3 className='font-jakarta text-primary text-xl font-semibold'>
            Ferramentas & Metodologias
          </h3>
          <div className='grid grid-cols-2 gap-6 md:grid-cols-4'>
            <div className='glass-panel glass-card-hover flex flex-col items-center justify-center gap-3 p-6'>
              <GitMerge size={36} className='text-primary' />
              <span className='font-jetbrains text-on-surface text-sm'>
                CI/CD / Git
              </span>
            </div>
            <div className='glass-panel glass-card-hover flex flex-col items-center justify-center gap-3 p-6'>
              <Layers size={36} className='text-secondary' />
              <span className='font-jetbrains text-on-surface text-sm'>
                Microserviços
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies
