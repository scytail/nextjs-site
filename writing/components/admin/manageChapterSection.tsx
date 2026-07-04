'use client';

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ChapterForm from "./chapterForm";

export default function ManageChapterSection() {
  const [chapterFormVisible, setChapterFormVisible] = React.useState(false);

  const toggleChapterForm = () => {
    setChapterFormVisible(!chapterFormVisible);
  };
  
  return (
    <div className='flex-1 flex flex-col w-full gap-4 border border-slate-300 p-4 dark:border-slate-700 rounded-md h-full'>
      <div className='flex flex-row items-center justify-between'>
        <h2 className='text-xl font-semibold'>Add Chapter</h2>
        <button type='button' onClick={toggleChapterForm} className='text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer'>
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
      <ChapterForm />
    </div>
  );
}