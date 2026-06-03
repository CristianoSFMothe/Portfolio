import { fetchHygraph, isHygraphConfigured } from '@/app/_lib/hygraph'

import type { Academic } from '../_types/academic'
import type { HygraphAcademic } from '../_types/hygraph'
import { toAcademic } from './mappers'
import { ACADEMICS_QUERY } from './queries'

export const getAcademics = async (): Promise<Academic[]> => {
  if (!isHygraphConfigured()) {
    return []
  }

  const { academics } = await fetchHygraph<{ academics: HygraphAcademic[] }>(
    ACADEMICS_QUERY,
    { tags: ['academic'] },
  )

  return academics.map(toAcademic)
}
