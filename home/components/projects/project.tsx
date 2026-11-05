import { Pill } from "../shared/pill";

type ProjectProps = {
	title?: string;
	description?: string;
  link?: string;
  tags?: string[];
};

export default function Project({
	title = "Project",
	description = "The project description should go here. It should be a brief summary of the project, what it does, and what technologies were used to build it.",
	link = "https://example.com",
	tags = ["Example", "Tags"]
}: ProjectProps) {
	return (
		<a href={link} className="flex flex-col rounded-xl p-2 border-l-2 border-cyan-800 hover:bg-slate-700/50 duration-200" target="_blank">
      <h2 className="text-2xl font-bold text-slate-200">{title}</h2>
      <span className="grow text-base">{description}</span>
      <div className="flex flex-row flex-wrap gap-1 mt-2">
        {tags.map((tag) => (
          <Pill text={tag} />
        ))}
      </div>
    </a>
	);
}
