'use client'

import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { cn } from '../_lib/utils'
import { Button } from './ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

const navItems = [
  { href: '/', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#academic', label: 'Formação Acadêmica' },
  { href: '#technologies', label: 'Tecnologias' },
  { href: '#projects', label: 'Projetos' },
  { href: '#experience', label: 'Experiência' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contato' },
]

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1120px)')
    const handleMediaChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        handleCloseMenu()
      }
    }

    mediaQuery.addEventListener('change', handleMediaChange)

    return () => mediaQuery.removeEventListener('change', handleMediaChange)
  }, [])

  return (
    <nav
      className={cn(
        'bg-surface/40 sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-xl',
        'relative shadow-[0_0_15px_rgba(var(--shadow-primary-rgb),0.1)]',
      )}
    >
      <div
        className={cn(
          'relative mx-auto flex h-14 w-full',
          'max-w-368 items-center justify-end gap-3 px-4 sm:px-6',
          'min-[1120px]:justify-between min-[1120px]:px-6 sm:h-16 lg:px-10 xl:px-12',
        )}
      >
        <Link
          href='/'
          className='absolute left-1/2 flex shrink-0 -translate-x-1/2 items-center min-[1120px]:static min-[1120px]:translate-x-0'
          onClick={handleCloseMenu}
        >
          <Image
            src='/logo.svg'
            alt='Cristiano Mothe'
            width={180}
            height={30}
            priority
            className='h-auto w-24 object-contain min-[1120px]:w-32 sm:w-28 xl:w-36'
          />
        </Link>

        <div className='ml-auto flex items-center gap-2 sm:gap-3'>
          <div className='hidden items-center gap-1 min-[1120px]:flex xl:gap-2'>
            {navItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'font-jetbrains rounded-lg px-2 py-2 text-[13px] leading-none transition-all duration-300 xl:px-3',
                    isActive
                      ? 'border-secondary text-secondary border-b-2 font-bold'
                      : 'text-on-surface-variant hover:bg-primary/10 hover:text-primary font-medium',
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <Button
            className={cn(
              'from-primary-container to-secondary-container rounded-lg',
              'font-jetbrains hidden border border-white/20 bg-linear-to-r px-4',
              'text-[11px] font-bold text-white shadow-[0_8px_20px_rgba(var(--shadow-primary-rgb),0.18)] sm:inline-flex',
              'transition-all duration-300 hover:shadow-[0_0_15px_rgba(var(--shadow-primary-rgb),0.4)]',
              'min-[1120px]:h-9 min-[1120px]:px-5 min-[1120px]:text-xs',
            )}
          >
            Baixar CV
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant='ghost'
                size='icon'
                className='text-on-surface border border-white/10 bg-transparent hover:bg-white/5 min-[1120px]:hidden'
                aria-label='Abrir menu'
              >
                <Menu size={24} />
              </Button>
            </SheetTrigger>

            <SheetContent
              id='mobile-navigation'
              side='right'
              className={cn(
                'bg-surface/95 w-[min(88vw,24rem)] border-l border-white/10 p-0 backdrop-blur-xl min-[1120px]:hidden',
                'shadow-[0_18px_40px_rgba(0,0,0,0.38)]',
              )}
            >
              <SheetHeader className='border-b border-white/10 p-5 text-left'>
                <SheetTitle className='font-jakarta text-primary-fixed text-base'>
                  Cristiano Mothe
                </SheetTitle>
                <SheetDescription className='font-jetbrains text-on-surface-variant text-xs'>
                  Navegação principal
                </SheetDescription>
              </SheetHeader>

              <div className='flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-4'>
                <div className='grid gap-2'>
                  {navItems.map((item) => {
                    const isActive = pathname === item.href

                    return (
                      <SheetClose key={item.href} asChild>
                        <Link
                          href={item.href}
                          aria-current={isActive ? 'page' : undefined}
                          className={cn(
                            'font-jetbrains rounded-xl border px-4 py-3 text-sm transition-all duration-300',
                            isActive
                              ? 'bg-primary/10 text-secondary border-[#47faf3]/18 font-bold'
                              : 'text-on-surface-variant hover:bg-primary/10 hover:text-primary border-transparent font-medium',
                          )}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    )
                  })}
                </div>

                <SheetClose asChild>
                  <Button
                    className={cn(
                      'from-primary-container to-secondary-container mt-auto',
                      'w-full rounded-xl border border-white/20 bg-linear-to-r',
                      'font-jetbrains px-6 py-3 text-sm font-bold text-white',
                      'transition-all duration-300 hover:shadow-[0_0_15px_rgba(var(--shadow-primary-rgb),0.4)]',
                    )}
                  >
                    Baixar CV
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
