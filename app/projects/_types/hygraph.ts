/**
 * Formato CRU retornado pelo Hygraph para o modelo `Project`.
 * Espelha o schema do CMS — fica isolado aqui para que só o mapper
 * (`_data/mappers.ts`) dependa dele. A UI usa o tipo de domínio `Project`.
 */

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
