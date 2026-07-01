'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export interface NavbarActionButtonProps {
  icon: IconDefinition;
}

export default function ActionButton({ icon }: NavbarActionButtonProps) {
  return (
    <FontAwesomeIcon icon={icon} className='ease-in-out duration-200 text-2xl text-neutral-500 hover:text-cyan-500 cursor-pointer' />
  );
}
