export type ProjectTechTone = 'primary' | 'tertiary' | 'neutral'

export type ProjectTechnology = {
  label: string
  tone?: ProjectTechTone
}

export type Project = {
  id: string
  slug: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  status?: string
  technologies: ProjectTechnology[]
  detailHref?: string
  detailLabel?: string
  /** Link do deploy/demo (Hygraph: liveProjectUrl). */
  liveUrl?: string
  /** Link do repositório (Hygraph: githubUrl). */
  repoUrl?: string
}
