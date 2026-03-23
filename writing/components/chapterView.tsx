import { getChapterBlob, getChapterMetadata } from "@/lib/api";
import Markdown from "react-markdown";

export default async function ChapterView({ titleId, chapterNumber }: { titleId: string; chapterNumber: number }) {

  const chapterMetadata = await getChapterMetadata(titleId, chapterNumber)
  if (!chapterMetadata) {
    throw new Error(`Metadata for chapter ${chapterNumber} not found for title ${titleId}`)
  }
  
  const chapterText = await getChapterBlob(chapterMetadata.chapter_url)
  if (!chapterText) {
    throw new Error(`Chapter content not found for chapter ${chapterNumber} in title ${titleId}`)
  }

  return (
    <>
      <div className="markdown">
        <Markdown>{chapterText}</Markdown>
      </div>
    </>
  );
}