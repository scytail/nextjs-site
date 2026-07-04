import { AdminGrid } from "@/components/admin/admin-grid/grid";
import TitleForm from "@/components/admin/titleForm";
import FormButton from "@/components/shared/formButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default async function Page() {
  return (
    <div className='flex flex-col gap-4 w-7/8 mx-auto'>
      <div className='flex flex-col w-full gap-4 border border-slate-300 p-4 dark:border-slate-700 rounded-md h-full'>
        <div className='flex flex-row items-center justify-between'>
          <h2 className='text-xl font-semibold'>New Title</h2>
        </div>
        <TitleForm />
      </div>
      <div className='flex flex-col w-full gap-4 border border-slate-300 p-4 dark:border-slate-700 rounded-md h-full'>
        <div className='flex flex-row items-center justify-between'>
          <h2 className='text-xl font-semibold'>Chapters</h2>
          <span>
            <FormButton label='Add Chapter' icon={faPlus} />
          </span>
        </div>
        <AdminGrid titles={[]} />
      </div>
    </div>
  );
}
