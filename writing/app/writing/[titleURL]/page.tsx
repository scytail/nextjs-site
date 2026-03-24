import { getTitleByURL } from "@/lib/api";
import ChapterList from "@/components/chapterList";
import ChapterView from "@/components/chapterView";
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
      <header className="py-8 container mx-auto">
        <h1 className="text-4xl font-semibold">{title.title_name}</h1>
      </header>
      <main className="container mx-auto px-4">
        <div>
          <TitleBody title={title} />
        </div>
      </main>
    </>
  )
}