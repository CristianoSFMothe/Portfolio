import type { HygraphProject } from '../_types/hygraph'
import type { Project, ProjectTechTone } from '../_types/project'

/**
 * Tons aplicados às tags de tecnologia. O Hygraph não tem esse conceito
 * (é puramente visual), então ciclamos de forma determinística pelo índice
 * para preservar a variação de cores do design.
 */
const TONES: ProjectTechTone[] = ['primary', 'tertiary', 'neutral']

/** Converte o projeto cru do Hygraph para o tipo de domínio usado pela UI. */
export const toProject = (raw: HygraphProject): Project => ({
  id: raw.id,
  slug: raw.slug,
  title: raw.title,
  description: raw.shortDescription,
  imageSrc: raw.thumbnail?.url ?? '',
  imageAlt: raw.title,
  technologies: (raw.technologies ?? []).map((technology, index) => ({
    label: technology.name,
    tone: TONES[index % TONES.length],
  })),
  liveUrl: raw.liveProjectUrl ?? undefined,
  repoUrl: raw.githubUrl ?? undefined,
})
