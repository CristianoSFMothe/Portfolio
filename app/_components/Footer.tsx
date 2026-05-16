import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-surface-container-low border-outline-variant/20 bottom-0 mt-24 w-full border-t'>
      <div className='mx-auto max-w-368 px-6 lg:px-10 xl:px-12'>
        <div className='flex flex-col items-center justify-between gap-6 py-12 md:flex-row md:gap-8'>
          <div className='font-jakarta text-on-surface text-center text-lg font-bold md:text-left'>
            © 2024 Cristiano Ferreira. Software Engineering.
          </div>

          <div className='flex flex-wrap items-center justify-center gap-6 md:justify-end'>
            <Link
              className='text-on-surface-variant font-inter hover:text-secondary text-sm transition-colors duration-200'
              href='#'
            >
              LinkedIn
            </Link>
            <Link
              className='text-on-surface-variant font-inter hover:text-secondary text-sm transition-colors duration-200'
              href='#'
            >
              GitHub
            </Link>
            <Link
              className='text-on-surface-variant font-inter hover:text-secondary text-sm transition-colors duration-200'
              href='#'
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
