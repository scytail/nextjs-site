'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
 import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className='fixed top-6 right-8 dark:bg-zinc-700 bg-white hover:bg-blue-500 hover:text-white text-gray-500 dark:text-gray-400 rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-colors duration-200 cursor-pointer'
          aria-label='Scroll to top'
        >
          <FontAwesomeIcon icon={faCircleHalfStroke} className='text-xl' />
        </button>
  );
}
