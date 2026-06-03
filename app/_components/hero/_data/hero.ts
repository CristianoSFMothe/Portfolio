import { fetchHygraph, isHygraphConfigured } from '@/app/_lib/hygraph'

import type { Hero } from '../_types/hero'
import type { HygraphHero } from '../_types/hygraph'
import { toHero } from './mappers'
import { HERO_QUERY } from './queries'

export const getHero = async (): Promise<Hero | null> => {
  if (!isHygraphConfigured()) {
    return null
  }

  const { heroes } = await fetchHygraph<{ heroes: HygraphHero[] }>(HERO_QUERY, {
    tags: ['hero'],
  })

  const hero = heroes.at(0)

  return hero ? toHero(hero) : null
}
