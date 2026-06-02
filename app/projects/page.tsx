import HeroSection from './_components/HeroSection'
import ProjectCard, { type ProjectCardProps } from './_components/ProjectCard'

const PROJECT_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD6KE_ifmdEuEfYj4jvCY-72IneI2w_R8PN20FkJER729bsrQS9wMSDMvKuO5HuRcFvf52Kd4yekJmGLvnYXbjgJYbWBGFZE-nOd5PKa2fBelTVy4VQg9gICkCol9qGGEbdeBAMbETXW3x31FoSj_NZJ_6vBSXXlEDAkZx1PFGdfj6S8Aq7h1iaOA1VIkyqi1CIzuGyk7KShI2ETfA0gn8nM7mDUbr5Qhle5AU0x4aaOQI1nEfdcdsoWhngHnvyXKn1G_wmOS2RNLY'

const projects: ProjectCardProps[] = Array.from({ length: 6 }, () => ({
  title: 'Cypress E2E Framework',
  description:
    'Framework completo para testes ponta a ponta com Cypress, integrando relatórios avançados em Allure e execução paralela em CI/CD.',
  imageSrc: PROJECT_IMAGE,
  imageAlt: 'Cypress E2E Framework',
  status: 'Live',
  technologies: [
    { label: 'Cypress', tone: 'primary' },
    { label: 'JavaScript', tone: 'tertiary' },
    { label: 'GitHub Actions', tone: 'neutral' },
  ],
}))

const ProjectPage = () => {
  return (
    <main className='mx-auto w-full max-w-7xl grow space-y-30 px-6 py-12 md:px-20 md:py-24'>
      <HeroSection />

      <section className='mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {projects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} {...project} />
        ))}
      </section>
    </main>
  )
}

export default ProjectPage
