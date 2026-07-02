import { signOut } from '@/auth';
import { faCode, faHeading, faPowerOff, faUpload } from '@fortawesome/free-solid-svg-icons';
import { AdminGrid } from '@/components/admin/admin-grid/grid';
import { getAllTitles } from '@/lib/api';
import FormButton from '@/components/shared/formButton';
import FormInput from '@/components/shared/formInput';
import FormTextarea from '@/components/shared/formTextarea';
import FormSwitch from '@/components/shared/formSwitch';

export default async function Page() {
  const titles = await getAllTitles();

  return (
    <div className='min-h-screen flex flex-col items-center'>
      <header className='flex flex-row gap-8 my-8 items-center justify-between w-3/4 px-8'>
        <h1 className='text-4xl font-semibold italic'>
          Dashboard
        </h1>
        <form
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/writing/login' });
          }}
        >
          <FormButton label='Sign Out' icon={faPowerOff} />
        </form>
      </header>
      <main className='flex flex-row gap-4 w-3/4 mx-auto'>
        <div className='flex flex-2 flex-col gap-4 border border-slate-300 p-4 dark:border-slate-700 rounded-md h-full'>
            <h2 className='text-xl font-semibold'>Active Titles</h2>
            <AdminGrid titles={titles} />
        </div>
        <div className='flex flex-1 flex-col gap-4 border border-slate-300 p-4 dark:border-slate-700 rounded-md h-full'>
            <h2 className='text-xl font-semibold'>Upload Title</h2>
            <form className='flex flex-col gap-4' 
              action={async (formData: FormData) => {
                'use server';
                const titleFile = formData.get('titleFile') as File;
                if (!titleFile) {
                  throw new Error('No file selected');
                }
                const result = await fetch('/api/admin/upload-title', {
                  method: 'POST',
                  body: titleFile,
                });
                if (!result.ok) {
                  throw new Error('Failed to upload title');
                }
              }
            }>
              <FormInput type='text' id='titleName' label='Name' placeholder='Enter title name' icon={faHeading} required />
              <FormInput type='text' id='titleUrl' label='URL Slug' placeholder='Enter title URL' icon={faCode} required />
              <FormSwitch id='titlePrivate' label='Private Title' />
              <FormTextarea id='titleDescription' label='Description' placeholder='Enter title description' />
              <FormButton label='Upload Title' icon={faUpload} />
            </form>
        </div>
      </main>
    </div>
  );
}