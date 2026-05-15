import { CloudCog, FileText, Layers } from 'lucide-react'

import CodeBadge from '@/app/_components/CodeBadge'

import BlogPostCard from './_components/BlogPostCard'

const Blog = () => {
  return (
    <section
      className='relative mx-auto max-w-368 border-t border-white/5 px-6 py-24 lg:px-10 xl:px-12'
      id='blog'
    >
      <div className='mb-12'>
        <CodeBadge label='blog-posts' />

        <h2 className='font-jakarta text-on-surface text-3xl font-bold'>
          Blog / Artigos Técnicos
        </h2>
      </div>

      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        <BlogPostCard
          title='Minha transição para QA Dev: Desafios e Aprendizados'
          description='Como a mentalidade de testes mudou minha forma de escrever código e gerenciar projetos complexos.'
          href='#'
          tags='#carreira #desenvolvimento'
          icon={FileText}
          iconClassName='text-primary/30'
        />

        <BlogPostCard
          title='Clean Code na prática: Além da teoria'
          description='Dicas práticas de como implementar código limpo no dia a dia sem comprometer os prazos de entrega.'
          href='#'
          tags='#clean-code #arquitetura'
          icon={Layers}
          iconClassName='text-secondary/30'
        />

        <BlogPostCard
          title='Escalando Aplicações com Microsserviços e AWS'
          description='Uma análise técnica sobre como estruturamos sistemas globais para suportar picos massivos de tráfego.'
          href='#'
          tags='#devops #cloud'
          icon={CloudCog}
          iconClassName='text-tertiary/30'
        />
      </div>
    </section>
  )
}

export default Blog
