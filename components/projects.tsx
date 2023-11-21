export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl text-white mb-2">Personal Projects</h1>
      <div className="text-white flex-wrap">
        <div className="grid grid-cols-2 gap-5 my-5">
          <a href="https://github.com/scytail/Manageable" className="flex flex-col border-2 border-slate-500 rounded-xl p-2 hover:bg-slate-700/75 duration-100" target="_blank">
            <h2 className="text-2xl font-bold">Manageable</h2>
            <span className="flex-grow text-base">A lightweight, python-based discord bot for managing discord servers of any size. Features include role management, useful moderation tools, a TTRPG-friendly dice roller, and user engagement activities.</span>
            <div className="flex flex-row flex-wrap gap-1 mt-2">
              <div className="bg-sky-500 text-slate-800 px-3 rounded-full">Python</div>
              <div className="bg-sky-500 text-slate-800 px-3 rounded-full">SQL</div>
            </div>
          </a>
          <a href="https://github.com/scytail/nextjs-site" className="flex flex-col border-2 border-slate-500 rounded-xl p-2 hover:bg-slate-700/75 duration-100" target="_blank">
            <h2 className="text-2xl font-bold">Portfolio Site</h2>
            <span className="flex-grow text-base">You are here! Built from scratch using Next.JS framework and deployed on the Vercel network, this portfolio site boasts a snappy interface and a clean, cool design.</span>
            <div className="flex flex-row flex-wrap gap-1 mt-2">
              <div className="bg-sky-500 text-slate-800 px-3 rounded-full">Next.js</div>
              <div className="bg-sky-500 text-slate-800 px-3 rounded-full">React</div>
              <div className="bg-sky-500 text-slate-800 px-3 rounded-full">Tailwind CSS</div>
            </div>
          </a>
          <a href="https://github.com/scytail/Network-Mapper" className="flex flex-col border-2 border-slate-500 rounded-xl p-2 hover:bg-slate-700/75 duration-100" target="_blank">
            <h2 className="text-2xl font-bold">Network Mapper</h2>
            <span className="flex-grow text-base">A python script built to crawl firewall and network interfaces and generate a visual representation of the ecosystem.</span>
            <div className="flex flex-row flex-wrap gap-1 mt-2">
              <div className="bg-sky-500 text-slate-800 px-3 rounded-full">Python</div>
              <div className="bg-sky-500 text-slate-800 px-3 rounded-full">Graphviz</div>
              <div className="bg-sky-500 text-slate-800 px-3 rounded-full">Network Security</div>
            </div>
          </a>
          <a href="https://github.com/scytail/LiteCrawl" className="flex flex-col border-2 border-slate-500 rounded-xl p-2 hover:bg-slate-700/75 duration-100" target="_blank">
            <h2 className="text-2xl font-bold">LiteCrawl</h2>
            <span className="flex-grow text-base">A Unity game inspired by Loren Schmidt's musings. Explore layers of a procedurally-generated dungeon while defeating enemies and survive as long as possible.</span>
            <div className="flex flex-row flex-wrap gap-1 mt-2">
              <div className="bg-sky-500 text-slate-800 px-3 rounded-full">C#</div>
              <div className="bg-sky-500 text-slate-800 px-3 rounded-full">Unity</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}