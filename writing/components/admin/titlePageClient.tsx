'use client';

import { faArrowLeft, faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import FormButton from "../shared/formButton";
import TitleForm from "./titleForm";
import { AdminGrid } from "./admin-grid/grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChapterForm from "./chapterForm";
import React from "react";
import { Tables } from "@/app/api/models/database.types";

export default function TitlePageClient({ titleData, chapterRowData }: { titleData: Tables<'titles'> | null; chapterRowData: React.ReactNode[][] }) {
  const [chapterFormVisible, setChapterFormVisible] = React.useState(false);
  
  const toggleChapterForm = () => {
    setChapterFormVisible(!chapterFormVisible);
  };

  return (
    <div className='flex flex-col gap-4 w-7/8 mx-auto'>
      <div className='flex flex-col w-full gap-4 border border-slate-300 p-4 dark:border-slate-700 rounded-md h-full'>
        <div className='flex flex-row items-center justify-between'>
          <h2 className='text-xl font-semibold'>{titleData ? 'Edit Title' : 'New Title'}</h2>
          <span>
            <FormButton label='Back to Dashboard' icon={faArrowLeft} onClick={() => window.location.href = '/writing/admin/dashboard'} />
          </span>
        </div>
        <TitleForm titleData={titleData} />
      </div>
      <div className={'flex flex-row w-full gap-4 ' + (titleData ? '' : 'hidden')}>
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
          <AdminGrid columns={['Chapter Number', 'File', 'URL']} rowData={chapterRowData} />
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