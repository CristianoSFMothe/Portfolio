import { Code2, LinkIcon, MessageCircle } from 'lucide-react'

import CodeBadge from '../CodeBadge'
import ContactLinkCard from './_components/ContactLinkCard'
import ContactForm from './_form/ContactForm'

const Contact = () => {
  return (
    <section
      aria-labelledby='contact-title'
      className='relative mx-auto max-w-368 border-t border-white/5 px-6 py-24 lg:px-10 xl:px-12'
      data-qa='contact-section'
      id='contact'
    >
      <div className='mb-12' data-qa='contact-header'>
        <CodeBadge label='contact-me' />

        <h2
          className='font-jakarta text-on-surface text-3xl font-bold'
          data-qa='contact-title'
          id='contact-title'
        >
          Vamos conversar?
        </h2>
      </div>

      <div
        className='flex flex-col gap-12 lg:flex-row'
        data-qa='contact-content'
      >
        <div className='glass-panel flex-1 p-8' data-qa='contact-form-panel'>
          <ContactForm />
        </div>

        <div
          className='flex flex-col gap-6 lg:w-1/3'
          data-qa='contact-links-panel'
        >
          <ContactLinkCard
            href='#'
            title='LinkedIn'
            description='Conecte-se comigo'
            icon={LinkIcon}
            iconClassName='bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
          />

          <ContactLinkCard
            href='#'
            title='GitHub'
            description='Veja meus códigos'
            icon={Code2}
            iconClassName='bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-surface-dim'
          />

          <ContactLinkCard
            href='#'
            title='WhatsApp'
            description='Fale diretamente'
            icon={MessageCircle}
            iconClassName='bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-surface-dim'
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
