import React from "react";

const experiences = [
  {
    company: "StarkWare",
    role: "Developer Relations Engineer",
    highlights: [
      "Organized India's first Cairo bootcamp — reached 4,800+ developers across 11 events",
      "Improved developer onboarding by 40% and grew ecosystem adoption by 30%",
      "Managed $21K in developer grants across ecosystem projects",
    ],
    tags: ["Cairo", "StarkNet", "Web3", "Community"],
  },
  {
    company: "DablClub",
    role: "Developer Relations",
    highlights: [
      "Led AggLayer developer adoption across the Polygon ecosystem",
      "Built and launched Dabl Learn — a cross-ecosystem developer education platform",
      "Executed cross-ecosystem DevRel strategy spanning Polygon and partner protocols",
    ],
    tags: ["Polygon", "AggLayer", "Education", "Web3"],
  },
];

const Experience: React.FC = () => {
  return (
    <section className='bg-slate-950 w-full py-20 px-6 sm:px-12 md:px-16 lg:px-28 xl:px-36'>

      {/* Section label */}
      <div className='flex items-center gap-3 mb-5'>
        <span className='w-6 h-px bg-emerald-500' />
        <span className='text-emerald-400 tracking-[0.3em] text-[10px] uppercase font-semibold'>
          01 / Experience
        </span>
      </div>

      <h1 className='tracking-tight text-white text-4xl lg:text-5xl font-bold mb-12'>
        Where I&apos;ve worked
      </h1>

      <div className='flex flex-col gap-5'>
        {experiences.map((exp, i) => (
          <div
            key={i}
            className='border border-slate-800 hover:border-emerald-900 transition-colors duration-300 rounded-2xl p-7 sm:p-9 bg-slate-900/20 group'>
            <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6'>
              <div>
                <h2 className='text-2xl font-bold tracking-wide bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent'>
                  {exp.company}
                </h2>
                <p className='text-gray-500 text-xs mt-1.5 tracking-[0.2em] uppercase'>
                  {exp.role}
                </p>
              </div>
              <div className='flex flex-wrap gap-2'>
                {exp.tags.map((tag, j) => (
                  <span
                    key={j}
                    className='text-[10px] border border-slate-700 group-hover:border-emerald-900 text-gray-400 px-2.5 py-1 rounded-full tracking-wider transition-colors duration-300'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <ul className='flex flex-col gap-3.5'>
              {exp.highlights.map((point, j) => (
                <li
                  key={j}
                  className='flex items-start gap-3 text-gray-300 text-sm sm:text-base leading-relaxed'>
                  <span className='text-emerald-500 mt-1 shrink-0 text-xs'>▹</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
