import Project from "../projects/project";

export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl text-white mb-2">Personal Projects</h1>
      <div className="flex-wrap">
        <div className="grid lg:grid-cols-2 gap-5 my-5">
          <Project title="Manageable" description="A lightweight, python-based discord bot for managing discord servers of any size. Features include role management, useful moderation tools, a TTRPG-friendly dice roller, and user engagement activities." link="https://github.com/scytail/Manageable" tags={["Python", "SQL"]} />
          <Project title="Portfolio Site" description="You are here! Built by hand using the NextJS framework and deployed on the Vercel network, this portfolio site boasts a snappy interface and a clean, cool design." link="https://github.com/scytail/nextjs-site" tags={["Next.js", "React", "Tailwind CSS"]} />
          <Project title="Network Mapper" description="A python script built to crawl firewall and network interfaces and generate a visual representation of the ecosystem." link="https://github.com/scytail/Network-Mapper" tags={["Python", "Graphviz", "Network Security"]} />
          <Project title="LiteCrawl" description="A Unity game inspired by Loren Schmidt&apos;s musings. Explore layers of a procedurally-generated dungeon while defeating enemies and survive as long as possible." link="https://github.com/scytail/LiteCrawl" tags={["C#", "Unity"]} />
        </div>
      </div>
    </div>
  )
}
