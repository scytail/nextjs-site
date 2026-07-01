'use client';

export interface LinkElementProps {
  path: string;
  text: string;
}

export default function LinkElement({ path, text }: LinkElementProps) {
  return (
    <a href={path} className={"group flex items-center hover:font-bold hover:text-black hover:dark:text-white duration-200 dark:text-cyan-600 text-cyan-700"}>
      <span className="h-px w-0 bg-black dark:bg-white mr-4 group-hover:w-4 group-hover:mr-2 duration-200"></span>
      {text}
    </a>
  );
}
