import { signOut } from "@/auth";
import FormButton from "@/components/shared/formButton";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='min-h-screen flex flex-col items-center'>
      <header className='flex flex-row gap-8 my-8 items-center justify-between w-5/6 px-8'>
        <h1 className='text-4xl font-semibold italic'>
          Site Management
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
      {children}
    </div>
  )
}