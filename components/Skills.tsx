import React from "react";
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaJava,
    FaAws,
} from "react-icons/fa";
import {
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiSolidity,
    SiMongodb,
    SiBootstrap,
    SiStoryblok,
    SiAstro,
} from "react-icons/si";
import { DiPostgresql } from "react-icons/di";

interface Skill {
    name: string;
    icon: React.ReactNode;
}

const Skills: React.FC = () => {
    const skills: Skill[] = [
        { name: "HTML", icon: <FaHtml5 className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
        { name: "CSS", icon: <FaCss3 className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
        { name: "JavaScript", icon: <FaJs className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
        { name: "TypeScript", icon: <SiTypescript className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
        { name: "Java", icon: <FaJava className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
        { name: "React", icon: <FaReact className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
        { name: "Next.js", icon: <SiNextdotjs className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
        { name: "Node.js", icon: <FaNodeJs className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
        { name: "Solidity", icon: <SiSolidity className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
        { name: "MongoDB", icon: <SiMongodb className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
        { name: "Bootstrap", icon: <SiBootstrap className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
        { name: "AWS", icon: <FaAws className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
        { name: "Storyblok", icon: <SiStoryblok className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
        { name: "Astro", icon: <SiAstro className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
        { name: "PostgreSQL", icon: <DiPostgresql className='text-white text-4xl hover:text-purple-500 transition-all duration-300 ease-in-out hover:scale-95' /> },
    ];

    return (
        <div className='flex flex-col items-center bg-slate-950 p-4 w-full justify-center pb-[100px]'>
            <h1 className='tracking-wider text-white text-4xl lg:text-5xl font-bold mb-4 mt-12'>Tech Skills</h1>
            <div className='mt-6 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4'>
                {skills.map((skill, index) => (
                    <SkillIcon
                        key={index}
                        name={skill.name}
                        icon={skill.icon}
                    />
                ))}
            </div>
        </div>
    );
};

const SkillIcon: React.FC<Skill> = ({ name, icon }) => {
    return (
        <div className='flex flex-col items-center'>
            {icon}
            <span className='tracking-wider mt-2 text-white'>{name}</span>
        </div>
    );
};

export default Skills;
