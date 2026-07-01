import { Suspense } from 'react';
import LoginForm from '@/components/public/login-form';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="border border-slate-300 p-4 dark:border-slate-700 rounded-md md:-mt-32">
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}