import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ScrollButton from '../../components/scrollButton'
import TitleLink from '../../components/TitleLink'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className + ' min-h-screen bg-slate-300'}>
        <nav className='sticky top-0 bg-slate-200 shadow-md'>
          <div className='flex items-center justify-between px-6 py-2 max-w-6xl mx-auto'>
            <div className='flex items-center gap-8'>
              <a href='/' title='Home' className='p-2 rounded-full hover:fill-white hover:bg-blue-500 hover:shadow-md fill-neutral-500 transition duration-200'>
                <svg id='logo' className="w-12 h-12" strokeLinecap="round" strokeLinejoin="round" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600.000000 600.000000" preserveAspectRatio="xMidYMid meet" role="img">
                  <title>Back to Home</title>
                  <g transform="translate(0.000000,600.000000) scale(0.200000,-0.200000)"> 
                    <path strokeWidth='30' d="M950 2588 c0 -2 -51 -223 -114 -493 -78 -337 -110 -492 -102 -497 6 -3 234 -65 506 -138 272 -72 514 -138 537 -146 84 -30 131 -119 119 -222 -15 -129 -101 -210 -272 -258 -82 -23 -527 -34 -520 -13 12 36 108 470 105 473 -9 6 -520 138 -524 135 -3 -4 -235 -1001 -235 -1014 0 -3 271 -5 603 -2 518 3 614 6 690 21 265 52 446 140 571 278 112 123 162 271 154 454 -4 91 -8 111 -37 169 -38 77 -98 130 -207 182 -73 35 -117 45 -691 164 -173 35 -213 47 -213 60 0 13 34 165 95 427 5 22 8 22 148 22 305 0 397 -44 397 -189 0 -94 -38 -164 -113 -211 l-27 -17 172 -46 c95 -26 203 -54 240 -64 l67 -17 55 38 c108 75 177 191 196 333 42 316 -174 515 -608 562 -85 9 -992 17 -992 9z"/> 
                  </g>
                </svg>
              </a>
              <h1 className='text-2xl font-semibold'>The Writing Desk</h1>
            </div>
            <TitleLink />
          </div>
        </nav>
        {children}
        <ScrollButton />
      </body>
    </html>
  )
}
