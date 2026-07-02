'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

function ConstructIcon({ icon }: { icon?: IconDefinition }) {
  if (!icon) {
    return null;
  }

  return (
    <FontAwesomeIcon icon={icon} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:peer-focus:text-gray-100" />
  );
}

export default function FormInput({ id, type, label, placeholder, required, minLength, icon}: { id: string; type: string; label: string; placeholder?: string; required?: boolean; minLength?: number; icon?: IconDefinition }) {
  return (
    <div>
      <label
        className="mb-3 mt-5 text-md font-medium"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        <input
          className="peer rounded-md border py-2 pl-10 text-sm border-2 placeholder:text-gray-500 focus:outline-none border-slate-300 dark:border-slate-700 hover:border-cyan-600 dark:hover:border-cyan-500 focus:border-black dark:focus:border-white"
          id={id}
          name={id}
          type={type}
          accept={type === 'file' ? '.md' : undefined}
          placeholder={placeholder}
          required={required}
          minLength={minLength}
        />
        {ConstructIcon({ icon })}
      </div>
    </div>
  );
}