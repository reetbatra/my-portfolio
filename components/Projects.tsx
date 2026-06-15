import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "docs-parity",
    stack: ["TypeScript", "Claude API", "Firecrawl", "Next.js"],
    description:
      "AI agent that crawls documentation and flags gaps between what docs say and what the API actually does.",
    githubLink: "https://github.com/reetbatra/docs-parity",
    liveLink: "https://docsparity.vercel.app/",
  },
  {
    title: "open-money-intel",
    stack: ["TypeScript", "AI Agents", "Next.js"],
    description:
      "Open-source platform using AI agents to surface actionable intelligence across DeFi protocols.",
    githubLink: "https://github.com/reetbatra/open-money-intel",
    liveLink: "https://open-money-intel.vercel.app/",
  },
  {
    title: "deja-vu-agent",
    stack: ["Python", "FastAPI", "LLM"],
    description:
      "AI agent that detects and surfaces recurring failure patterns across large datasets using LLMs.",
    githubLink: "https://github.com/reetbatra/deja-vu-agent",
    liveLink: null,
  },
  {
    title: "zk-wordle",
    stack: ["Compact", "Midnight", "TypeScript", "React"],
    description:
      "Wordle with ZK-proof-verified guesses built on Midnight's privacy-first blockchain.",
    githubLink: "https://github.com/reetbatra/zk-wordle",
    liveLink: null,
  },
  {
    title: "zk-cred-verifier",
    stack: ["TypeScript", "ZK Proofs"],
    description:
      "Zero-knowledge credential verification — prove claims without revealing the underlying data.",
    githubLink: "https://github.com/reetbatra/zk-cred-verifier",
    liveLink: null,
  },
  {
    title: "chronos-gambit",
    stack: ["TypeScript", "Move", "Aptos"],
    description:
      "On-chain chess engine with match history and wagering on Aptos using the Move language.",
    githubLink: "https://github.com/reetbatra/chronos-gambit",
    liveLink: null,
  },
];

const Projects: React.FC = () => {
  return (
    <div className='min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center'>
      <h1 className='text-white text-4xl lg:text-5xl font-bold tracking-wider mt-12'>
        Projects
      </h1>
      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 w-full'>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard: React.FC<(typeof projects)[0]> = ({
  title,
  stack,
  description,
  githubLink,
  liveLink,
}) => {
  return (
    <div className='bg-slate-950 rounded-xl p-6 glow-border flex flex-col justify-between gap-4'>
      <div>
        <h3 className='tracking-wider text-white text-xl font-bold mb-3'>{title}</h3>
        <div className='flex flex-wrap gap-2 mb-3'>
          {stack.map((tech, i) => (
            <span
              key={i}
              className='text-[10px] uppercase tracking-widest text-purple-400 border border-purple-900 px-2 py-0.5 rounded'>
              {tech}
            </span>
          ))}
        </div>
        <p className='text-gray-400 text-sm leading-relaxed'>{description}</p>
      </div>
      <div className='flex gap-3'>
        <a
          href={githubLink}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 tracking-wider bg-purple-700 text-white py-2 px-4 rounded-md text-sm transition duration-300 hover:bg-purple-600'>
          <FaGithub /> GitHub
        </a>
        {liveLink && (
          <a
            href={liveLink}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 tracking-wider border-purple-800 border-2 text-white py-2 px-4 rounded-md text-sm transition duration-300 hover:bg-purple-600 hover:border-purple-600'>
            <FaExternalLinkAlt size={12} /> Live
          </a>
        )}
      </div>
    </div>
  );
};

export default Projects;
