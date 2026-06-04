import { fetchHygraph, isHygraphConfigured } from '@/app/_lib/hygraph'

import type { HygraphTechnology } from '../_types/hygraph'
import type { Technology } from '../_types/technology'
import { toTechnology } from './mappers'
import { TECHNOLOGIES_QUERY } from './queries'

export const getTechnologies = async (): Promise<Technology[]> => {
  if (!isHygraphConfigured()) {
    return []
  }

  const { technologies } = await fetchHygraph<{
    technologies: HygraphTechnology[]
  }>(TECHNOLOGIES_QUERY, { tags: ['technologies'] })

  return technologies
    .map(toTechnology)
    .filter((technology) => technology.iconUrl)
}
