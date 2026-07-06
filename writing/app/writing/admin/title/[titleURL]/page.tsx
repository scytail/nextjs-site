import { Tables } from "@/app/api/models/database.types";
import TitlePageClient from "@/components/admin/titlePageClient";
import { UrlCopyButton } from "@/components/admin/urlCopyButton";
import { getChapterList, getTitleByURL } from "@/lib/api";

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
      <ChapterLink chapter={chapter} />
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
