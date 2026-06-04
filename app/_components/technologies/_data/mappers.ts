import type { HygraphTechnology } from '../_types/hygraph'
import type { Technology } from '../_types/technology'

export const toTechnology = (raw: HygraphTechnology): Technology => ({
  name: raw.name,
  iconUrl: raw.test?.url ?? '',
})
