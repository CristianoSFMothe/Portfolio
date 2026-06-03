/** Queries GraphQL da feature de projetos (Hygraph Content API). */

/** Lista usada na página /projects (cards). */
export const PROJECTS_QUERY = /* GraphQL */ `
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

/** Detalhe de um projeto pela rota /projects/[slug]. */
export const PROJECT_BY_SLUG_QUERY = /* GraphQL */ `
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

/** Apenas os slugs, para o generateStaticParams. */
export const PROJECT_SLUGS_QUERY = /* GraphQL */ `
  query ProjectSlugs {
    projects(first: 100) {
      slug
    }
  }
`
