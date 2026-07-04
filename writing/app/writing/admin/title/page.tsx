'use client';

import { AdminGrid } from "@/components/admin/admin-grid/grid";
import ChapterForm from "@/components/admin/chapterForm";
import ManageChapterSection from "@/components/admin/manageChapterSection";
import TitleForm from "@/components/admin/titleForm";
import FormButton from "@/components/shared/formButton";
import { faArrowLeft, faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Page() {
  const [chapterFormVisible, setChapterFormVisible] = React.useState(false);
  
  const toggleChapterForm = () => {
    setChapterFormVisible(!chapterFormVisible);
  };

  return (
    <div className='flex flex-col gap-4 w-7/8 mx-auto'>
      <div className='flex flex-col w-full gap-4 border border-slate-300 p-4 dark:border-slate-700 rounded-md h-full'>
        <div className='flex flex-row items-center justify-between'>
          <h2 className='text-xl font-semibold'>New Title</h2>
          <span>
            <FormButton label='Back to Dashboard' icon={faArrowLeft} onClick={() => window.location.href = '/writing/admin/dashboard'} />
          </span>
        </div>
        <TitleForm />
      </div>
      <div className='flex flex-row w-full gap-4'>
        <div className='flex-3 flex flex-col w-full gap-4 border border-slate-300 p-4 dark:border-slate-700 rounded-md h-full'>
          <div className='flex flex-row items-center justify-between'>
            <h2 className='text-xl font-semibold'>Chapters</h2>
            <span>
              <FormButton 
                label={chapterFormVisible ? 'Hide Chapter Form' : 'Add Chapter'} 
                icon={chapterFormVisible ? faClose : faPlus} 
                onClick={toggleChapterForm} />
            </span>
          </div>
          <AdminGrid titles={[]} />
        </div>
        {
          chapterFormVisible && (
            <div className='flex-1 flex flex-col w-full gap-4 border border-slate-300 p-4 dark:border-slate-700 rounded-md h-full'>
              <div className='flex flex-row items-center justify-between'>
                <h2 className='text-xl font-semibold'>Add Chapter</h2>
                <button type='button' onClick={toggleChapterForm} className='text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer'>
                  <FontAwesomeIcon icon={faClose} />
                </button>
              </div>
              <ChapterForm />
            </div>
        )}
      </div>
    </div>
  );
}
