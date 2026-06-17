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
    <section className='bg-slate-950 w-full py-20 px-6 sm:px-12 md:px-16 lg:px-28 xl:px-36'>

      {/* Section label */}
      <div className='flex items-center gap-3 mb-5'>
        <span className='w-6 h-px bg-emerald-500' />
        <span className='text-emerald-400 tracking-[0.3em] text-[10px] uppercase font-semibold'>
          05 / Projects
        </span>
      </div>

      <h1 className='tracking-tight text-white text-4xl lg:text-5xl font-bold mb-12'>
        Things I&apos;ve built
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
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
    <div className='glow-border rounded-2xl p-6 flex flex-col justify-between gap-5 bg-slate-900/20 hover:bg-slate-900/40 transition-colors duration-300 group'>
      <div>
        <h3 className='text-white text-lg font-semibold mb-3 group-hover:text-emerald-300 transition-colors duration-300'>
          {title}
        </h3>
        <div className='flex flex-wrap gap-1.5 mb-4'>
          {stack.map((tech, i) => (
            <span
              key={i}
              className='text-[9px] uppercase tracking-widest text-gray-500 border border-slate-700 px-2 py-0.5 rounded-full'>
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
          className='flex items-center gap-2 rounded-full bg-emerald-700/20 hover:bg-emerald-600 border border-emerald-800/40 text-emerald-300 hover:text-white py-2 px-4 text-xs font-medium transition-all duration-300'>
          <FaGithub size={12} /> GitHub
        </a>
        {liveLink && (
          <a
            href={liveLink}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 rounded-full border border-slate-700 hover:border-emerald-700 text-gray-400 hover:text-white py-2 px-4 text-xs font-medium transition-all duration-300'>
            <FaExternalLinkAlt size={10} /> Live
          </a>
        )}
      </div>
    </div>
  );
};

export default Projects;
