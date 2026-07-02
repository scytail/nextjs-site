import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icon({ icon }: { icon?: IconDefinition }) {
  if (!icon) return null;
  return <FontAwesomeIcon icon={icon} className="w-6" />;
}

export default function FormButton({ label, icon }: { label: string; icon?: IconDefinition }) {
  return (
    <button
      type='submit'
      className='flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium bg-slate-300 dark:bg-slate-700 hover:bg-cyan-500 dark:hover:bg-cyan-500 dark:hover:text-slate-900 transition-colors duration-200 cursor-pointer'
      aria-label={label}
      aria-disabled={true}
    >
      <Icon icon={icon} />
      <label className="hidden md:block cursor-pointer">{label}</label>
    </button>
  );
}