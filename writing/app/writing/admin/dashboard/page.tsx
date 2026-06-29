import { signOut } from '@/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
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
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-600 p-3 text-sm font-medium hover:bg-cyan-500 hover:text-blue-600">
            <FontAwesomeIcon icon={faPowerOff} className="w-6" />
            <label className="hidden md:block">Sign Out</label>
          </button>
        </form>
      </header>
      <main className='flex flex-row gap-4 w-3/4 mx-auto'>
        <div className='flex flex-2 flex-col gap-4 border border-slate-300 p-4 dark:border-slate-700 rounded-md'>
            <h2>Active Titles</h2>
            <p>Coming soon...</p>
        </div>
        <div className='flex flex-1 flex-col gap-4 border border-slate-300 p-4 dark:border-slate-700 rounded-md'>
            <h2>Upload Title</h2>
            <p>Coming soon...</p>
        </div>
      </main>
    </div>
  );
}