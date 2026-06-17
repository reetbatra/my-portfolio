import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className='bg-slate-950 border-t border-slate-900 w-full py-8 px-6 sm:px-12 md:px-16 lg:px-28 xl:px-36'>
      <div className='flex flex-col sm:flex-row items-center justify-between gap-2'>
        <span className='font-semibold text-sm tracking-widest text-gray-600 uppercase'>
          Reet Batra
        </span>
        <span className='text-gray-700 text-xs'>
          reetbatra25@gmail.com
        </span>
      </div>
    </footer>
  );
};

export default Footer;
