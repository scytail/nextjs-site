import { Tables } from "@/app/api/models/database.types";
import { ActionButton } from "@/components/admin/admin-grid/actionButton";
import TitlePageClient from "@/components/admin/titlePageClient";
import { UrlCopyButton } from "@/components/admin/urlCopyButton";
import { getChapterList, getTitleByURL } from "@/lib/api";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function generateChapterRowData(titleURL: string, chapters: Tables<'chapters'>[]): React.ReactNode[][] {
  function ChapterLink({chapter}: {chapter: Tables<'chapters'>}) {
    if(chapters.length === 1) {
      return (<UrlCopyButton slug={titleURL} />)
    }
    
    return (<UrlCopyButton slug={titleURL + '/' + chapter.chapter_number} />)
  }

  return chapters.map((chapter) => {
    const columnElements = [
      <div className='space-y-1'>
        <p className='text-sm font-semibold'>{chapter.chapter_number}</p>
      </div>,
      <div className='space-y-1'>
        <p className='text-sm font-semibold'>{chapter.chapter_url}</p>
      </div>,
      <ChapterLink chapter={chapter} />,
      <div className='flex items-center justify-end gap-2'>
        <ActionButton
          label={`Edit ${chapter.chapter_number}`}
          icon={faPenToSquare}
        />
        <ActionButton
          label={`Delete ${chapter.chapter_number}`}
          icon={faTrashCan}
          customCss='border-rose-400 text-rose-700 dark:text-rose-400 hover:border-rose-400 hover:bg-rose-100 dark:hover:border-rose-400 dark:hover:bg-rose-900'
        />
      </div>
    ];

    return columnElements;
  });
}

export default async function Page({params, searchParams
  }: {params: Promise<{ titleURL: string }>, 
      searchParams: Promise<{ [key: string]: string | string[] | undefined }>
     }) {

  const {titleURL} = await params;
  const titleData = await getTitleByURL(titleURL);
  const chapters = await getChapterList(titleData.id);
  
  const chapterRowData = generateChapterRowData(titleURL, chapters);

  return (
    <TitlePageClient titleData={titleData} chapterRowData={chapterRowData} />
  );
}
