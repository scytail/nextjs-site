'use client';

export default function ScrollButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className='fixed bottom-6 right-6 bg-slate-200 hover:bg-slate-300 text-gray-700 rounded-full w-12 h-12 flex items-center justify-center shadow-md transition-colors duration-200 cursor-pointer'
      aria-label='Scroll to top'
    >
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 15l7-7 7 7' />
      </svg>
    </button>
  );
}
