import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaDev } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Hero() {
  return (
    <div className='relative bg-slate-950 min-h-screen w-full flex flex-col justify-center items-start text-gray-200 overflow-hidden'>
      <div className='hero-orb hero-orb-1' />
      <div className='hero-orb hero-orb-2' />
      <div className='hero-orb hero-orb-3' />

      <div className='relative z-10 mx-12 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-32'>
        <p className='text-purple-400 tracking-[0.3em] text-xs uppercase font-semibold mb-5'>
          Developer Advocate
        </p>
        <h1 className='tracking-tight font-bold text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl'>
          Reet Batra
        </h1>
        <h2 className='text-lg sm:text-xl md:text-xl lg:text-2xl mt-5 font-light text-gray-400 max-w-xl leading-relaxed'>
          Building at the intersection of{' '}
          <span className='text-purple-400 font-medium'>crypto × AI</span>
        </h2>
        <div className='flex space-x-5 my-7'>
          <Link href='https://github.com/reetbatra' target='_blank' passHref>
            <span className='text-gray-400 hover:text-white transition-colors duration-200 text-xl cursor-pointer'>
              <FaGithub />
            </span>
          </Link>
          <Link href='https://reet.hashnode.dev/' target='_blank' passHref>
            <span className='text-gray-400 hover:text-white transition-colors duration-200 text-xl cursor-pointer'>
              <FaDev />
            </span>
          </Link>
          <Link href='https://x.com/reet_batra' target='_blank' passHref>
            <span className='text-gray-400 hover:text-white transition-colors duration-200 text-xl cursor-pointer'>
              <BsTwitterX />
            </span>
          </Link>
          <Link href='https://www.linkedin.com/in/reet-batra/' target='_blank' passHref>
            <span className='text-gray-400 hover:text-white transition-colors duration-200 text-xl cursor-pointer'>
              <FaLinkedinIn />
            </span>
          </Link>
        </div>
        <div className='flex flex-wrap gap-3 mt-1'>
          <a href='mailto:reetbatra25@gmail.com'>
            <button className='tracking-wider bg-purple-700 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg text-sm md:text-base transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500'>
              Hire Me
            </button>
          </a>
          <a
            href='https://drive.google.com/file/d/1bEFjh0nAX7vX5Hw9BpIM5CB05UNJFVxZ/view?usp=sharing'
            target='_blank'
            download='Reet_Batra_Resume.pdf'>
            <button className='tracking-wider border-purple-800 border-2 text-white font-medium px-6 py-3 rounded-lg text-sm md:text-base transition-all duration-300 ease-in-out hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500'>
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
