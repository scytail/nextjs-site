'use client';

import type { Tables } from '@/app/api/models/database.types';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { UrlCopyButton } from '../urlCopyButton';
import { ActionButton } from './actionButton';

type AdminGridRowProps = {
  title: Tables<'titles'>;
};

export function AdminGridRow({ title }: AdminGridRowProps) {
  
  return (
    <li className='relative overflow-hidden rounded-lg border border-slate-200 dark:border-slate-600 dark:bg-gray-700 bg-white px-4 py-4 shadow-sm transition hover:border-cyan-400 hover:shadow-md'>
      <div className='relative z-10 grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.8fr)_110px_120px] md:items-center'>
        <div className='space-y-1'>
          <p className='text-sm font-semibold'>{title.title_name}</p>
        </div>

        <div>
          <UrlCopyButton slug={title.title_url} />
        </div>

        <div>
          <span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium border ${title.private ? 'border-amber-400 bg-amber-100 text-amber-800 dark:bg-amber-800 dark:text-amber-100' : 'bg-emerald-100 text-emerald-800 border-emerald-400 dark:bg-emerald-800 dark:text-emerald-100'}`}>
            {title.private ? 'Private' : 'Public'}
          </span>
        </div>

        <div className='flex items-center justify-end gap-2'>
          <ActionButton
            label={`Edit ${title.title_name}`}
            icon={faPenToSquare}
            clickHandler={() => {
              // TODO: Implement edit action
            }}
          />
          <ActionButton
            label={`Delete ${title.title_name}`}
            icon={faTrashCan}
            clickHandler={() => { 
              // TODO: Implement delete action
            }}
            customCss='border-rose-400 text-rose-700 dark:text-rose-400 hover:border-rose-400 hover:bg-rose-100 dark:hover:border-rose-400 dark:hover:bg-rose-900'
          />
        </div>
      </div>
    </li>
  );
}
