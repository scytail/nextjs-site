'use client';

import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

type UrlCopyButtonProps = {
  slug: string;
};

export function UrlCopyButton({ slug }: UrlCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  
  const handleCopy = async () => {
    // Note that this will only work in a browser environment after prerender, as window and navigator are not available on the server during the build.
    const fullUrl = `https://${window.location.hostname}/writing/${slug}`;
    await navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='flex flex-row rounded-md border border-slate-400 divide-x-1 text-sm text-slate-700 dark:text-slate-300'>
      <p className='truncate flex-auto py-1.5 px-3' title={slug}>
        {slug}
      </p>
      <button
        type='button'
        className='flex-none transition py-1.5 px-3 hover:text-cyan-700 dark:hover:text-cyan-400 cursor-pointer'
        aria-label={`Copy URL for ${slug}`}
        onClick={handleCopy}
        title={copied ? 'Copied!' : 'Copy URL'}
      >
        <FontAwesomeIcon icon={faLink} />
      </button>
    </div>
  );
}
