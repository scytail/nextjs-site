'use client';

import About from '@/components/Sections/about';
import Experience from '@/components/Sections/experience';
import Projects from '@/components/Sections/projects';
import Sidebar from '@/components/Sections/sidebar';

export default function Home() {
  
  return (
    <div className='h-screen flex justify-center items-center flex-row bg-linear-to-tr from-slate-900 to-slate-800 bg-slate-800 font-sans'>
      <Sidebar focusedId={""} />
      <main className='flex flex-col relative basis-1/2 mx-5 text-left justify-start max-h-5/6 overflow-y-auto px-2 gap-y-25 text-slate-400 scroll-smooth'>
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
