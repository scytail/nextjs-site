import { Suspense } from 'react';
import LoginForm from '@/components/public/login-form';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="flex flex-col p-4 md:-mt-32">
        <div className="flex items-end rounded-lg bg-slate-700 px-8 gap-8">
          <Suspense>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}