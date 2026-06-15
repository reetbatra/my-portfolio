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
    <section className='bg-slate-950 w-full py-20 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32'>
      <h1 className='tracking-wider text-white text-4xl lg:text-5xl font-bold mb-12'>
        Experience
      </h1>
      <div className='flex flex-col gap-6'>
        {experiences.map((exp, i) => (
          <div
            key={i}
            className='border border-slate-800 hover:border-purple-800 transition-colors duration-300 rounded-xl p-6 sm:p-8 bg-slate-900/30'>
            <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5'>
              <div>
                <h2 className='text-purple-400 text-2xl font-bold tracking-wide'>
                  {exp.company}
                </h2>
                <p className='text-gray-400 text-sm mt-1 tracking-widest uppercase'>
                  {exp.role}
                </p>
              </div>
              <div className='flex flex-wrap gap-2'>
                {exp.tags.map((tag, j) => (
                  <span
                    key={j}
                    className='text-xs border border-purple-900 text-purple-400 px-2 py-1 rounded-md tracking-wider'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <ul className='flex flex-col gap-3'>
              {exp.highlights.map((point, j) => (
                <li
                  key={j}
                  className='flex items-start gap-3 text-gray-300 text-sm sm:text-base leading-relaxed'>
                  <span className='text-purple-500 mt-1 shrink-0'>▹</span>
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
