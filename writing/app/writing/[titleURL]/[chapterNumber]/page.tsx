import ChapterView from "@/components/chapterView";
import { getChapter, getTitleByURL } from "@/lib/api";
import { notFound } from "next/dist/client/components/navigation";

export default async function ChapterPage(
  {params, 
   searchParams
  }: {params: Promise<{titleURL: string, chapterNumber: string}>, 
      searchParams: Promise<{ [key: string]: string | string[] | undefined }>
     }) {


  const {titleURL, chapterNumber} = await params;

  // for some reason, routes always parse as strings, even if you try to set them as something else.
  const chapterValue = parseInt(chapterNumber, 10);

  const title = await getTitleByURL(titleURL)
  if (!title) {
    notFound()
  }
  
  return (
    <>
      <header className="py-8 container mx-auto">
        <h2 className="text-4xl font-semibold">{title.title} - Chapter {chapterValue}</h2>
      </header>
      <main className="container mx-auto px-4">
        <ChapterView titleId={title.id} chapterNumber={chapterValue} />
      </main>
    </>
  )
}