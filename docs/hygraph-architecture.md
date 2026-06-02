# Arquitetura de conteúdo (Hygraph)

> Status: **planejado** — nenhuma seção consome o Hygraph ainda. Hoje todos os
> dados estão _hardcoded_ dentro dos componentes (ou em mock, no caso de
> `app/projects/`). Este documento define como o projeto **deve** ser
> estruturado para consumir o CMS, de forma consistente em todas as features.

Este projeto é uma refatoração do portfólio antigo
([CristianoSFMothe/Portfolio](https://github.com/CristianoSFMothe/Portfolio)),
que **já usava Hygraph**. O objetivo é migrar o modelo existente corrigindo o
principal problema da versão antiga: os componentes consumiam a forma do Hygraph
diretamente, então qualquer mudança de campo no CMS quebrava a UI.

Docs do Hygraph: <https://hygraph.com/docs>

Features que passarão a consumir o CMS:

- `app/_components/about/`
- `app/_components/academic/`
- `app/_components/blog/`
- `app/_components/experience/`
- `app/_components/projects/` (destaques na home) + `app/projects/` (rota completa)
- `app/_components/technologies/`

---

## 1. Princípios

1. **A UI nunca conhece o Hygraph.** Todo acesso passa por uma fachada
   (`getAbout()`, `getProjects()`, …). Os componentes importam só o **tipo de
   domínio** e a função.
2. **Tipo de domínio ≠ tipo do CMS.** O formato cru do Hygraph vive isolado e é
   convertido por um `mapper`. Se o CMS mudar, só o mapper muda.
3. **Server Components buscam dados; Client Components recebem por props.**
   Seções interativas (carrossel de tecnologias, paginação de projetos) são
   `'use client'` e **não podem** buscar dados — quem busca é um pai Server.
4. **Conteúdo compartilhado mora numa camada compartilhada.** `Technology`,
   `Social`, `Media` e `RichText` aparecem em várias features — definidos uma
   única vez.
5. **Validar a resposta do CMS** (Zod, que o projeto já usa) na borda, dentro do
   mapper — falha cedo e explícita em vez de `undefined` espalhado.

```
Server Component  →  getFeature()  →  mapper (+Zod)  →  client Hygraph (fetch)
   passa props         fachada          traduz/valida      conhece só o CMS
        ↓
Client Component (apresentação / interação)
```

---

## 2. Estrutura-alvo

```
app/
├─ _lib/
│  ├─ hygraph/
│  │  ├─ client.ts          # fetchHygraph<T>(query, vars?, { revalidate, tags })
│  │  └─ index.ts
│  └─ content/
│     ├─ types.ts           # tipos compartilhados: Media, RichText, Technology, Social
│     └─ mappers.ts         # mappers compartilhados: toMedia, toTechnology, toSocial
│
├─ _content/                 # camada de dados, uma pasta por feature
│  ├─ about/        { queries.ts, mapper.ts, index.ts → getAbout() }
│  ├─ academic/     { queries.ts, mapper.ts, index.ts → getEducation() }
│  ├─ blog/         { queries.ts, mapper.ts, index.ts → getPosts() }
│  ├─ experience/   { queries.ts, mapper.ts, index.ts → getExperiences() }
│  ├─ projects/     { queries.ts, mapper.ts, index.ts → getProjects(), getProjectBySlug() }
│  └─ technologies/ { queries.ts, mapper.ts, index.ts → getTechnologies() }
│
├─ _components/              # APRESENTAÇÃO (sem dado hardcoded, sem fetch)
│  ├─ about/  academic/  blog/  experience/  projects/  technologies/
│
└─ projects/                 # rota dedicada (server) — consome _content/projects
   ├─ [slug]/page.tsx
   └─ page.tsx
```

> **Decisão de organização:** centralizei a camada de dados em `app/_content/`
> (em vez de espalhar `_data`/`_types` dentro de cada componente). Motivos:
> as seções de conteúdo são consumidas tanto pela home (`app/page.tsx`) quanto,
> no caso de projetos, por uma rota própria — então o dado não "pertence" à
> pasta de um componente. Isso também unifica o padrão: hoje `app/projects/`
> tem `_data`/`_types` co-localizados, mas as seções da home têm dado
> hardcoded inline. **Ação de migração:** mover `app/projects/_data` e
> `app/projects/_types` para `app/_content/projects/`.

### Responsabilidades

| Camada                   | Papel                                                       |
| ------------------------ | ----------------------------------------------------------- |
| `_lib/hygraph/client.ts` | POST GraphQL (token, revalidate/tags, erro). Genérico.      |
| `_lib/content/types.ts`  | Tipos de domínio compartilhados entre features.             |
| `_content/<feat>/queries`| Strings GraphQL da feature.                                 |
| `_content/<feat>/mapper` | `HygraphX → X` + validação Zod. Única fronteira com o CMS.  |
| `_content/<feat>/index`  | Fachada pública: `getX()`. A UI só conhece isto.            |
| `_components/<feat>`      | Apresentação. Recebe dados por props. Sem fetch.            |

---

## 3. Padrão de componente (Server vs Client)

A maioria das seções vira **Server Component assíncrono** que busca e renderiza:

```tsx
// app/_components/about/About.tsx  (Server Component)
import { getAbout } from '@/app/_content/about'

const About = async () => {
  const about = await getAbout()
  return <AboutView about={about} /> // ou renderiza direto
}
```

Para seções **interativas** (precisam de `'use client'`), separe busca de
apresentação:

| Seção        | Por que é client      | Padrão                                              |
| ------------ | --------------------- | --------------------------------------------------- |
| Technologies | carrossel (Embla)     | `Technologies` (server, busca) → `TechnologiesCarousel` (client, recebe `technologies`) |
| Projects     | paginação por estado  | `page.tsx` (server, busca a fatia) → `ProjectsPagination` (client, navega por URL) |

> A home (`app/page.tsx`) pode manter cada seção como componente assíncrono
> independente (cada uma com seu `getX()`), o que permite revalidação por tag
> separada. Alternativa, se quiser reduzir round-trips: uma query agregada
> `getHomePage()` num único request (o Hygraph aceita vários campos raiz).
> Recomendado começar por seção e agregar só se virar gargalo.

---

## 4. Tipos compartilhados (`_lib/content/types.ts`)

Derivados do schema do projeto antigo:

```ts
export type Media = { url: string; alt?: string }

export type RichText = { raw: unknown; text: string } // raw: RichTextContent

export type Technology = {
  name: string
  iconSvg: string // SVG inline vindo do CMS (KnownTech.iconSvg)
  since?: string // KnownTech.startDate
}

export type Social = { url: string; iconSvg: string }
```

> ⚠️ **Tecnologias hoje usam ícones do `lucide-react`** (`<Code2 />`, etc.). No
> Hygraph, `KnownTech.iconSvg` é uma **string SVG**. Na migração, o
> `TechnologyCard` passa a renderizar o `iconSvg` (via `dangerouslySetInnerHTML`
> sanitizado, ou `<img>`/SVG) em vez do componente lucide.

---

## 5. Mapa por feature

Modelos do CMS confirmados no repo antigo: `Project`, `KnownTech`,
`WorkExperiences`, `HomePageInfo` (about/socials/curriculum/destaques).

| Feature          | Componente atual              | Tipo de domínio (proposto)                                                       | Origem no Hygraph                              |
| ---------------- | ----------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------- |
| **about**        | `about/About.tsx`             | `About { headline?: string; body: RichText; resumeUrl?: string }`                | `HomePageInfo.aboutMe.raw`, `urlCurriculum`    |
| **technologies** | `technologies/Technologies.tsx` | `Technology[]`                                                                 | `HomePageInfo.knownTechs` / `technologies`     |
| **experience**   | `experience/Experience.tsx`   | `Experience { company; role; logo: Media; period; responsibilities: string[]; skills: Technology[] }` | `WorkExperiences`     |
| **projects** (home) | `projects/Projects.tsx`    | `Project[]` (destaques)                                                           | `HomePageInfo.highlightProjects`               |
| **projects** (rota) | `app/projects/`            | `Project[]` + `getProjectBySlug`                                                  | query `projects`                               |
| **academic**     | `academic/Academic.tsx`       | `Education { degree; institution; period; description }`                          | ⚠️ **não existe** no schema antigo             |
| **blog**         | `blog/Blog.tsx`               | `Post { title; description; slug/href; tags: string[]; cover?: Media }`           | ⚠️ **não existe** no schema antigo             |

### Pontos por feature

- **about**: hoje 2 parágrafos fixos → virar `RichText` (renderer do Hygraph).
  Possível reuso na rota `/about` (o repo antigo tinha `AboutPageData`).
- **experience**: o `period` ("Jan 2021 - Presente (3 anos)") deve ser
  **derivado** de `startDate`/`endDate` — portar o util `get-relative-time` do
  repo antigo. `skills` (`string[]` hoje) passa a `Technology[]`.
- **projects**: já tem a costura (`getProjects` como fachada, `Project` como
  domínio). A versão da home usa os **destaques**; a rota usa a lista completa.
  Reaproveitar o mesmo `_content/projects` para os dois.
- **academic** e **blog**: ⚠️ **não existiam no Hygraph antigo.** Decisão
  necessária: (a) criar modelos novos no CMS (`Education`, `Post`), ou
  (b) no caso do blog, integrar uma fonte externa (dev.to / Hashnode / MD local).
  Enquanto não decidir, mantêm o mock atrás de `getEducation()` / `getPosts()`.

---

## 6. Paginação de projetos (decisão: server-side via `searchParams`)

O `ProjectsPagination` atual usa `useState` local (apenas visual). Na migração:

- `app/projects/page.tsx` (Server) lê `?page=` e busca a fatia no servidor
  (`first`/`skip` do Hygraph) → bom para SEO e cacheável por página.
- `getProjects` passa a aceitar paginação: `getProjects({ page, perPage })`
  retornando `{ items: Project[]; total: number }`.
- A página calcula `totalPages = Math.ceil(total / perPage)`.
- O componente troca `onClick + setState` por `<Link href="?page=N">`
  (ou `router.push`). `currentPage` vem de prop, não de estado.

É a única peça de UI que muda de comportamento na migração.

---

## 7. Passo a passo da migração

1. **Deps**: `@graphcms/rich-text-react-renderer` + `@graphcms/rich-text-types`.
2. **Env**: `HYGRAPH_URL`, `HYGRAPH_TOKEN` em `.env.local`; commitar `.env.example`.
3. **`next.config.ts`**: adicionar `media.graphassets.com` (ou host regional) em
   `images.remotePatterns` (hoje só `lh3.googleusercontent.com` e `picsum.photos`).
4. **`_lib/hygraph/client.ts`**: portar `fetchHygraphQuery`, genérico, com
   `variables` e cache por tags (`next: { tags: ['<feat>'], revalidate }`).
5. **`_lib/content/`**: tipos + mappers compartilhados (`Technology`, `Media`,
   `Social`, `RichText`).
6. **Por feature, em `_content/<feat>/`**: `queries.ts` + `mapper.ts` (com Zod) +
   `index.ts` expondo `getX()`.
7. **Mover** `app/projects/_data` e `app/projects/_types` → `app/_content/projects/`.
8. **Refatorar componentes** para receber dados por props / async server, e
   separar as seções interativas (Technologies, Projects) em server+client.
9. **Rota `app/projects/[slug]/page.tsx`**: `generateStaticParams` + rich text.
10. **Revalidação**: webhook de _publish_ do Hygraph → rota `app/api/revalidate`
    chamando `revalidateTag('<feat>')`.

---

## 8. Limpezas de consistência (independente do Hygraph)

- 🔧 **Renomear** `app/_components/technologies/_component` →
  `_components` (plural), alinhando com todas as outras features.
- 🔧 **Tirar dados hardcoded** dos componentes ao introduzir os `getX()`
  (mesmo que `getX()` comece retornando mock).
- 🔧 Padronizar a desestruturação de `id` no `.map` como já feito em
  `app/projects/page.tsx`.
