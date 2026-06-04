'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAt, faKey, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { useActionState } from 'react';
import { authenticate } from '@/lib/actions';
import { useSearchParams } from 'next/navigation';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/writing/admin/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction}>
      <div className="flex flex-col items-center py-4">
        <h1 className="text-2xl font-semibold tracking-wide">
          Login
        </h1>
        <div>
            {errorMessage && (
              <div aria-live="polite" aria-atomic="true" className="flex items-center border-l-3 border-red-500 bg-red-200 rounded mt-4 gap-1 px-2 py-2">
                <FontAwesomeIcon icon={faExclamationCircle} className="text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
              </div>
            )}
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="username"
            >
              Username
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[8px] pl-10 text-sm border-3 placeholder:text-gray-500"
                id="username"
                type="text"
                name="username"
                placeholder="Enter your username"
                required
              />
              <FontAwesomeIcon icon={faAt} className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[8px] pl-10 text-sm border-3 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <FontAwesomeIcon icon={faKey} className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <button  aria-disabled={isPending} className="mt-4 rounded-md border-3 px-8 border-gray-200 cursor-pointer hover:bg-cyan-600 ease-in-out duration-200">
          Log in <FontAwesomeIcon icon={faArrowRight} className="ml-auto h-5 w-5 text-gray-50" />
        </button>
      </div>
    </form>
  );
}