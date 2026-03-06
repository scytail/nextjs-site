import { getChapter } from "@/lib/api";
import Markdown from "react-markdown";

export default async function ChapterView({ titleId, chapterNumber }: { titleId: string; chapterNumber: number }) {

  const chapter = await getChapter(titleId, chapterNumber)

  if (!chapter) {
    throw new Error(`Chapter ${chapterNumber} not found for title ${titleId}`)
  }

  return (
    <>
      <div className="markdown">
        <Markdown>{chapter.blob}</Markdown>
      </div>
    </>
  );
}