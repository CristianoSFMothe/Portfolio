import type { HygraphProject } from '../_types/hygraph'
import type { Project, ProjectTechTone } from '../_types/project'

const TONES: ProjectTechTone[] = ['primary', 'tertiary', 'neutral']

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
