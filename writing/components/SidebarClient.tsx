'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeatherPointed, faCircleHalfStroke, faHome } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'next-themes';
import ActionButton from './sidebar/actionButton';
import LinkElement from './sidebar/linkElement';
import { usePathname } from 'next/navigation';
import { Tables } from '@/app/api/models/database.types';

function BackNavigation() {
  if (usePathname() === '/writing') {
    return null;
  }
  else {
    return (
      <LinkElement path='/writing' text='Titles' />
    )
  }
}

export default function SidebarClient({ titles }: { titles: Tables<'titles'>[] }) {
  const { theme, setTheme } = useTheme();

  if (usePathname() === '/writing') {
    titles = [];
  }

  return (
    <div className="flex basis-1/6 flex-col items-start mx-5 sticky top-0 h-screen">
      <FontAwesomeIcon icon={faFeatherPointed} className='self-center fill-neutral-500 text-2xl text-neutral-500 text-9xl my-10' />
      <div className='pl-10'>
        <div id='title' className='mb-8'>
          <h1 className='text-3xl'>The Writing Desk</h1>
          <h2 className='text-lg text-zinc-500'>
            <a className='text-base hover:underline decoration-dotted' href='/' target='_blank'>Ben Schwabe</a>
          </h2>
        </div>
        <ul id='nav'>
          <li className='text-base mb-2 text-lg'>
            <strong>
            <BackNavigation />
            </strong>
          </li>
          {titles.map((t) => (
            <li key={t.id} className='text-base ml-2'>
              <LinkElement text={t.title_name} path={t.title_url} />
            </li>
          ))}
        </ul>
      </div> 
      <div id='links' className="flex flex-row mt-10 gap-x-2 self-center items-center">
        <a href='/' title="Back to home portfolio">
          <ActionButton icon={faHome} />
        </a>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className='ease-in-out duration-300 text-2xl text-neutral-500 hover:text-cyan-500 cursor-pointer'
          aria-label='Toggle dark mode'
          title='Toggle dark mode'
        >
          <ActionButton icon={faCircleHalfStroke} />
        </button>
      </div>
      <div id='footer' className='my-20 dark:text-slate-700 text-slate-400'>
        <a href='https://github.com/scytail/nextjs-site' className='hover:text-slate-600 hover:underline decoration-dotted' target='_blank'>&copy;Ben Schwabe 2026</a>
      </div>
    </div>
  )
}
