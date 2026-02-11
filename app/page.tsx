'use client';

import About from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Sidebar from '@/components/sidebar';
import {useReducer} from 'react';

interface IContentReducerAction {
  type: string;
}

class ChangeContentReducerAction implements IContentReducerAction {
  type: string;
  pageName: string;

  constructor(pageName: string) {
    this.type = "changeContent";
    this.pageName = pageName;
  }
}

export default function Home() {
  const [viewedContent, dispatch]: [string, Function] = useReducer(contentReducer, "about");
  
  function handleSetContent(pageName: string) {
    dispatch(new ChangeContentReducerAction(pageName));
  }

  function contentReducer(currentPage: string, action: IContentReducerAction): string {
    switch(action.type) {
      case "changeContent": {
        return (action as ChangeContentReducerAction).pageName;
      }
      default: {
        throw Error(`Unknown action: ${action.type}`);
      }
    }
  }

  return (
    <div className='h-screen flex items-center flex-row bg-gradient-to-tr from-slate-900 to-slate-800 bg-slate-800 font-sans'>
      <Sidebar navbarLinkClickHandler={handleSetContent} viewedContent={viewedContent} />
      <main className='border-y-2 border-cyan-500 flex flex-col relative basis-1/2 mx-5 text-left justify-start max-h-[66.666667%] overflow-y-auto px-2.5'>
        <div className={viewedContent !== "about"?"hidden":""}>
          <About />
        </div>

        <div className={viewedContent !== "experience"?"hidden":""}>
          <Experience />
        </div>
        
        <div className={viewedContent !== "projects"?"hidden":""}>
          <Projects />
        </div>
        
        <div className={viewedContent !== "contact"?"hidden":""}>
          <Contact />
        </div>
      </main>
    </div>
  )
}
