import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import ScrollButton from '../../components/scrollButton'
import NavBar from '@/components/navBar'

const inter = Inter({ subsets: ['latin'] })
config.autoAddCss = false

export const metadata: Metadata = {
  title: 'Ben - Coding-Cat.net',
  description: 'Software Engineer and Wordsmith',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="data-theme">
          <div className='min-h-screen bg-slate-300 dark:bg-zinc-700'>
            <NavBar />
            {children}
            <ScrollButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
