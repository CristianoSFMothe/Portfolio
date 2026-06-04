export const TECHNOLOGIES_QUERY = `
  query Technologies {
    technologies(orderBy: order_ASC, first: 100) {
      name
      test {
        url
      }
    }
  }
`
