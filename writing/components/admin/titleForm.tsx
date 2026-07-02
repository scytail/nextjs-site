import { faCode, faHeading, faUpload } from "@fortawesome/free-solid-svg-icons";
import FormButton from "../shared/formButton";
import FormInput from "../shared/formInput";
import FormSwitch from "../shared/formSwitch";
import FormTextarea from "../shared/formTextarea";

export default function TitleForm() {
  return(
    <form className='flex flex-col gap-4' 
      action={async (formData: FormData) => {
        'use server';
        const titleFile = formData.get('titleFile') as File;
        if (!titleFile) {
          throw new Error('No file selected');
        }
        const result = await fetch('/api/admin/upload-title', {
          method: 'POST',
          body: titleFile,
        });
        if (!result.ok) {
          throw new Error('Failed to upload title');
        }
      }
    }>
      <FormInput type='text' id='titleName' label='Name' placeholder='Enter title name' icon={faHeading} required />
      <FormInput type='text' id='titleUrl' label='URL Slug' placeholder='Enter title URL' icon={faCode} required />
      <FormSwitch id='titlePrivate' label='Private Title' />
      <FormTextarea id='titleDescription' label='Description' placeholder='Enter title description' />
      <FormButton label='Upload Title' icon={faUpload} />
    </form>
  );
}