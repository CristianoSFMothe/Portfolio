import CodeBadge from '@/app/_components/CodeBadge'

import ProjectCard from './_components/ProjectCard'
import ProjectsButton from './_components/ProjectsButton'
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
        <ProjectsButton href='#' label='Ver todos os projetos' />
      </div>
    </section>
  )
}

export default Projects
