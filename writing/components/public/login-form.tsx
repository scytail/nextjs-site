'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAt, faKey, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { useActionState } from 'react';
import { authenticate } from '@/lib/actions';
import { useSearchParams } from 'next/navigation';
import FormButton from '../shared/formButton';
import FormInput from '../shared/formInput';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/writing/admin/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction}>
      <div className="flex flex-col items-center py-4 px-8 gap-4">
        <h1 className="text-4xl font-semibold italic tracking-wide">
          Login
        </h1>
        {errorMessage && (
          <div aria-live="polite" aria-atomic="true" className="flex items-center border-l-3 border-red-500 bg-red-200 rounded gap-1 px-2 py-2">
            <FontAwesomeIcon icon={faExclamationCircle} className="text-red-500" />
            <p className="text-sm text-red-500">{errorMessage}</p>
          </div>
        )}

        <FormInput
          id="username"
          type="text"
          label="Username"
          placeholder="Enter your username"
          required
          icon={faAt}
          autoFocus
        />
        <FormInput
          id="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          required
          minLength={6}
          icon={faKey}
        />
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <FormButton label="Log in" icon={faArrowRight} />
      </div>
    </form>
  );
}