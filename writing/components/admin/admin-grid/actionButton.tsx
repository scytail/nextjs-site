'use client';

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ActionButton({ label, icon, clickHandler, customCss }: { label: string; icon: IconDefinition; clickHandler?: any; customCss?: string }) {
  const defaultLightCss = 'border-slate-400 text-slate-700 hover:border-cyan-400 hover:text-cyan-700'; 
  const defaultDarkCss = 'dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400';

  const buttonCss = customCss ? customCss : defaultLightCss + ' ' + defaultDarkCss;
  return (
    <button
      type='button'
      onClick={clickHandler}
      className={`rounded-md border px-3 py-1.5 text-sm transition cursor-pointer ${buttonCss}`}
      aria-label={ label }
    >
      <FontAwesomeIcon icon={ icon } />
    </button>
  );
}