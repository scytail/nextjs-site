export type PillProps = {
	text?: string;
};

export function Pill({ text }: PillProps) {
	return (
    <div key={text} className="bg-sky-500 text-slate-800 px-3 rounded-full">
      {text}
    </div>
  );
}
