import type { About } from '../_types/about'
import type { HygraphAbout } from '../_types/hygraph'

export const toAbout = (raw: HygraphAbout): About => ({
  title: raw.title,
  contentHtml: raw.content.html,
})
