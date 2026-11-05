import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFeatherPointed } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Navbar( {focusedId}: { focusedId: string } ) {
  return (
    <div className="flex flex-col items-start lg:max-h-5/6 lg:h-full lg:align-top">
      <svg id='sidebar_logo' className="hidden lg:block pl-2 w-1/2 fill-neutral-500" strokeLinecap="round" strokeLinejoin="round" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600.000000 600.000000" preserveAspectRatio="xMidYMid meet" role="img">
        <title>A stylized logo of a B and an S combined into one</title>
        <g transform="translate(0.000000,600.000000) scale(0.200000,-0.200000)"> 
          <path strokeWidth='30' d="M950 2588 c0 -2 -51 -223 -114 -493 -78 -337 -110 -492 -102 -497 6 -3 234 -65 506 -138 272 -72 514 -138 537 -146 84 -30 131 -119 119 -222 -15 -129 -101 -210 -272 -258 -82 -23 -527 -34 -520 -13 12 36 108 470 105 473 -9 6 -520 138 -524 135 -3 -4 -235 -1001 -235 -1014 0 -3 271 -5 603 -2 518 3 614 6 690 21 265 52 446 140 571 278 112 123 162 271 154 454 -4 91 -8 111 -37 169 -38 77 -98 130 -207 182 -73 35 -117 45 -691 164 -173 35 -213 47 -213 60 0 13 34 165 95 427 5 22 8 22 148 22 305 0 397 -44 397 -189 0 -94 -38 -164 -113 -211 l-27 -17 172 -46 c95 -26 203 -54 240 -64 l67 -17 55 38 c108 75 177 191 196 333 42 316 -174 515 -608 562 -85 9 -992 17 -992 9z"/> 
        </g>
      </svg>
      <div id='sidebar_text' className='pl-10'>
        <div id='title'>
          <h1 className='text-4xl text-slate-200'>Ben Schwabe</h1>
          <h2 className='text-2xl text-slate-500'>Software Engineer</h2>
        </div>
        <ul id='nav' className='hidden lg:flex flex-col mt-6 mb-4'>
          <li className='text-zinc-500'>
            <a href="#about" className={"group flex items-center hover:font-bold hover:text-white duration-200 cursor-pointer".concat(" ", focusedId === "about"? "text-cyan-500":"")}>
              <span className="h-px w-0 bg-white mr-4 group-hover:w-4 group-hover:mr-2 duration-200"></span>
              About
            </a>
          </li>
          <li className='text-zinc-500'>
            <a href="#experience" className={"group flex items-center hover:font-bold hover:text-white duration-200 cursor-pointer".concat(" ", focusedId === "experience"? "text-cyan-500":"")}>
              <span className="h-px w-0 bg-white mr-4 group-hover:w-4 group-hover:mr-2 duration-200"></span>
              Experience
            </a>
          </li>
          <li className='text-zinc-500'>
            <a href="#projects" className={"group flex items-center hover:font-bold hover:text-white duration-200 cursor-pointer".concat(" ", focusedId === "projects"? "text-cyan-500":"")}>
              <span className="h-px w-0 bg-white mr-4 group-hover:w-4 group-hover:mr-2 duration-200"></span>
              Projects
            </a>
          </li>
        </ul>
      </div> 
      <div id='sidebar_links' className="flex flex-row gap-x-2 items-center pl-10 mt-3 mb-4">
        <a href='mailto:scytaill@gmail.com' title="Email me">
          <FontAwesomeIcon icon={faEnvelope} className='ease-in-out duration-300 text-xl text-neutral-500 hover:text-cyan-500' />
        </a>
        <a href='https://github.com/scytail' target="_blank" title="View my GitHub profile">
          <FontAwesomeIcon icon={faGithub} className='ease-in-out duration-300 text-2xl text-neutral-500 hover:text-cyan-500' />
        </a>
        <a href='https://www.linkedin.com/in/ben-schwabe/' target="_blank" title="View my LinkedIn profile">
          <FontAwesomeIcon icon={faLinkedin} className='ease-in-out duration-300 text-2xl text-neutral-500 hover:text-cyan-500' />
        </a>
        <a href='/writing' title="My writing portfolio">
          <FontAwesomeIcon icon={faFeatherPointed} className='ease-in-out duration-300 text-2xl text-neutral-500 hover:text-cyan-500' />
        </a>
      </div>
    </div>
  )
}