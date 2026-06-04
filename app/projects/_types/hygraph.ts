export type HygraphMedia = {
  url: string
}

export type HygraphTechnology = {
  name: string
}

export type HygraphProject = {
  id: string
  slug: string
  title: string
  shortDescription: string
  thumbnail?: HygraphMedia | null
  technologies?: HygraphTechnology[] | null
  liveProjectUrl?: string | null
  githubUrl?: string | null
}
