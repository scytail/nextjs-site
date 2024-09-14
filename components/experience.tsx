export default function Experience() {
  return (
    <div>
      <h1 className="text-4xl text-white mb-2">Professional Experience</h1>
      <div className="text-white flex-wrap grid grid-cols-3 gap-x-10 gap-y-4 mb-4">
        <div className="text-base text-slate-500 text-right pt-1">
          June 2018 - Present
          <div className="text-sm text-slate-500 italic">5+ years</div>
        </div>
        <div className="col-span-2">
          <h2 className="text-2xl text-white">Senior Software Engineer</h2>
          <h3 className="text-lg text-slate-500"><a href="https://gomomentus.com" className="hover:underline decoration-dotted" target="_blank">Momentus Technologies</a></h3>
          <div className="text-base text-white">
            Design, develop, and deliver high quality solutions for a diverse array of products in the event management world, and maintain existing enterprise applications to the satisfaction of relevant stakeholders.
            <h4 className="font-bold mt-3">Responsibilities</h4>
            <ul className="list-disc list-outside">
              <li className="ml-4">Work with teams of developers to design databases and business-layer code</li>
              <li className="ml-4">Interface with customers and product owners to build out accessible client-side visual UI elements to their specifications</li>
              <li className="ml-4">Squash bugs in a fast-pased, agile environment</li>
            </ul>
            <h4 className="font-bold mt-3">Projects</h4>
            <ul className="list-disc list-outside">
              <li className="ml-4">Construct a WYSIWYG registration badge editor</li>
              <li className="ml-4">Lead a team in designing and build financials API architecture</li>
              <li className="ml-4">Rebuild an automated email-notification system for a </li>
              <li className="ml-4">Myriad enhancements to enterprise-level registration and booking modules</li>
            </ul>
          </div>
          <div className="flex flex-row flex-wrap gap-1 mt-2">
            <div className="bg-sky-500 text-slate-800 px-3 rounded-full">.NET</div>
            <div className="bg-sky-500 text-slate-800 px-3 rounded-full">SQL</div>
            <div className="bg-sky-500 text-slate-800 px-3 rounded-full">Angular</div>
            <div className="bg-sky-500 text-slate-800 px-3 rounded-full">Durandal</div>
            <div className="bg-sky-500 text-slate-800 px-3 rounded-full">Aurelia</div>
          </div>
        </div>
        <div className="text-base text-slate-500 text-right pt-1">
          August 2014 - June 2018
          <div className="text-sm text-slate-500 italic">3 years 10 months</div>
        </div>
        <div className="col-span-2">
          <h2 className="text-2xl text-white">Operations Security Intern</h2>
          <h3 className="text-lg text-slate-500"><a href="https://www.slu.edu/its/" className="hover:underline decoration-dotted" target="_blank">Saint Louis University <span className="italic">(Network Security Team)</span></a></h3>
          <div className="text-base text-white">
            Develop and maintain network security measures to shield a university&apos;s network ecosystem.
            <h4 className="font-bold mt-3">Responsibilities</h4>
            <ul className="list-disc list-outside">
              <li className="ml-4">Manage & secure information moving through the university&apos;s complex network</li>
              <li className="ml-4">Develop new strategies for monitoring and preventing security weaknesses</li>
              <li className="ml-4">Analyze and react to various networking intrusions and issues in a timely manner</li>
            </ul>
            <h4 className="font-bold mt-3">Projects</h4>
            <ul className="list-disc list-outside">
              <li className="ml-4">Design and build a new Intrusion Detection System (IDS) that will replace the current system</li>
              <li className="ml-4">Manage Linux servers and databases</li>
              <li className="ml-4">Configure and run a suite of tools including Security Onion, ELSA, BRO, and Snorby</li>
              <li className="ml-4">Build scripts to help complete data analysis inquiries for myself and stakeholders</li>
            </ul>
          </div>
          <div className="flex flex-row flex-wrap gap-1 mt-2">
            <div className="bg-sky-500 text-slate-800 px-3 rounded-full">Python</div>
            <div className="bg-sky-500 text-slate-800 px-3 rounded-full">Linux</div>
          </div>
        </div>
        <div className="text-base text-slate-500 text-right pt-1">
          May 2017 - August 2017
          <div className="text-sm text-slate-500 italic">4 months</div>
        </div>
        <div className="col-span-2">
          <h2 className="text-2xl text-white">Software Engineer Intern</h2>
          <h3 className="text-lg text-slate-500"><a href="https://gomomentus.com" className="hover:underline decoration-dotted" target="_blank">Momentus Technologies</a></h3>
          <div className="text-base text-white">
            Work closely with a hard-working team of developers to tackle bugs and add enhancement to an enterprise-scale product, delivering value to the company.
            <h4 className="font-bold mt-3">Responsibilities</h4>
            <ul className="list-disc list-outside">
              <li className="ml-4">Tackle bugs across a large surface area, repairing products in a timely manner</li>
              <li className="ml-4">Implement new features into an enterprese system, integrating it closely with existing features</li>
            </ul>
            <h4 className="font-bold mt-3">Projects</h4>
            <ul className="list-disc list-outside">
              <li className="ml-4">Build a committee management module inside an existing management system that can be used by various customers.</li>
              <li className="ml-4">Restructure a core feature of the code for dictionary translations to make it follow SOLID principles.</li>
            </ul>
          </div>
          <div className="flex flex-row flex-wrap gap-1 mt-2">
            <div className="bg-sky-500 text-slate-800 px-3 rounded-full">.NET</div>
            <div className="bg-sky-500 text-slate-800 px-3 rounded-full">SQL</div>
            <div className="bg-sky-500 text-slate-800 px-3 rounded-full">Durandal</div>
          </div>
        </div>
      </div>
    </div>
  )
}