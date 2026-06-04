import { signOut } from '@/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
  return (
    <main>
      <h1 className='mb-4 text-xl md:text-2xl'>
        Dashboard
      </h1>
      <form
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/writing/login' });
          }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-600 p-3 text-sm font-medium hover:bg-cyan-500 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <FontAwesomeIcon icon={faPowerOff} className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
    </main>
  );
}