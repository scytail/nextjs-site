import { AdminGridRow } from './row';

type AdminGridProps = {
  columns: string[];
  rowData: React.ReactNode[][];
};

function AdminGridContent({ rowData }: { rowData: React.ReactNode[][] }) {
  if (!rowData || rowData.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center gap-2 p-4 text-slate-500 dark:text-slate-400'>
        <p className='text-sm italic'>No content</p>
      </div>
    );
  }

  const rows = [];
  for(let i = 0; i < rowData.length; i++) {
    rows.push(<AdminGridRow key={i} columnElements={rowData[i]} />);
  }

  return (
    <ul className='flex flex-col gap-2 p-2'>
      {rows}
    </ul>
  )
}

export function AdminGrid({columns, rowData }: AdminGridProps) {
  if (!columns || columns.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center gap-2 p-4 text-slate-500 dark:text-slate-400'>
        <p className='text-sm italic'>No columns defined for grid</p>
      </div>
    );
  }

  return (
    <section className='overflow-hidden rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-gray-800 dark:border-slate-600 shadow-sm'>
      <div className='hidden border-b border-slate-200 dark:bg-gray-700 bg-white px-4 py-3 md:grid md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.8fr)_110px_120px] md:gap-4'>
        {
          columns.map((column) => (
            <div key={column} className='text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400'>{column}</div>
          ))
        }
      </div>

      <AdminGridContent rowData={rowData} />
    </section>
  );
}
