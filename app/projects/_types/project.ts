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
  liveUrl?: string
  repoUrl?: string
}
