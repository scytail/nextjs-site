import { faCode, faUpload } from "@fortawesome/free-solid-svg-icons";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import FormButton from "../shared/formButton";
import FormUpload from "../shared/formUpload";
import { uploadChapter } from "@/lib/actions";

export default function ChapterForm({
  titleId,
  chapterNumber,
}: {
  titleId: string;
  chapterNumber: number;
}) {
  return(
    <form
      className='flex flex-col gap-2'
      action={(formData) => uploadChapter(formData, titleId, chapterNumber)}
    >
      <div className='flex flex-col gap-4'>
        <span>
          <FormUpload type='file' id='chapterFile' label='Chapter File' icon={faMarkdown} required />
        </span>
      </div>
      <FormButton label='Upload Chapter' icon={faUpload} />
    </form>
  );
}