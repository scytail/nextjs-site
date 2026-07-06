'use client';

type AdminGridRowProps = {
  columnElements: React.ReactNode[];
};

export function AdminGridRow({ columnElements }: AdminGridRowProps) {
  
  return (
    <li className='relative overflow-hidden rounded-lg border border-slate-200 dark:border-slate-600 dark:bg-gray-700 bg-white px-4 py-4 shadow-sm transition hover:border-cyan-400 hover:shadow-md'>
      <div className='relative z-10 grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.8fr)_110px_120px] md:items-center'>
        {columnElements.map((element, index) => (
          <div key={index}>{element}</div>
        ))}
      </div>
    </li>
  );
}
