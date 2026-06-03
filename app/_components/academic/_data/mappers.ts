import type { Academic } from '../_types/academic'
import type { HygraphAcademic } from '../_types/hygraph'

export const toAcademic = (raw: HygraphAcademic): Academic => ({
  degree: raw.degree,
  institution: raw.institution,
  period: raw.period,
  descriptionHtml: raw.description.html,
})
