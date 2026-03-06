import { getTitleByURL } from "@/app/api/methods/titles";
import { Title } from "@/app/api/models/title";
import ChapterList from "@/components/chapterList";
import ChapterView from "@/components/chapterView";
import { notFound } from "next/navigation";

async function TitleBody({title}: {title: Title}) {
  if (title.chapterCount === 1) {
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
        <h1 className="text-4xl font-semibold">{title?.title}</h1>
      </header>
      <main className="container mx-auto px-4">
        <div>
          <TitleBody title={title} />
        </div>
      </main>
    </>
  )
}