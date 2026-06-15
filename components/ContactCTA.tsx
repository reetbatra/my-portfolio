import React from "react";

const ContactCTA: React.FC = () => {
  return (
    <section className='bg-slate-950 w-full py-28 flex flex-col items-center justify-center text-center border-t border-slate-800 px-6'>
      <p className='text-purple-400 tracking-[0.3em] text-xs uppercase font-semibold mb-4'>
        Open to opportunities
      </p>
      <h2 className='text-white text-4xl lg:text-5xl font-bold mb-4 max-w-2xl leading-tight'>
        Let&apos;s build something great together
      </h2>
      <p className='text-gray-400 text-lg mb-10 max-w-lg leading-relaxed'>
        Looking for DevRel, Developer Advocacy, and Technical Content roles across AI and Web3.
      </p>
      <a href='mailto:reetbatra25@gmail.com'>
        <button className='tracking-wider bg-purple-700 hover:bg-purple-600 text-white font-semibold px-8 py-4 rounded-lg text-base transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500'>
          Hire Me →
        </button>
      </a>
    </section>
  );
};

export default ContactCTA;
