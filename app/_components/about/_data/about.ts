import { fetchHygraph, isHygraphConfigured } from '@/app/_lib/hygraph'

import type { About } from '../_types/about'
import type { HygraphAbout } from '../_types/hygraph'
import { toAbout } from './mappers'
import { ABOUT_QUERY } from './queries'

export const getAbout = async (): Promise<About | null> => {
  if (!isHygraphConfigured()) {
    return null
  }

  const { abouts } = await fetchHygraph<{ abouts: HygraphAbout[] }>(
    ABOUT_QUERY,
    { tags: ['about'] },
  )

  const about = abouts.at(0)

  return about ? toAbout(about) : null
}
