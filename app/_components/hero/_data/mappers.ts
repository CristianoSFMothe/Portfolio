import type { Hero } from '../_types/hero'
import type { HygraphHero } from '../_types/hygraph'

export const toHero = (raw: HygraphHero): Hero => ({
  title: raw.title,
  highlightedText: raw.highlightedText,
  titleSuffix: raw.titleSuffix,
  workStatus: raw.workStatus,
  descriptionHtml: raw.description.html,
  imageUrl: raw.image?.url ?? '',
  imageAlt: raw.imageAlt,
  primaryButtonText: raw.primaryButtonText,
  primaryButtonLink: raw.primaryButtonLink,
  secondaryButtonText: raw.secondaryButtonText,
  secondaryButtonLink: raw.secondaryButtonLink,
})
