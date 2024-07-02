import React from "react";

const projects = [
	{
		title: "Defi Sync",
		stack: "Next JS | Tailwind CSS | Rainbow kit |",
		description:
			"Know the updated price with charts of most popular coins.",
		githubLink: "https://github.com/reetbatra/defi-sync",
		vercelLink: "https://defi-sync.vercel.app/",
	},
	{
		title: "Sushi Man",
		stack: "HTML | CSS | Vanilla JS",
		description:
			"A fun little cute sushi themed website",
		githubLink: "https://github.com/reetbatra/sushi-man",
		vercelLink:
			"https://sushi-man-three.vercel.app/",
	},
	{
		title: "NFT Minter thirdweb",
		stack: "Solidity | Thirdweb | Next JS | Tailwind CSS",
		description:
			"NFT Minter using thirdweb",
		githubLink: "https://github.com/reetbatra/nft-minter-thirdweb",
		vercelLink: "https://nft-minter-thirdweb.vercel.app/",
	},
	{
		title: "Brainwave",
		stack: "Next JS | Tailwind CSS",
		description:
			"A modern ui with animations",
		githubLink: "https://github.com/reetbatra/brainwave",
		vercelLink: "https://reet-brainwave.netlify.app/",
	}
];

const Project: React.FC = () => {
	return (
		<div className='min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center'>
			<h1 className='text-white text-4xl lg:text-5xl font-bold  mt-12 '>
				Projects
			</h1>
			<div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20 bg-slate-950 w-full min-h-screen '>
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.title}
						stack={project.stack}
						description={project.description}
						githubLink={project.githubLink}
						vercelLink={project.vercelLink}
					/>
				))}
			</div>
		</div>
	);
};

const ProjectCard: React.FC<{
	title: string;
	stack: string;
	description: string;
	githubLink: string;
	vercelLink: string;
}> = ({ title, stack, description, githubLink, vercelLink }) => {
	return (
		<div className='bg-slate-950 rounded-xl  p-4 glow-border flex flex-col justify-center'>
			<h3 className='tracking-wider text-white text-3xl font-bold mb-2'>
				{title}
			</h3>
			<p className='tracking-wider text-white text-sm font-bold mb-2 uppercase'>
				{stack}
			</p>
			<p className='tracking-wider text-gray-300 pr-6 font-light'>
				{description}
			</p>
			<div className='mt-4 flex space-x-4'>
				<a
					href={githubLink}
					target='_blank'
					rel='noopener noreferrer'
					className=' tracking-wider bg-purple-700 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-purple-600'>
					GitHub
				</a>
				<a
					href={vercelLink}
					target='_blank'
					rel='noopener noreferrer'
					className='tracking-wider border-purple-800 border-2  text-white py-2 px-4 rounded-md transition duration-300 hover:bg-purple-600 hover:border-purple-800'>
					Website
				</a>
			</div>
		</div>
	);
};

export default Project;
