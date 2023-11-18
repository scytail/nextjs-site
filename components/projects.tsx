export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl text-white mb-2">Personal Projects</h1>
      <div className="text-white flex-wrap">
        <div className="grid grid-cols-2 gap-5 my-5">
          <div className="border-2 border-white rounded-xl p-2">
            <h2 className="text-2xl font-bold">Title</h2>
            <span className="text-base">Description Loem Ipsum</span>
            <div className="flex flex-row flex-wrap gap-1 mt-2">
              <div className="bg-sky-500 text-slate-800 px-3 rounded-full">Python</div>
              <div className="bg-sky-500   text-slate-800 px-3 rounded-full">SQL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}