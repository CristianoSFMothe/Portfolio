import './globals.css'

import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google'

import BackToTopButton from './_components/BackToTopButton'
import Navbar from './_components/Navbar'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Cristiano Mothe | Portfolio',
    template: '%s | Cristiano Mothe',
  },
  description:
    'Portfólio pessoal de Cristiano Mothe, reunindo informações profissionais, conhecimentos técnicos, experiências, projetos e formas de contato.',
  applicationName: 'Cristiano Mothe Portfolio',
  authors: [
    {
      name: 'Cristiano S. F. Mothe',
      url: 'https://github.com/CristianoSFMothe',
    },
  ],
  creator: 'Cristiano S. F. Mothe',
  publisher: 'Cristiano S. F. Mothe',
  keywords: [
    'Cristiano Mothe',
    'portfolio',
    'personal portfolio',
    'professional portfolio',
    'technology',
    'software development',
    'software engineering',
    'frontend',
    'web development',
    'QA',
    'quality assurance',
    'software testing',
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Cristiano Mothe | Portfolio',
    description:
      'Portfólio pessoal reunindo informações profissionais, conhecimentos técnicos, experiências, projetos e formas de contato.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Cristiano Mothe Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cristiano Mothe | Portfolio',
    description:
      'Portfólio pessoal reunindo informações profissionais, conhecimentos técnicos, experiências, projetos e formas de contato.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d141d',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR' className='dark' suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jakarta.variable} ${jetbrains.variable} bg-background font-inter text-foreground min-h-screen antialiased`}
      >
        <Navbar />
        {children}
        <BackToTopButton />
      </body>
    </html>
  )
}
