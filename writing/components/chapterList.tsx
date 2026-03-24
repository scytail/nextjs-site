import { getChapterList } from "@/lib/api";
import { Tables } from "@/app/api/models/database.types";

export default async function ChapterList({title}: {title: Tables<'titles'>}) {
  const chapters = await getChapterList(title.id)
  
    if (!chapters?.length) {
      throw new Error(`No chapters found for title ${title.id}`)
    }
  
    return (
      <article>
        <h2 className="text-2xl font-semibold mb-4">Chapters:</h2>
        <div className="space-y-2 ml-4">
          {chapters.map((chapter) => (
            <div key={chapter.id}>
              <a className="text-gray-700 text-base hover:text-blue-500 w-fit ease-in-out duration-200"
                 href={`/writing/${title.title_url}/${chapter.chapter_number}`}>
                <span className="inline-block mr-2">›</span>
                Chapter {chapter.chapter_number}
              </a>
            </div>
          ))}
        </div>
      </article>
    );
}