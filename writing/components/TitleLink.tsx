'use client';

import { usePathname } from 'next/navigation'

export default function TitleLink() {
  const pathname = usePathname();
  return (
    pathname === '/writing' ? null : <a href='/writing' className='text-base text-zinc-500 dark:text-zinc-500 hover:text-white dark:hover:text-white ease-in-out duration-200 hover:underline decoration-dotted'>Back to Title List</a>
  );
}
