import { ArrowRight, Code2 } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import CodeBadge from '@/app/_components/CodeBadge'
import { Button } from '@/app/_components/ui/button'
import { cn } from '@/app/_lib/utils'

import { getProjectBySlug, getProjectSlugs } from '../_data/projects'

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = async () => {
  const slugs = await getProjectSlugs()

  return slugs.map((slug) => ({ slug }))
}

export const generateMetadata = async ({
  params,
}: ProjectDetailPageProps): Promise<Metadata> => {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return { title: 'Projeto não encontrado' }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className='mx-auto w-full max-w-7xl grow px-6 py-12 md:px-20 md:py-24'>
      <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16'>
        <div className='space-y-6'>
          <CodeBadge label='project-overview' />

          <h1 className='font-jakarta text-4xl leading-tight font-extrabold tracking-tight md:text-5xl'>
            <span className='text-on-surface-variant/50'>&lt;h3&gt;</span>
            <span className='text-on-surface'>{project.title}</span>
            <span className='text-on-surface-variant/50'>&lt;/h3&gt;</span>
          </h1>

          <p className='font-inter text-on-surface-variant max-w-xl text-lg'>
            {project.description}
          </p>

          <div className='flex flex-wrap gap-4 pt-2'>
            {project.liveUrl ? (
              <Button
                asChild
                className={cn(
                  'btn-gradient to-inverse-primary h-auto rounded-lg border border-white/20',
                  'shadow-glow-primary hover:shadow-glow-primary-strong px-8 py-3 text-sm',
                )}
                data-qa='project-live-link'
              >
                <Link
                  href={project.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Ver Demo Live
                  <ArrowRight aria-hidden='true' />
                </Link>
              </Button>
            ) : null}

            {project.repoUrl ? (
              <Button
                asChild
                variant='outline'
                className={cn(
                  'border-outline-variant text-on-surface-variant hover:border-primary',
                  'hover:text-primary hover:bg-primary/10 font-jetbrains h-auto rounded-lg',
                  'bg-transparent px-8 py-3 text-sm transition-colors duration-300',
                )}
                data-qa='project-repo-link'
              >
                <Link
                  href={project.repoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Code2 aria-hidden='true' />
                  Repositório GitHub
                </Link>
              </Button>
            ) : null}
          </div>
        </div>

        <div className='glass-card relative aspect-4/3 w-full overflow-hidden rounded-xl border border-white/10'>
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            className='object-cover'
            priority
            referrerPolicy='no-referrer'
            sizes='(max-width: 1024px) 100vw, 50vw'
          />
        </div>
      </div>
    </main>
  )
}

export default ProjectDetailPage
