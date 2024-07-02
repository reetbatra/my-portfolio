"use client";
import Link from "next/link";
import React from "react";

const POW = () => {
	return (
		<section className='py-10 bg-w sm:py-16 lg:py-24 z-40 relative mx-8 lg:mx-2 mb-8'>
			<div className='container mx-auto'>
				<h2 className=' mb-6 font-bold   text-black text-5xl'>
					Proof Of{" "}
					<span className='block w-full  text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 lg:inline'>
						Community
					</span>
				</h2>
				<p className='mb-12 text-lg text-gray-900'>
					Giving back to the community that has given me strength to
					strive in this industry.
				</p>
				<div className='grid grid-cols-1 gap-6   lg:grid-cols-4 '>
					<p className='shadow-2xl relative'>
						<div className='h-full relative rounded-lg overflow-hidden shadow-slate-700 group'>
							<div className='absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-purple-700 transition-all ease-in-out duration-500'>
								<div className='w-full h-4/5 p-5 relative'>
									<div className='absolute bottom-0 group-hover:bottom-10 text-white text-left transition-all ease-in-out duration-500'>
										<h2 className='text-2xl font-bold text-white mb-0 pb-1'>
											Exa Days by Exa Protocol
										</h2>
										<Link
											href='https://x.com/ExaProtocol/status/1656280478591201283'>
										<p className='text-lg font-light text-white mr-6 font-underline'>
											L1 Blockchains and Decentralisation - Guest Speaker
										</p>
										</Link>
									</div>
								</div>
							</div>
							<img
								src='/images/p1.jpeg'
								className='w-full z-0 h-full object-fill example'
							/>
						</div>
					</p>
					<p className='shadow-2xl relative'>
						<div className='h-full relative rounded-lg overflow-hidden shadow-slate-700 group'>
							<div className='absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-purple-700 transition-all ease-in-out duration-500'>
								<div className='w-full h-4/5 p-5 relative'>
									<div className='absolute bottom-0 group-hover:bottom-10 text-white text-left transition-all ease-in-out duration-500'>
										<h2 className='text-2xl font-bold text-white mt-6 mb-0 pb-1'>
											Tribe Academy Workshop
										</h2>
										<Link
										href='https://x.com/tribeacademy_in/status/1659239504149118977'>
											<p className='text-lg font-light text-white mr-6'>
											Exploring DevRel as a career choice- Guest Speaker
										</p>
										</Link>	
									</div>
								</div>
							</div>
							<img
								src='/images/p2.jpeg'
								className='w-full z-0 h-full object-fill example'
							/>
						</div>
					</p>
					<p className='shadow-2xl relative'>
						<div className='h-full relative rounded-lg overflow-hidden shadow-slate-700 group'>
							<div className='absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-purple-700 transition-all ease-in-out duration-500'>
								<div className='w-full h-4/5 p-5 relative'>
									<div className='absolute bottom-0 group-hover:bottom-10 text-white text-left transition-all ease-in-out duration-500'>
										<h2 className='text-2xl font-bold text-white mb-0 pb-1'>
											StarkCon offline meetups
										</h2>
										<Link
										href="https://x.com/stark_con/status/1605872741944418305">
										<p className='text-lg font-light text-white mr-6'>
											Had a pleasure teaching Cairo to 4800+ devs pan Inida
										</p>
										</Link>
										
									</div>
								</div>
							</div>
							<img
								src='/images/p3.jpeg'
								className='w-full z-0 h-full object-fill example'
							/>
						</div>
					</p>
					<p className='shadow-2xl relative'>
						<div className='h-full relative rounded-lg overflow-hidden shadow-slate-700 group'>
							<div className='absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-purple-700 transition-all ease-in-out duration-500'>
								<div className='w-full h-4/5 p-5 relative'>
									<div className='absolute bottom-0 group-hover:bottom-10 text-white text-left transition-all ease-in-out duration-500'>
										<h2 className='text-2xl font-bold text-white mb-0 pb-1'>
											StarkCon Cairo Bootcamp
										</h2>
										<Link
										href="https://x.com/stark_con/status/1628659312498462721">
										<p className='text-lg font-light text-white mr-6'>
											Organised Inida&apos;s first Cairo bootcamp
										</p>
										</Link>	
									</div>
								</div>
							</div>
							<img
								src='/images/p4.png'
								className='w-full z-0 h-full object-fill example'
							/>
						</div>
					</p>
				
				</div>
			</div>
		</section>
	);
};

export default POW;
