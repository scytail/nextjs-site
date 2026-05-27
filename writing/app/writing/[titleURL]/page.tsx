import { getTitleByURL } from "@/lib/api";
import ChapterList from "@/components/chapterList";
import ChapterView from "@/components/MarkdownView";
import { notFound } from "next/navigation";
import { Tables } from "@/app/api/models/database.types";
import { getTitleChapterCount } from "@/lib/api";

async function TitleBody({title}: {title: Tables<'titles'>}) {
  const chapterCount = await getTitleChapterCount(title.id)
  
  if (chapterCount === 1) {
    return <ChapterView titleId={title.id} chapterNumber={1} />
  }
  else {
    return <ChapterList title={title} />
  }
}

export default async function TitlePage({params, searchParams}: {params: Promise<{titleURL: string}>, searchParams: Promise<{ [key: string]: string | string[] | undefined }>}) {
  const { titleURL } = await params

  const title = await getTitleByURL(titleURL)

  if (!title) {
    notFound()
  }

  return (
    <>
      <div className="py-8 max-w-6xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-semibold italic">{title.title_name}</h1>
        {title.private && (
          <h2 className="mt-2 text-sm dark:text-gray-500 text-gray-600 italic">(Private Publication)</h2>
        )}
      </div>
      <main className="mx-auto px-4 max-w-6xl mb-16">
        <TitleBody title={title} />
      </main>
    </>
  )
}