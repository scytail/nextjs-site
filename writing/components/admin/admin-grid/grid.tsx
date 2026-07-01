import type { Tables } from '@/app/api/models/database.types';
import { AdminGridRow } from './row';

type AdminGridProps = {
  titles: Tables<'titles'>[];
};

export function AdminGrid({ titles }: AdminGridProps) {
  return (
    <section className='overflow-hidden rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-gray-800 dark:border-slate-600 shadow-sm'>
      <div className='hidden border-b border-slate-200 dark:bg-gray-700 bg-white px-4 py-3 md:grid md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.8fr)_110px_120px] md:gap-4'>
        <div className='text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400'>Title</div>
        <div className='text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400'>Url</div>
        <div className='text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400'>Visibility</div>
        <div className='text-right text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400'>Actions</div>
      </div>

      <ul className='flex flex-col gap-2 p-2'>
        {titles.map((title) => (
          <AdminGridRow key={title.id} title={title} />
        ))}
      </ul>
    </section>
  );
}
