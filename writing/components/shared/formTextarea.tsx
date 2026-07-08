type FormTextareaProps = {
  id: string;
  label: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
};

export default function FormTextarea({ id, label, placeholder, value, required }: FormTextareaProps) {
  return (
    <div className='w-full'>
      <label
        className="mb-3 mt-5 text-md font-medium"
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        className="w-full rounded-md border p-2 text-sm border-2 placeholder:text-gray-500 focus:outline-none border-slate-300 dark:border-slate-700 hover:border-cyan-600 dark:hover:border-cyan-500 focus:border-black dark:focus:border-white"
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        required={required}
      />
    </div>
  );
}