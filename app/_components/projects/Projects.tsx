import { ArrowRight } from 'lucide-react'

import CodeBadge from '@/app/_components/CodeBadge'
import { Button } from '@/app/_components/ui/button'
import { cn } from '@/app/_lib/utils'

import ProjectCard from './_components/ProjectCard'
import { featuredProjects } from './_data/featured-projects'

const Projects = () => {
  return (
    <section
      className='relative mx-auto max-w-368 border-t border-white/5 px-6 py-24 lg:px-10 xl:px-12'
      id='projects'
    >
      <div className='mb-12' data-reveal='up'>
        <CodeBadge label='featured-work' />
        <h2 className='font-jakarta text-on-surface text-3xl font-bold'>
          Projetos em Destaque
        </h2>
      </div>

      <div className='mb-12 space-y-12'>
        {featuredProjects.map((project, index) => (
          <div
            key={project.title}
            data-reveal='up'
            data-reveal-delay={String(index * 90)}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      <div
        className='glass-panel p-8 text-center'
        data-reveal='up'
        data-reveal-delay='120'
      >
        <p className='font-inter text-on-surface mb-6 text-lg'>
          Interessado em ver mais soluções que construí?
        </p>
        <Button
          aria-label='Ver todos os projetos'
          className={cn(
            'from-primary-container to-inverse-primary font-jetbrains group relative h-auto min-w-64 overflow-hidden rounded-full border border-white/20 bg-linear-to-r px-6 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(var(--shadow-primary-rgb),0.18)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--shadow-primary-rgb),0.4)]',
          )}
          type='button'
        >
          <span
            aria-hidden='true'
            className='flex items-center gap-2 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0'
          >
            <span className='bg-secondary size-2 rounded-lg transition-all duration-300 group-hover:scale-[100.8]' />
            <span className='whitespace-nowrap'>Ver todos os projetos</span>
          </span>
          <span
            aria-hidden='true'
            className='absolute inset-0 flex translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100'
          >
            <span className='whitespace-nowrap'>Ver todos os projetos</span>
            <ArrowRight size={20} />
          </span>
        </Button>
      </div>
    </section>
  )
}

export default Projects
