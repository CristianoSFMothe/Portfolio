import { ExternalLink, type LucideIcon } from 'lucide-react'
import Link from 'next/link'

export type BlogPostCardProps = {
  title: string
  description: string
  href: string
  tags: string
  icon: LucideIcon
  iconClassName: string
}

const BlogPostCard = ({
  title,
  description,
  href,
  tags,
  icon: Icon,
  iconClassName,
}: BlogPostCardProps) => {
  const qaSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-')

  return (
    <article
      aria-labelledby={`blog-post-title-${qaSlug}`}
      className='glass-panel glass-card-hover flex flex-col p-6'
      data-qa={`blog-post-card-${qaSlug}`}
    >
      <div
        aria-hidden='true'
        className='bg-surface-container-highest mb-4 flex h-48 w-full items-center justify-center rounded-lg'
      >
        <Icon size={64} className={iconClassName} />
      </div>

      <span className='font-jetbrains text-secondary mb-2 text-xs'>{tags}</span>

      <h3
        className='font-jakarta text-on-surface mb-3 text-xl font-bold'
        id={`blog-post-title-${qaSlug}`}
      >
        {title}
      </h3>

      <p className='font-inter text-on-surface-variant mb-4 grow text-sm'>
        {description}
      </p>

      <Link
        aria-label={`Ler artigo: ${title}`}
        className='text-primary hover:text-secondary font-jetbrains inline-flex items-center gap-2 text-sm transition-colors'
        data-qa={`blog-post-link-${qaSlug}`}
        href={href}
      >
        <span>Ler artigo</span>
        <ExternalLink aria-hidden='true' size={16} />
      </Link>
    </article>
  )
}

export default BlogPostCard
