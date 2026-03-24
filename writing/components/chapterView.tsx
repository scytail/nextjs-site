import { getChapterBlob, getChapterMetadata } from "@/lib/api";
import Markdown from "react-markdown";

export default async function ChapterView({ titleId, chapterNumber }: { titleId: string; chapterNumber: number }) {

  const chapterMetadata = await getChapterMetadata(titleId, chapterNumber)
  if (!chapterMetadata) {
    throw new Error(`Metadata for chapter ${chapterNumber} not found for title ${titleId}`)
  }
  
  const chapterTextStream = await getChapterBlob(chapterMetadata.chapter_url)
  if (!chapterTextStream) {
    throw new Error(`Chapter content not found for chapter ${chapterNumber} in title ${titleId}`)
  }

  return (
    <>
      <div className="markdown">
        <Markdown>{await readableStreamToString(chapterTextStream)}</Markdown>
      </div>
    </>
  );
}

async function readableStreamToString(stream: ReadableStream): Promise<string> {
  const reader = stream.getReader();
  let text = '';
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    text += new TextDecoder().decode(value);
  }

  return text;
}