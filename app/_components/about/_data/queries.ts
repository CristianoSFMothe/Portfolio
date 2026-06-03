export const ABOUT_QUERY = `
  query About {
    abouts(first: 1) {
      title
      content {
        html
      }
    }
  }
`
