import { Tables } from '@/app/api/models/database.types';
import { AdminGrid } from '@/components/admin/admin-grid/grid';
import { UrlCopyButton } from '@/components/admin/urlCopyButton';
import FormButton from '@/components/shared/formButton';
import { ActionButton } from '@/components/admin/admin-grid/actionButton';
import { getAllTitles } from '@/lib/api';
import { faPenToSquare, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { redirect } from 'next/dist/client/components/navigation';

function GenerateRowElements(titles: Tables<'titles'>[]): React.ReactNode[][] {
  return titles.map((title) => {
    const columnElements = [
      <div className='space-y-1'>
        <p className='text-sm font-semibold'>{title.title_name}</p>
      </div>,
      <UrlCopyButton slug={title.title_url} />,
      <span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium border ${title.private ? 'border-amber-400 bg-amber-100 text-amber-800 dark:bg-amber-800 dark:text-amber-100' : 'bg-emerald-100 text-emerald-800 border-emerald-400 dark:bg-emerald-800 dark:text-emerald-100'}`}>
        {title.private ? 'Private' : 'Public'}
      </span>,
      <div className='flex items-center justify-end gap-2'>
          <ActionButton
            label={`Edit ${title.title_name}`}
            icon={faPenToSquare}
          />
          <ActionButton
            label={`Delete ${title.title_name}`}
            icon={faTrashCan}
            customCss='border-rose-400 text-rose-700 dark:text-rose-400 hover:border-rose-400 hover:bg-rose-100 dark:hover:border-rose-400 dark:hover:bg-rose-900'
          />
        </div>
    ];

    return columnElements;
  });
}

export default async function Page() {
  const titles = await getAllTitles();

  const rowData = GenerateRowElements(titles);

  return (
    <div className='flex flex-col lg:flex-row gap-4 w-7/8 mx-auto'>
      <div className='flex w-full flex-col gap-4 border border-slate-300 p-4 dark:border-slate-700 rounded-md h-full'>
        <div className='flex flex-row items-center justify-between'>
          <h2 className='text-xl font-semibold'>Active Titles</h2>
          <span>
            <form action={async () => {
              'use server';
              redirect('/writing/admin/title');
            }}>
              <FormButton label='Add Title' icon={faPlus} />
            </form>
          </span>
        </div>
        <AdminGrid columns={['Title', 'URL', 'Visibility', 'Actions']} rowData={rowData} />
      </div>
    </div>
  );
}