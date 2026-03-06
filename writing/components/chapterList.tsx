import { getChapterList } from "@/app/api/methods/chapters";
import { Title } from "@/app/api/models/title";

export default async function ChapterList({title}: {title: Title}) {
  const chapters = await getChapterList(title.id)
  
    if (!chapters?.length) {
      throw new Error(`No chapters found for title ${title.id}`)
    }
  
    return (
      <>
        <h2 className="text-xl font-semibold mb-4">Chapters:</h2>
        <div className="space-y-2 ml-4">
          {chapters.map((chapter) => (
            <div key={chapter.id}>
              <a className="text-gray-700 text-base hover:text-blue-500 w-fit ease-in-out duration-200"
                 href={`/writing/${title.urlTitle}/${chapter.chapterNumber}`}>
                <span className="inline-block mr-2">›</span>
                Chapter {chapter.chapterNumber}
              </a>
            </div>
          ))}
        </div>
      </>
    );
}