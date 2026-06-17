import React from "react";
import { FaGithub, FaLinkedinIn, FaDev, FaEnvelope } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const ContactCTA: React.FC = () => {
  return (
    <section
      className='relative w-full min-h-[60vh] flex flex-col items-start justify-center overflow-hidden px-10 sm:px-16 md:px-20 lg:px-28 xl:px-36 py-28'
      style={{
        background:
          'linear-gradient(135deg, #064e3b 0%, #0f172a 40%, #1e1b4b 70%, #2d1b69 100%)',
      }}>

      {/* Subtle grain overlay */}
      <div className='absolute inset-0 pointer-events-none opacity-20'
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")" }} />

      <div className='relative z-10 max-w-2xl'>
        {/* Section label */}
        <div className='flex items-center gap-3 mb-7'>
          <span className='w-6 h-px bg-emerald-400' />
          <span className='text-emerald-400 tracking-[0.3em] text-[10px] uppercase font-semibold'>
            Open to opportunities
          </span>
        </div>

        <h2 className='text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight'>
          Have an idea?<br />
          <span className='text-emerald-300'>Let&apos;s build</span> it together.
        </h2>

        <p className='text-gray-400 text-lg mt-6 mb-10 leading-relaxed max-w-md'>
          Open to DevRel, Developer Advocacy, and Technical Content roles across AI and Web3.
        </p>

        {/* Email CTA */}
        <a
          href='mailto:reetbatra25@gmail.com'
          className='inline-flex items-center gap-3 rounded-full bg-white hover:bg-emerald-50 text-slate-900 font-semibold px-7 py-3.5 text-base transition-all duration-300 hover:scale-105 focus:outline-none'>
          <FaEnvelope className='text-emerald-600' />
          reetbatra25@gmail.com
        </a>

        {/* Social row */}
        <div className='flex items-center gap-6 mt-10'>
          <a href='https://github.com/reetbatra' target='_blank' rel='noopener noreferrer'
            className='text-gray-400 hover:text-white transition-colors duration-200 text-xl'>
            <FaGithub />
          </a>
          <a href='https://reet.hashnode.dev/' target='_blank' rel='noopener noreferrer'
            className='text-gray-400 hover:text-white transition-colors duration-200 text-xl'>
            <FaDev />
          </a>
          <a href='https://x.com/reet_batra' target='_blank' rel='noopener noreferrer'
            className='text-gray-400 hover:text-white transition-colors duration-200 text-xl'>
            <BsTwitterX />
          </a>
          <a href='https://www.linkedin.com/in/reet-batra/' target='_blank' rel='noopener noreferrer'
            className='text-gray-400 hover:text-white transition-colors duration-200 text-xl'>
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
