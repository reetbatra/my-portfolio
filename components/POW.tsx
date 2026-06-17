"use client";
import Link from "next/link";
import React from "react";

const POW = () => {
  return (
    <section className='py-20 bg-slate-950 w-full px-6 sm:px-12 md:px-16 lg:px-28 xl:px-36'>
      <div className='container mx-auto'>

        {/* Section label */}
        <div className='flex items-center gap-3 mb-5'>
          <span className='w-6 h-px bg-emerald-500' />
          <span className='text-emerald-400 tracking-[0.3em] text-[10px] uppercase font-semibold'>
            04 / Community
          </span>
        </div>

        <h2 className='mb-3 font-bold text-white text-4xl lg:text-5xl tracking-wider'>
          Proof Of{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-500'>
            Community
          </span>
        </h2>
        <p className='mb-12 text-gray-400 text-base max-w-xl leading-relaxed'>
          Giving back to the community that has given me strength to strive in this industry.
        </p>

        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'>

          <div className='shadow-2xl relative rounded-xl overflow-hidden'>
            <div className='h-full relative group'>
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10' />
              <div className='absolute -bottom-10 group-hover:bottom-0 left-0 w-full p-5 z-20 transition-all ease-in-out duration-500'>
                <h3 className='text-lg font-bold text-white mb-1'>
                  Exa Days by Exa Protocol
                </h3>
                <Link href='https://x.com/ExaProtocol/status/1656280478591201283' target='_blank'>
                  <p className='text-sm font-light text-emerald-300 hover:text-white transition-colors'>
                    L1 Blockchains and Decentralisation — Guest Speaker
                  </p>
                </Link>
              </div>
              <img
                src='/images/p1.jpeg'
                alt='Exa Days speaker event'
                className='w-full h-64 object-cover'
              />
            </div>
          </div>

          <div className='shadow-2xl relative rounded-xl overflow-hidden'>
            <div className='h-full relative group'>
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10' />
              <div className='absolute -bottom-10 group-hover:bottom-0 left-0 w-full p-5 z-20 transition-all ease-in-out duration-500'>
                <h3 className='text-lg font-bold text-white mb-1'>
                  Tribe Academy Workshop
                </h3>
                <Link href='https://x.com/tribeacademy_in/status/1659239504149118977' target='_blank'>
                  <p className='text-sm font-light text-emerald-300 hover:text-white transition-colors'>
                    Exploring DevRel as a career choice — Guest Speaker
                  </p>
                </Link>
              </div>
              <img
                src='/images/p2.jpeg'
                alt='Tribe Academy workshop'
                className='w-full h-64 object-cover'
              />
            </div>
          </div>

          <div className='shadow-2xl relative rounded-xl overflow-hidden'>
            <div className='h-full relative group'>
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10' />
              <div className='absolute -bottom-10 group-hover:bottom-0 left-0 w-full p-5 z-20 transition-all ease-in-out duration-500'>
                <h3 className='text-lg font-bold text-white mb-1'>
                  StarkCon Offline Meetups
                </h3>
                <Link href='https://x.com/stark_con/status/1605872741944418305' target='_blank'>
                  <p className='text-sm font-light text-emerald-300 hover:text-white transition-colors'>
                    Teaching Cairo to 4,800+ devs pan India
                  </p>
                </Link>
              </div>
              <img
                src='/images/p3.jpeg'
                alt='StarkCon meetup'
                className='w-full h-64 object-cover'
              />
            </div>
          </div>

          <div className='shadow-2xl relative rounded-xl overflow-hidden'>
            <div className='h-full relative group'>
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10' />
              <div className='absolute -bottom-10 group-hover:bottom-0 left-0 w-full p-5 z-20 transition-all ease-in-out duration-500'>
                <h3 className='text-lg font-bold text-white mb-1'>
                  StarkCon Cairo Bootcamp
                </h3>
                <Link href='https://x.com/stark_con/status/1628659312498462721' target='_blank'>
                  <p className='text-sm font-light text-emerald-300 hover:text-white transition-colors'>
                    Organised India&apos;s first Cairo bootcamp
                  </p>
                </Link>
              </div>
              <img
                src='/images/p4.png'
                alt='StarkCon Cairo bootcamp'
                className='w-full h-64 object-cover'
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default POW;
