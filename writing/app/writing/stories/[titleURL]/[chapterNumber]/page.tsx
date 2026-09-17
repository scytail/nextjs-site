import ChapterView from "@/components/public/MarkdownView";
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
      <header className="py-8 max-w-6xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-semibold italic">{title.title_name} - Chapter {chapterValue}</h1>
        {title.private && (
          <h2 className="mt-2 text-sm dark:text-gray-500 text-gray-600 italic">(Private Publication)</h2>
        )}
      </header>
      <main className="mx-auto px-4 max-w-6xl mb-16">
        <ChapterView titleId={title.id} chapterNumber={chapterValue} />
      </main>
    </>
  )
}