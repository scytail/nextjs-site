export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl text-white mb-2">Personal Projects</h1>
      <div className="text-white flex-wrap">
        <div className="grid grid-cols-2 gap-5 my-5">
          <a href="https://github.com/scytail/Manageable" className="flex flex-col border-2 border-slate-500 rounded-xl p-2 hover:bg-slate-700/75 duration-100" target="_blank">
            <h2 className="text-2xl font-bold">Manageable</h2>
            <span className="flex-grow text-base">A lightweight, python-based discord bot for managing discord servers of any size.</span>
            <div className="flex flex-row flex-wrap gap-1 mt-2">
              <div className="bg-sky-500 text-slate-800 px-3 rounded-full">Python</div>
              <div className="bg-sky-500 text-slate-800 px-3 rounded-full">SQL</div>
            </div>
          </a>
          <a href="https://github.com/scytail/nextjs-site" className="flex flex-col border-2 border-slate-500 rounded-xl p-2 hover:bg-slate-700/75 duration-100" target="_blank">
            <h2 className="text-2xl font-bold">Portfolio Site</h2>
            <span className="flex-grow text-base">You are here!</span>
            <div className="flex flex-row flex-wrap gap-1 mt-2">
              <div className="bg-sky-500 text-slate-800 px-3 rounded-full">Next.js</div>
              <div className="bg-sky-500 text-slate-800 px-3 rounded-full">React</div>
              <div className="bg-sky-500 text-slate-800 px-3 rounded-full">Tailwind CSS</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}