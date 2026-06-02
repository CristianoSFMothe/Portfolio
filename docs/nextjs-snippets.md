# Next.js snippets (App Router)

Trechos de referência para o **App Router** (Next 16 + React 19, TypeScript),
que é o modelo usado neste projeto. Os snippets antigos de Pages Router
(`getServerSideProps`, `getStaticProps`, `_app`, `_document`, `pages/api`) foram
removidos por não se aplicarem ao App Router.

| Atalho   | Equivalente App Router                          |
| -------- | ----------------------------------------------- |
| `page`   | Página (Server Component)                        |
| `cpage`  | Página Client (`'use client'`)                   |
| `dpage`  | Página dinâmica (`[slug]`) com `params`/`searchParams` |
| `gsp`    | `generateStaticParams` (substitui `getStaticPaths`) |
| `gmeta`  | `generateMetadata`                               |
| `meta`   | `metadata` estático                              |
| `layout` | Layout                                           |
| `route`  | Route Handler (`route.ts`, substitui `pages/api`) |
| `mid`    | Middleware                                        |
| `img`    | `next/image`                                     |
| `link`   | `next/link`                                      |
| `loading`| `loading.tsx` (Suspense)                          |
| `error`  | `error.tsx` (Client)                             |
| `nfound` | `not-found.tsx`                                  |

---

## `page` — Página (Server Component)

```tsx
const Page = async () => {
  return <div></div>
}

export default Page
```

## `cpage` — Página Client

```tsx
'use client'

const Page = () => {
  return <div></div>
}

export default Page
```

## `dpage` — Página dinâmica com params / searchParams

> No Next 15+, `params` e `searchParams` são **Promises** — precisam de `await`.

```tsx
type PageProps = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const Page = async ({ params, searchParams }: PageProps) => {
  const { slug } = await params
  const { page } = await searchParams

  return <div>{slug}</div>
}

export default Page
```

## `gsp` — generateStaticParams (substitui getStaticPaths)

```tsx
export const generateStaticParams = async () => {
  return [{ slug: 'exemplo' }]
}
```

## `gmeta` — generateMetadata (dinâmico)

```tsx
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params

  return {
    title: slug,
  }
}
```

## `meta` — metadata estático

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '',
  description: '',
}
```

## `layout` — Layout

```tsx
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default Layout
```

## `route` — Route Handler (substitui pages/api)

```tsx
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const GET = async (request: NextRequest) => {
  return NextResponse.json({})
}

export const POST = async (request: NextRequest) => {
  const body = await request.json()
  return NextResponse.json({})
}
```

## `mid` — Middleware

```tsx
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const middleware = (request: NextRequest) => {
  return NextResponse.next()
}

export const config = {
  matcher: '/about/:path*',
}
```

## `img` — next/image

```tsx
import Image from 'next/image'

;<Image src="" alt="" width={0} height={0} />
```

## `link` — next/link

```tsx
import Link from 'next/link'

;<Link href=""></Link>
```

## `loading` — loading.tsx (Suspense boundary)

```tsx
const Loading = () => {
  return <div>Carregando...</div>
}

export default Loading
```

## `error` — error.tsx (sempre Client)

```tsx
'use client'

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={reset}>Tentar novamente</button>
    </div>
  )
}

export default Error
```

## `nfound` — not-found.tsx

```tsx
const NotFound = () => {
  return <div>Página não encontrada</div>
}

export default NotFound
```
