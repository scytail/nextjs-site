export default function Experience() {
  return (
    <div>
      <h1 className="text-4xl text-white mb-2">Experience</h1>
      <div className="text-white flex-wrap">
        <div className="grid grid-cols-2 gap-x-10 gap-y-4">
          <div className="text-slate-500 text-right">June 2018 - Present</div>
          <div>
            <h2 className="text-2xl">Software Developer II</h2>
            <h3 className="text-lg text-stone-500"><a href="https://gomomentus.com" className="hover:underline decoration-dotted" target="_blank">Momentus Technologies</a></h3>
            <div className="text-base">
              Summary here
            </div>
            <div className="flex flex-row space-x-5">
              <div>.NET</div>
              <div>SQL</div>
              <div>Angular</div>
              <div>Durandal</div>
              <div>Aurelia</div>
            </div>
          </div>
          <div className="text-slate-500 text-right">August 2014 - June 2018</div>
          <div>
            <h2 className="text-2xl">Network Security Administrator Intern</h2>
            <h3 className=" text-lg text-stone-500"><a href="https://www.slu.edu/its/" className="hover:underline decoration-dotted" target="_blank">Saint Louis University</a></h3>
            <div className="text-base">
              Summary here
            </div>
            <div className="flex flex-row space-x-5">
              <div>Python</div>
              <div>Linux</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}