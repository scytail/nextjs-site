import { AdminGrid } from '@/components/admin/admin-grid/grid';
import FormButton from '@/components/shared/formButton';
import { getAllTitles } from '@/lib/api';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default async function Page() {
  const titles = await getAllTitles();

  return (
    <div className='flex flex-col lg:flex-row gap-4 w-7/8 mx-auto'>
      <div className='flex w-full flex-col gap-4 border border-slate-300 p-4 dark:border-slate-700 rounded-md h-full'>
        <div className='flex flex-row items-center justify-between'>
          <h2 className='text-xl font-semibold'>Active Titles</h2>
          <span>
            <FormButton label='Add Title' icon={faPlus} />
          </span>
        </div>
        <AdminGrid titles={titles} />
      </div>
    </div>
  );
}