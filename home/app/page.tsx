'use client';

import About from '@/components/sections/about';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import Navbar from '@/components/sections/navbar';

export default function Home() {
  
  return (
    <div className='h-screen flex flex-col lg:flex-row justify-center items-center bg-linear-to-tr from-slate-950 to-slate-800 bg-slate-800 font-sans'>
      <Navbar focusedId={""} />
      <main className='flex flex-col lg:basis-1/2 mx-5 text-left justify-start max-h-5/6 overflow-y-auto px-2 gap-y-25 text-slate-400 scroll-smooth'>
        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>
      </main>
    </div>
  )
}
