import { type LucideIcon } from 'lucide-react'
import Link from 'next/link'

export type ContactLinkCardProps = {
  href: string
  title: string
  description: string
  icon: LucideIcon
  iconClassName: string
}

const ContactLinkCard = ({
  href,
  title,
  description,
  icon: Icon,
  iconClassName,
}: ContactLinkCardProps) => {
  return (
    <Link
      className='glass-panel glass-card-hover group flex items-center gap-4 p-6'
      href={href}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors ${iconClassName}`}
      >
        <Icon size={24} />
      </div>

      <div>
        <div className='font-jetbrains text-on-surface-variant text-sm'>
          {description}
        </div>
        <div className='font-jakarta text-on-surface text-xl font-bold'>
          {title}
        </div>
      </div>
    </Link>
  )
}

export default ContactLinkCard
