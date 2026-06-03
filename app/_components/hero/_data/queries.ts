export const HERO_QUERY = `
  query Hero {
    heroes(first: 1) {
      title
      highlightedText
      titleSuffix
      workStatus
      description {
        html
      }
      image {
        url
      }
      imageAlt
      primaryButtonText
      primaryButtonLink
      secondaryButtonText
      secondaryButtonLink
    }
  }
`
