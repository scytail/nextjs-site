'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function ScrollButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className='fixed bottom-6 right-6 bg-slate-100 dark:bg-slate-800 hover:bg-cyan-500 hover:text-white text-slate-600 dark:text-slate-400 rounded-full w-12 h-12 flex items-center justify-center shadow-md transition-colors duration-200 cursor-pointer'
      aria-label='Scroll to top'
    >
      <FontAwesomeIcon icon={faChevronUp} className='text-xl' />
    </button>
  );
}
