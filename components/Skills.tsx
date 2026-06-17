import React from "react";
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaAws, FaGitAlt, FaPython,
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiSolidity, SiMongodb, SiAstro, SiVercel,
} from "react-icons/si";
import { DiPostgresql } from "react-icons/di";

interface Skill {
  name: string;
  icon?: React.ReactNode;
}

const ic = "text-gray-400 text-3xl hover:text-emerald-400 transition-all duration-300 ease-in-out hover:scale-110";

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "TypeScript",    icon: <SiTypescript className={ic} /> },
    { name: "JavaScript",    icon: <FaJs         className={ic} /> },
    { name: "Python",        icon: <FaPython      className={ic} /> },
    { name: "Claude API" },
    { name: "Vercel AI SDK", icon: <SiVercel      className={ic} /> },
    { name: "React",         icon: <FaReact       className={ic} /> },
    { name: "Next.js",       icon: <SiNextdotjs   className={ic} /> },
    { name: "Node.js",       icon: <FaNodeJs      className={ic} /> },
    { name: "Solidity",      icon: <SiSolidity    className={ic} /> },
    { name: "Cairo" },
    { name: "HTML",          icon: <FaHtml5       className={ic} /> },
    { name: "CSS",           icon: <FaCss3        className={ic} /> },
    { name: "Tailwind CSS",  icon: <SiTailwindcss className={ic} /> },
    { name: "MongoDB",       icon: <SiMongodb     className={ic} /> },
    { name: "PostgreSQL",    icon: <DiPostgresql  className={ic} /> },
    { name: "AWS",           icon: <FaAws         className={ic} /> },
    { name: "Astro",         icon: <SiAstro       className={ic} /> },
    { name: "Git",           icon: <FaGitAlt      className={ic} /> },
  ];

  return (
    <section className='bg-slate-950 w-full py-20 px-6 sm:px-12 md:px-16 lg:px-28 xl:px-36'>

      {/* Section label */}
      <div className='flex items-center gap-3 mb-5'>
        <span className='w-6 h-px bg-emerald-500' />
        <span className='text-emerald-400 tracking-[0.3em] text-[10px] uppercase font-semibold'>
          02 / Skills
        </span>
      </div>

      <h1 className='tracking-tight text-white text-4xl lg:text-5xl font-bold mb-12'>
        Tech skills
      </h1>

      <div className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 gap-x-6 gap-y-8'>
        {skills.map((skill, index) => (
          <SkillIcon key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
};

const SkillIcon: React.FC<Skill> = ({ name, icon }) => {
  if (!icon) {
    return (
      <div className='flex flex-col items-center gap-2 group'>
        <div className='w-8 h-8 rounded-lg border border-slate-700 group-hover:border-emerald-700 flex items-center justify-center bg-slate-900/50 transition-colors duration-300'>
          <span className='text-emerald-500 text-[8px] font-bold text-center leading-tight px-0.5'>
            {name.split(" ")[0].slice(0, 4)}
          </span>
        </div>
        <span className='text-gray-500 text-[10px] text-center leading-tight group-hover:text-gray-300 transition-colors duration-300'>{name}</span>
      </div>
    );
  }
  return (
    <div className='flex flex-col items-center gap-2 group'>
      {icon}
      <span className='text-gray-500 text-[10px] text-center leading-tight group-hover:text-gray-300 transition-colors duration-300'>{name}</span>
    </div>
  );
};

export default Skills;
