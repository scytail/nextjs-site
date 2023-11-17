export default function Experience() {
  return (
    <div>
      <h1 className="text-4xl text-white mb-2">Professional Experience</h1>
      <div className="text-white flex-wrap">
        <div className="grid grid-cols-2 gap-x-10 gap-y-4 mb-4">
          <div className="text-base text-slate-500 text-right pt-1">
            June 2018 - Present
            <div className="text-sm text-stone-500 italic">5+ years</div>
          </div>
          <div>
            <h2 className="text-2xl text-white">Software Developer II</h2>
            <h3 className="text-lg text-stone-500"><a href="https://gomomentus.com" className="hover:underline decoration-dotted" target="_blank">Momentus Technologies</a></h3>
            <div className="text-base text-white">
              Summary here
            </div>
            <div className="flex flex-row flex-wrap gap-1 mt-2">
              <div className="bg-orange-600 text-stone-800 px-3 rounded-full">.NET</div>
              <div className="bg-orange-600 text-stone-800 px-3 rounded-full">SQL</div>
              <div className="bg-orange-600 text-stone-800 px-3 rounded-full">Angular</div>
              <div className="bg-orange-600 text-stone-800 px-3 rounded-full">Durandal</div>
              <div className="bg-orange-600 text-stone-800 px-3 rounded-full">Aurelia</div>
            </div>
          </div>
          <div className="text-base text-slate-500 text-right pt-1">
            August 2014 - June 2018
            <div className="text-sm text-stone-500 italic">3 years 10 months</div>
            </div>
          <div>
            <h2 className="text-2xl text-white">Operations Security Intern</h2>
            <h3 className=" text-lg text-stone-500"><a href="https://www.slu.edu/its/" className="hover:underline decoration-dotted" target="_blank">Saint Louis University <span className="italic">(Network Security Team)</span></a></h3>
            <div className="text-base text-white">
              Summary here
            </div>
            <div className="flex flex-row flex-wrap gap-1 mt-2">
              <div className="bg-orange-600 text-stone-800 px-3 rounded-full">Python</div>
              <div className="bg-orange-600 text-stone-800 px-3 rounded-full">Linux</div>
            </div>
          </div>
          <div className="text-base text-slate-500 text-right pt-1">
            May 2017 - August 2017
            <div className="text-sm text-stone-500 italic">4 months</div>
          </div>
          <div>
            <h2 className="text-2xl text-white">Software Engineer Intern</h2>
            <h3 className="text-lg text-stone-500"><a href="https://gomomentus.com" className="hover:underline decoration-dotted" target="_blank">Momentus Technologies</a></h3>
            <div className="text-base text-white">
              Summary here
            </div>
            <div className="flex flex-row flex-wrap gap-1 mt-2">
              <div className="bg-orange-600 text-stone-800 px-3 rounded-full">.NET</div>
              <div className="bg-orange-600 text-stone-800 px-3 rounded-full">SQL</div>
              <div className="bg-orange-600 text-stone-800 px-3 rounded-full">Durandal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}