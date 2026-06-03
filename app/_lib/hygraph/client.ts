const HYGRAPH_URL = process.env.HYGRAPH_URL
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN

export const isHygraphConfigured = (): boolean => Boolean(HYGRAPH_URL)

type FetchHygraphOptions = {
  variables?: Record<string, unknown>
  revalidate?: number
  tags?: string[]
}

export const fetchHygraph = async <T>(
  query: string,
  { variables, revalidate = 3600, tags }: FetchHygraphOptions = {},
): Promise<T> => {
  if (!HYGRAPH_URL) {
    throw new Error(
      'HYGRAPH_URL não configurado. Defina-o em .env (veja .env.example).',
    )
  }

  const response = await fetch(HYGRAPH_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(HYGRAPH_TOKEN ? { Authorization: `Bearer ${HYGRAPH_TOKEN}` } : {}),
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate, tags },
  })

  if (!response.ok) {
    throw new Error(`Hygraph respondeu com status ${response.status}.`)
  }

  const { data, errors } = (await response.json()) as {
    data: T
    errors?: { message: string }[]
  }

  if (errors?.length) {
    throw new Error(
      `Erro GraphQL do Hygraph: ${errors.map((error) => error.message).join('; ')}`,
    )
  }

  return data
}
