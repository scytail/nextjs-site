'use client';

import { usePathname } from 'next/navigation'

export default function TitleLink() {
  const pathname = usePathname();
  return (
    pathname === '/writing' ? null : <a href='/writing' className='text-base text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 ease-in-out duration-200'>Back to Title List</a>
  );
}
