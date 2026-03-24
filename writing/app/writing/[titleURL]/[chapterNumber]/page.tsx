import ChapterView from "@/components/MarkdownView";
import { getTitleByURL } from "@/lib/api";
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
      <header className="py-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold italic">{title.title_name} - Chapter {chapterValue}</h2>
      </header>
      <main className="mx-auto px-4 max-w-6xl">
        <ChapterView titleId={title.id} chapterNumber={chapterValue} />
      </main>
    </>
  )
}