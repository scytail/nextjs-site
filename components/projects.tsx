export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl text-white mb-2">Personal Projects</h1>
      <div className="text-white flex-wrap">
        <div className="grid grid-cols-2 gap-5 my-5">
          <div className="flex flex-col border-2 border-white rounded-xl p-2">
            <h2 className="text-2xl font-bold">Title</h2>
            <span className="flex-grow text-base">Description Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
            <div className="flex flex-row flex-wrap gap-1 mt-2">
              <div className="bg-sky-500 text-slate-800 px-3 rounded-full">Python</div>
              <div className="bg-sky-500 text-slate-800 px-3 rounded-full">SQL</div>
            </div>
          </div>
          <div className="flex flex-col border-2 border-white rounded-xl p-2">
            <h2 className="text-2xl font-bold">Title</h2>
            <span className="flex-grow text-base">Description Lorem Ipsum</span>
            <div className="flex flex-row flex-wrap gap-1 mt-2">
              <div className="bg-sky-500 text-slate-800 px-3 rounded-full">Next.js</div>
              <div className="bg-sky-500 text-slate-800 px-3 rounded-full">React</div>
              <div className="bg-sky-500 text-slate-800 px-3 rounded-full">Tailwind CSS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}