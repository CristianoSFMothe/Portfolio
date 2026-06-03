const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN

/** `true` quando o endpoint do Hygraph está configurado no ambiente. */
export const isHygraphConfigured = (): boolean => Boolean(HYGRAPH_ENDPOINT)

type FetchHygraphOptions = {
  variables?: Record<string, unknown>
  /** Tempo de revalidação do cache (ISR), em segundos. Padrão: 1h. */
  revalidate?: number
  /** Tags de cache para revalidação sob demanda (revalidateTag). */
  tags?: string[]
}

/**
 * Cliente genérico do Hygraph (Content API via GraphQL).
 *
 * Usa `fetch` nativo — integra com o cache do Next (ISR + tags), conforme a
 * doc oficial (https://hygraph.com/docs/implementations/next/next). As queries
 * usam variáveis (não interpolação) para evitar injeção.
 */
export const fetchHygraph = async <T>(
  query: string,
  { variables, revalidate = 3600, tags }: FetchHygraphOptions = {},
): Promise<T> => {
  if (!HYGRAPH_ENDPOINT) {
    throw new Error(
      'HYGRAPH_ENDPOINT não configurado. Defina-o em .env.local (veja .env.example).',
    )
  }

  const response = await fetch(HYGRAPH_ENDPOINT, {
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
