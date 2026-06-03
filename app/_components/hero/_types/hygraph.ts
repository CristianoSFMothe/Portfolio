export type HygraphMedia = {
  url: string
}

export type HygraphHero = {
  title: string
  highlightedText: string
  titleSuffix: string
  workStatus: string
  description: { html: string }
  image?: HygraphMedia | null
  imageAlt: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText: string
  secondaryButtonLink: string
}
