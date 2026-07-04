'use client';

export default function FormSwitch({
  id,
  label,
  defaultChecked,
  disabled,
}: {
  id: string;
  label: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}) {
  return (
    <div className='w-full'>
      <label htmlFor={id} className="mb-3 mt-5 text-md font-medium">
        {label}
        <div className="relative flex flex-col w-fit">
          <input
            id={id}
            name={id}
            type="checkbox"
            value="true"
            defaultChecked={defaultChecked}
            disabled={disabled}
            className="sr-only peer"
          />
          <span className="w-14 h-8 rounded-full bg-slate-300 dark:bg-slate-700 peer-focus-visible:ring-2 peer-focus-visible:ring-cyan-500 peer-checked:bg-cyan-500 transition-colors duration-200 cursor-pointer" />
          <span className="absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-200 peer-checked:translate-x-6 cursor-pointer" />
        </div>
      </label>
    </div>
  );
}
