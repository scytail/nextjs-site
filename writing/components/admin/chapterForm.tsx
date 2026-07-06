import { faCode, faUpload } from "@fortawesome/free-solid-svg-icons";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import FormButton from "../shared/formButton";
import FormInput from "../shared/formInput";

async function uploadChapter(event: any) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const chapterFile = formData.get('chapterFile') as File;
  if (!chapterFile) {
    throw new Error('No file selected');
  }
  const result = await fetch('/api/admin/upload-chapter', {
    method: 'POST',
    body: chapterFile,
  });
  if (!result.ok) {
    throw new Error('Failed to upload chapter');
  }
}

export default function ChapterForm() {
  return(
    <form className='flex flex-col gap-2'
      onSubmit={uploadChapter}
    >
      <div className='flex flex-col gap-4'>
        <span>
          <FormInput type='file' id='chapterFile' label='Chapter File' placeholder='Select chapter file' icon={faMarkdown} required />
        </span>
      </div>
      <FormButton label='Upload Chapter' icon={faUpload} />
    </form>
  );
}