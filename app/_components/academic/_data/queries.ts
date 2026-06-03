export const ACADEMICS_QUERY = `
  query Academics {
    academics(orderBy: createdAt_DESC) {
      degree
      institution
      period
      description {
        html
      }
    }
  }
`
