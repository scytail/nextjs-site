import { faCode, faHeading, faUpload } from "@fortawesome/free-solid-svg-icons";
import FormButton from "../shared/formButton";
import FormInput from "../shared/formInput";
import FormSwitch from "../shared/formSwitch";
import FormTextarea from "../shared/formTextarea";

export default function TitleForm() {
  return(
    <form className='flex flex-col gap-2'>
      <div className='flex flex-row gap-4'>
        <span className='flex-1'>
          <FormInput type='text' id='titleName' label='Name' placeholder='Enter title name' icon={faHeading} required />
        </span>
        <span className='flex-1'>
          <FormInput type='text' id='titleUrl' label='URL Slug' placeholder='Enter title URL' icon={faCode} required />
        </span>
        <span className='flex-min'>
          <FormSwitch id='titlePrivate' label='Private Title' />
        </span>
        <span className='flex-2'>
          <FormTextarea id='titleDescription' label='Description' placeholder='Enter title description' />
        </span>
      </div>
      <FormButton label='Upload Title' icon={faUpload} />
    </form>
  );
}