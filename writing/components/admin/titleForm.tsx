import { faBook, faCode, faHeading } from "@fortawesome/free-solid-svg-icons";
import FormButton from "../shared/formButton";
import FormInput from "../shared/formInput";
import FormSwitch from "../shared/formSwitch";
import FormTextarea from "../shared/formTextarea";
import { Tables } from "@/app/api/models/database.types";

export default function TitleForm({ titleData }: { titleData: Tables<'titles'> | null }) {
  const summary = titleData?.summary || undefined;

  return(
    <form className='flex flex-col gap-2'>
      <div className='flex flex-row gap-4'>
        <span className='flex-1'>
          <FormInput type='text' id='titleName' label='Name' placeholder='Enter title name' value={titleData?.title_name} icon={faHeading} required />
        </span>
        <span className='flex-1'>
          <FormInput type='text' id='titleUrl' label='URL Slug' placeholder='Enter title URL' value={titleData?.title_url} icon={faCode} required />
        </span>
        <span className='flex-min'>
          <FormSwitch id='titlePrivate' label='Private Title' defaultChecked={titleData?.private} />
        </span>
        <span className='flex-2'>
          <FormTextarea id='titleDescription' label='Description' placeholder='Enter title description' value={summary} />
        </span>
      </div>
      <FormButton label={titleData ? 'Update Title' : 'Create Title'} icon={faBook} />
    </form>
  );
}