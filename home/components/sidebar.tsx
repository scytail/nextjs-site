import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFeatherPointed } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Sidebar( {navbarLinkClickHandler, viewedContent}: any ) {
  return (
    <div className="flex basis-1/4 flex-col items-start mx-5">
      <svg id='logo' className="self-center w-1/2 fill-neutral-500" strokeLinecap="round" strokeLinejoin="round" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600.000000 600.000000" preserveAspectRatio="xMidYMid meet" role="img">
        <title>A stylized logo of a B and an S combined into one</title>
        <g transform="translate(0.000000,600.000000) scale(0.200000,-0.200000)"> 
          <path strokeWidth='30' d="M950 2588 c0 -2 -51 -223 -114 -493 -78 -337 -110 -492 -102 -497 6 -3 234 -65 506 -138 272 -72 514 -138 537 -146 84 -30 131 -119 119 -222 -15 -129 -101 -210 -272 -258 -82 -23 -527 -34 -520 -13 12 36 108 470 105 473 -9 6 -520 138 -524 135 -3 -4 -235 -1001 -235 -1014 0 -3 271 -5 603 -2 518 3 614 6 690 21 265 52 446 140 571 278 112 123 162 271 154 454 -4 91 -8 111 -37 169 -38 77 -98 130 -207 182 -73 35 -117 45 -691 164 -173 35 -213 47 -213 60 0 13 34 165 95 427 5 22 8 22 148 22 305 0 397 -44 397 -189 0 -94 -38 -164 -113 -211 l-27 -17 172 -46 c95 -26 203 -54 240 -64 l67 -17 55 38 c108 75 177 191 196 333 42 316 -174 515 -608 562 -85 9 -992 17 -992 9z"/> 
        </g>
      </svg>
      <div className='pl-10'>
        <div id='title' className='mb-8'>
          <h1 className='text-4xl text-white'>Ben Schwabe</h1>
          <h2 className='text-2xl text-slate-500'>Software Engineer</h2>
          <h2 className='text-lg text-zinc-500'>
            <a className='text-base hover:underline decoration-dotted' href='https://gomomentus.com' target='_blank'>Momentus Technologies</a>
          </h2>
        </div>
        <ul id='nav'>
          <li className='text-base text-zinc-500'>
            <button onClick={() => navbarLinkClickHandler("about")} className={"group flex items-center hover:font-bold hover:text-white duration-200 cursor-pointer".concat(" ", viewedContent === "about"? "text-teal-500":"")}>
              <span className="h-px w-0 bg-white mr-4 group-hover:w-4 group-hover:mr-2 duration-200"></span>
              About
            </button>
          </li>
          <li className='text-zinc-500'>
            <button onClick={() => navbarLinkClickHandler("experience")} className={"group flex items-center hover:font-bold hover:text-white duration-200 cursor-pointer".concat(" ", viewedContent === "experience"? "text-teal-500":"")}>
              <span className="h-px w-0 bg-white mr-4 group-hover:w-4 group-hover:mr-2 duration-200"></span>
              Experience
            </button>
          </li>
          <li className='text-zinc-500'>
            <button onClick={() => navbarLinkClickHandler("projects")} className={"group flex items-center hover:font-bold hover:text-white duration-200 cursor-pointer".concat(" ", viewedContent === "projects"? "text-teal-500":"")}>
              <span className="h-px w-0 bg-white mr-4 group-hover:w-4 group-hover:mr-2 duration-200"></span>
              Projects
            </button>
          </li>
        </ul>
      </div> 
      <div id='links' className="flex flex-row mt-10 gap-x-2 self-center items-center">
        {/*
        <button onClick={() => navbarLinkClickHandler("contact")}>
          <svg className='ease-in-out duration-300 w-6 h-6 stroke-neutral-500 hover:stroke-cyan-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} role="link">
            <title>Email me using my form</title>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </button>
        */}
        <a href='/writing' title="My writing portfolio">
          <FontAwesomeIcon icon={faFeatherPointed} className='ease-in-out duration-300 text-2xl text-neutral-500 hover:text-cyan-500' />
        </a>
        <a href='mailto:scytaill@gmail.com' title="Email me">
          <FontAwesomeIcon icon={faEnvelope} className='ease-in-out duration-300 text-xl text-neutral-500 hover:text-cyan-500' />
        </a>
        <a href='https://github.com/scytail' target="_blank" title="View my GitHub profile">
          <FontAwesomeIcon icon={faGithub} className='ease-in-out duration-300 text-2xl text-neutral-500 hover:text-cyan-500' />
        </a>
        <a href='https://www.linkedin.com/in/ben-schwabe/' target="_blank" title="View my LinkedIn profile">
          <FontAwesomeIcon icon={faLinkedin} className='ease-in-out duration-300 text-2xl text-neutral-500 hover:text-cyan-500' />
        </a>
      </div>
      <div id='footer' className='my-20 text-slate-700'>
        <a href='https://github.com/scytail/nextjs-site' className='hover:text-slate-600 hover:underline decoration-dotted' target='_blank'>&copy;Ben Schwabe 2025</a>
      </div>
    </div>
  )
}