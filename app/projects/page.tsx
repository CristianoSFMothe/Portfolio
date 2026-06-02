import HeroSection from './_components/HeroSection'
import ProjectCard from './_components/ProjectCard'
import { getProjects } from './_data/projects'

const ProjectPage = async () => {
  const projects = await getProjects()

  return (
    <main className='mx-auto w-full max-w-7xl grow space-y-30 px-6 py-12 md:px-20 md:py-24'>
      <HeroSection />

      <section className='mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {projects.map(({ id, ...project }) => (
          <ProjectCard key={id} {...project} />
        ))}
      </section>
    </main>
  )
}

export default ProjectPage
