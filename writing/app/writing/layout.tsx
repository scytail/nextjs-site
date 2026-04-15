import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import ScrollButton from '../../components/scrollButton'
import Sidebar from '@/components/SidebarServer'

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
          <div className='flex min-h-screen bg-slate-200 dark:bg-slate-900'>
            <Sidebar />
            <main className='flex-1 flex flex-col'>
              {children}
              <ScrollButton />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
