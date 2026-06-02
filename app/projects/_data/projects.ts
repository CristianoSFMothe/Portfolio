import type { Project } from '../_types/project'

const PROJECT_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD6KE_ifmdEuEfYj4jvCY-72IneI2w_R8PN20FkJER729bsrQS9wMSDMvKuO5HuRcFvf52Kd4yekJmGLvnYXbjgJYbWBGFZE-nOd5PKa2fBelTVy4VQg9gICkCol9qGGEbdeBAMbETXW3x31FoSj_NZJ_6vBSXXlEDAkZx1PFGdfj6S8Aq7h1iaOA1VIkyqi1CIzuGyk7KShI2ETfA0gn8nM7mDUbr5Qhle5AU0x4aaOQI1nEfdcdsoWhngHnvyXKn1G_wmOS2RNLY'

const projects: Project[] = Array.from({ length: 6 }, (_, index) => ({
  id: `cypress-e2e-framework-${index + 1}`,
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

export const getProjects = async (): Promise<Project[]> => {
  return projects
}
