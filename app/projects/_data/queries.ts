export const PROJECTS_QUERY = `
  query Projects {
    projects(orderBy: createdAt_DESC) {
      id
      slug
      title
      shortDescription
      thumbnail {
        url
      }
      technologies {
        name
      }
    }
  }
`

export const PROJECT_BY_SLUG_QUERY = `
  query ProjectBySlug($slug: String!) {
    project(where: { slug: $slug }) {
      id
      slug
      title
      shortDescription
      thumbnail {
        url
      }
      technologies {
        name
      }
      liveProjectUrl
      githubUrl
    }
  }
`

export const PROJECT_SLUGS_QUERY = `
  query ProjectSlugs {
    projects(first: 100) {
      slug
    }
  }
`
