'use client';

import About from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import {useState} from 'react';

interface IClientMousePosition {
  clientX: number;
  clientY: number;
  pageX: number;
  pageY: number;
}

export default function Home() {
  const [viewedContent, setViewedContent] = useState("about");
  
  return (
    <div id='page' className='flex h-screen items-center flex-row bg-gradient-to-tr from-slate-900 to-slate-800 bg-slate-800 font-sans'>
      <div id='left' className='flex basis-1/4 flex-col items-start mx-5'>
        <svg id='logo' className="self-center w-1/2 fill-neutral-500" strokeLinecap="round" strokeLinejoin="round" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600.000000 600.000000" preserveAspectRatio="xMidYMid meet" role="img">
          <title>A stylized logo of a B and an S combined into one</title>
          <g transform="translate(0.000000,600.000000) scale(0.200000,-0.200000)"> 
            <path strokeWidth='30' d="M950 2588 c0 -2 -51 -223 -114 -493 -78 -337 -110 -492 -102 -497 6 -3 234 -65 506 -138 272 -72 514 -138 537 -146 84 -30 131 -119 119 -222 -15 -129 -101 -210 -272 -258 -82 -23 -527 -34 -520 -13 12 36 108 470 105 473 -9 6 -520 138 -524 135 -3 -4 -235 -1001 -235 -1014 0 -3 271 -5 603 -2 518 3 614 6 690 21 265 52 446 140 571 278 112 123 162 271 154 454 -4 91 -8 111 -37 169 -38 77 -98 130 -207 182 -73 35 -117 45 -691 164 -173 35 -213 47 -213 60 0 13 34 165 95 427 5 22 8 22 148 22 305 0 397 -44 397 -189 0 -94 -38 -164 -113 -211 l-27 -17 172 -46 c95 -26 203 -54 240 -64 l67 -17 55 38 c108 75 177 191 196 333 42 316 -174 515 -608 562 -85 9 -992 17 -992 9z"/> 
          </g>
        </svg>
        <div className='pl-10'>
          <div id='title' className='mb-8'>
            <h1 className='text-4xl text-white'>Ben Schwabe</h1>
            <h2 className='text-2xl text-slate-500'>Full-Stack Engineer</h2>
            <h2 className='text-lg text-zinc-500'>
              <a className='text-base hover:underline decoration-dotted' href='https://gomomentus.com' target='_blank'>Momentus Technologies</a>
            </h2>
          </div>
          <ul id='nav'>
            <li className='text-base text-zinc-500'>
              <button onClick={() => setViewedContent("about")} className={"group flex items-center hover:font-bold hover:text-white duration-200".concat(" ", viewedContent === "about"? "text-teal-500":"")}>
                <span className="h-px w-0 bg-white mr-4 group-hover:w-4 group-hover:mr-2 duration-200"></span>
                About
              </button>
            </li>
            <li className='text-zinc-500'>
              <button onClick={() => setViewedContent("experience")} className={"group flex items-center hover:font-bold hover:text-white duration-200".concat(" ", viewedContent === "experience"? "text-teal-500":"")}>
                <span className="h-px w-0 bg-white mr-4 group-hover:w-4 group-hover:mr-2 duration-200"></span>
                Experience
              </button>
            </li>
            <li className='text-zinc-500'>
              <button onClick={() => setViewedContent("projects")} className={"group flex items-center hover:font-bold hover:text-white duration-200".concat(" ", viewedContent === "projects"? "text-teal-500":"")}>
                <span className="h-px w-0 bg-white mr-4 group-hover:w-4 group-hover:mr-2 duration-200"></span>
                Projects
              </button>
            </li>
          </ul>
        </div> 
        <div id='links' className="flex flex-row mt-10 gap-x-4 self-center">
          <button onClick={() => setViewedContent("contact")}>
            <svg className='ease-in-out duration-300 w-6 h-6 stroke-neutral-500 hover:stroke-cyan-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} role="link">
              <title>Email me using my form</title>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </button>
          <a href='https://github.com/scytail' target="_blank">
            <svg className='ease-in-out duration-300 w-[1.54rem] h-6 fill-neutral-500 hover:fill-cyan-500' xmlns="http://www.w3.org/2000/svg" role="link">
              <title>View my GitHub profile</title>
              <g transform="scale(0.25,0.25)">
                <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
              </g>
            </svg>
          </a>
          <a href='https://www.linkedin.com/in/ben-schwabe/' target="_blank">
            <svg className="ease-in-out duration-300 w-6 h-6 fill-neutral-500 hover:fill-cyan-500" xmlns="http://www.w3.org/2000/svg" role='link'>
              <title>View my LinkedIn profile</title>
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
        <div id='footer' className='my-20 text-slate-700'>
          <a href='https://github.com/scytail/nextjs-site' className='hover:text-slate-600 hover:underline decoration-dotted' target='_blank'>&copy;Ben Schwabe 2024</a>
        </div>
      </div>
      <main id='center' className='border-y-2 border-cyan-500 flex flex-col relative basis-1/2 mx-5 text-left justify-start max-h-[66.666667%] overflow-y-auto px-2.5'>
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
