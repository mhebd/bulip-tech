import ArrowRight from '@/components/icons/ArrowRight';
import ButtonSolid from '@/components/UI/ButtonSolid';
import SectionHeader from '@/components/UI/SectionHeader';
import Image from 'next/image';

export default function WhatWeDo() {
	return (
		<section className='bg-white flex flex-col items-center py-16'>
			<SectionHeader title='What We Do' />

			<div className='container grid md:grid-cols-2 lg:grid-cols-3 px-4'>
				<div className='bg-[#B4EAE4] p-10 col-span-1'>
					<h2 className='text-2xl font-bold text-gray-800 mb-4'>
						Bulipe Tech is a dynamic and innovative company
					</h2>

					<p className='text-gray-700 mb-8'>
						We empower individuals to unlock career opportunities through our
						proven Digital Skill Development program. Partnering with 300 local
						organisations and 3,000+ global partners in 21 countries, we provide
						access to top U.S. certifications and salary-based employment
						starting at $250, with the potential to exceed $3,000 through
						continuous up-skilling.
					</p>

					<ButtonSolid
						label='Read More'
						rightIcon={<ArrowRight />}
						color='bg-[#0A4D68]'
						textColor='text-white'
					/>
				</div>

				<div className='relative w-full h-[400px] md:h-full min-h-[400px] col-span-2'>
					<Image
						src='/images/what-we-do.png'
						alt='Technology visualization with glowing network lines'
						fill
						className='object-cover'
						priority
					/>
				</div>
			</div>
		</section>
	);
}
