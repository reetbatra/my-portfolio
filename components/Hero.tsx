import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaDev } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Hero() {
  return (
    <div className='hero-bg grain relative min-h-screen w-full flex flex-col justify-center items-start text-gray-200 overflow-hidden'>
      <div className='relative z-10 mx-10 sm:mx-16 md:mx-20 lg:mx-28 xl:mx-36 max-w-2xl'>

        {/* Section label */}
        <div className='flex items-center gap-3 mb-7'>
          <span className='w-6 h-px bg-emerald-500' />
          <span className='text-emerald-400 tracking-[0.3em] text-[10px] uppercase font-semibold'>
            Developer Advocate
          </span>
        </div>

        <h1 className='font-bold leading-none tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl text-white'>
          Reet<br />Batra
        </h1>

        <h2 className='mt-6 text-base sm:text-lg md:text-xl font-light text-gray-400 max-w-sm leading-relaxed'>
          Building at the intersection of{' '}
          <span className='text-emerald-400 font-medium'>crypto</span>
          {' '}×{' '}
          <span className='text-purple-400 font-medium'>AI</span>
        </h2>

        {/* Social icons */}
        <div className='flex items-center gap-5 mt-8'>
          <Link href='https://github.com/reetbatra' target='_blank' passHref>
            <span className='text-gray-500 hover:text-emerald-400 transition-colors duration-200 text-lg cursor-pointer'>
              <FaGithub />
            </span>
          </Link>
          <Link href='https://reet.hashnode.dev/' target='_blank' passHref>
            <span className='text-gray-500 hover:text-emerald-400 transition-colors duration-200 text-lg cursor-pointer'>
              <FaDev />
            </span>
          </Link>
          <Link href='https://x.com/reet_batra' target='_blank' passHref>
            <span className='text-gray-500 hover:text-emerald-400 transition-colors duration-200 text-lg cursor-pointer'>
              <BsTwitterX />
            </span>
          </Link>
          <Link href='https://www.linkedin.com/in/reet-batra/' target='_blank' passHref>
            <span className='text-gray-500 hover:text-emerald-400 transition-colors duration-200 text-lg cursor-pointer'>
              <FaLinkedinIn />
            </span>
          </Link>
        </div>

        {/* CTAs */}
        <div className='flex flex-wrap gap-3 mt-8'>
          <a href='mailto:reetbatra25@gmail.com'>
            <button className='rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-7 py-3 text-sm md:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400'>
              Hire Me
            </button>
          </a>
          <a
            href='https://drive.google.com/file/d/1bEFjh0nAX7vX5Hw9BpIM5CB05UNJFVxZ/view?usp=sharing'
            target='_blank'
            download='Reet_Batra_Resume.pdf'>
            <button className='rounded-full border border-gray-600 hover:border-emerald-500 text-gray-300 hover:text-white font-medium px-7 py-3 text-sm md:text-base transition-all duration-300 focus:outline-none'>
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
