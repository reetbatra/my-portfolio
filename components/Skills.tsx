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

const iconClass = "text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95";

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "TypeScript",    icon: <SiTypescript className={iconClass} /> },
    { name: "JavaScript",    icon: <FaJs         className={iconClass} /> },
    { name: "Python",        icon: <FaPython      className={iconClass} /> },
    { name: "Claude API" },
    { name: "Vercel AI SDK", icon: <SiVercel      className={iconClass} /> },
    { name: "React",         icon: <FaReact       className={iconClass} /> },
    { name: "Next.js",       icon: <SiNextdotjs   className={iconClass} /> },
    { name: "Node.js",       icon: <FaNodeJs      className={iconClass} /> },
    { name: "Solidity",      icon: <SiSolidity    className={iconClass} /> },
    { name: "Cairo" },
    { name: "HTML",          icon: <FaHtml5       className={iconClass} /> },
    { name: "CSS",           icon: <FaCss3        className={iconClass} /> },
    { name: "Tailwind CSS",  icon: <SiTailwindcss className={iconClass} /> },
    { name: "MongoDB",       icon: <SiMongodb     className={iconClass} /> },
    { name: "PostgreSQL",    icon: <DiPostgresql  className={iconClass} /> },
    { name: "AWS",           icon: <FaAws         className={iconClass} /> },
    { name: "Astro",         icon: <SiAstro       className={iconClass} /> },
    { name: "Git",           icon: <FaGitAlt      className={iconClass} /> },
  ];

  return (
    <div className='flex flex-col items-center bg-slate-950 p-4 w-full justify-center pb-[100px]'>
      <h1 className='tracking-wider text-white text-4xl lg:text-5xl font-bold mb-4 mt-12'>
        Tech Skills
      </h1>
      <div className='mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 px-4'>
        {skills.map((skill, index) => (
          <SkillIcon key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};

const SkillIcon: React.FC<Skill> = ({ name, icon }) => {
  if (!icon) {
    return (
      <div className='flex flex-col items-center'>
        <div className='w-10 h-10 rounded-md border border-purple-800 flex items-center justify-center bg-slate-900 hover:border-purple-500 transition-colors duration-300'>
          <span className='text-purple-400 text-[9px] font-bold text-center leading-tight px-1'>
            {name.split(" ")[0]}
          </span>
        </div>
        <span className='tracking-wider mt-2 text-white text-xs sm:text-sm text-center'>{name}</span>
      </div>
    );
  }
  return (
    <div className='flex flex-col items-center'>
      {icon}
      <span className='tracking-wider mt-2 text-white text-xs sm:text-sm text-center'>{name}</span>
    </div>
  );
};

export default Skills;
