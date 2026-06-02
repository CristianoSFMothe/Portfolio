import type { Project } from '../_types/project'

const PROJECT_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD6KE_ifmdEuEfYj4jvCY-72IneI2w_R8PN20FkJER729bsrQS9wMSDMvKuO5HuRcFvf52Kd4yekJmGLvnYXbjgJYbWBGFZE-nOd5PKa2fBelTVy4VQg9gICkCol9qGGEbdeBAMbETXW3x31FoSj_NZJ_6vBSXXlEDAkZx1PFGdfj6S8Aq7h1iaOA1VIkyqi1CIzuGyk7KShI2ETfA0gn8nM7mDUbr5Qhle5AU0x4aaOQI1nEfdcdsoWhngHnvyXKn1G_wmOS2RNLY'

const projects: Project[] = [
  {
    id: 'cypress-e2e-framework',
    slug: 'cypress-e2e-framework',
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
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/CristianoSFMothe',
  },
  {
    id: 'playwright-test-suite',
    slug: 'playwright-test-suite',
    title: 'Playwright Test Suite',
    description:
      'Suíte de testes end-to-end com Playwright, cobrindo múltiplos navegadores e cenários de regressão visual.',
    imageSrc: PROJECT_IMAGE,
    imageAlt: 'Playwright Test Suite',
    status: 'Live',
    technologies: [
      { label: 'Playwright', tone: 'primary' },
      { label: 'TypeScript', tone: 'tertiary' },
      { label: 'Docker', tone: 'neutral' },
    ],
    repoUrl: 'https://github.com/CristianoSFMothe',
  },
  {
    id: 'api-testing-rest-assured',
    slug: 'api-testing-rest-assured',
    title: 'API Testing com Rest Assured',
    description:
      'Automação de testes de API REST com Rest Assured e JUnit, validando contratos, status codes e payloads.',
    imageSrc: PROJECT_IMAGE,
    imageAlt: 'API Testing com Rest Assured',
    technologies: [
      { label: 'Rest Assured', tone: 'primary' },
      { label: 'Java', tone: 'tertiary' },
      { label: 'JUnit', tone: 'neutral' },
    ],
    repoUrl: 'https://github.com/CristianoSFMothe',
  },
]

export const getProjects = async (): Promise<Project[]> => {
  return projects
}

export const getProjectBySlug = async (
  slug: string,
): Promise<Project | null> => {
  return projects.find((project) => project.slug === slug) ?? null
}
