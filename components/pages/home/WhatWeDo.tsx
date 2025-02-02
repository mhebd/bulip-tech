import Image from 'next/image';

export default function WhatWeDo() {
	return (
		<section className='bg-black min-h-screen flex flex-col items-center py-16'>
			<h1 className='text-4xl md:text-5xl font-bold text-white mb-16'>
				What We Do?
			</h1>

			<div className='container grid md:grid-cols-2 gap-8 px-4'>
				<div className='bg-[#B4EAE4] p-8 rounded-lg'>
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

					{/* <Button
						variant='default'
						className='bg-[#0A4D68] hover:bg-[#0A4D68]/90 text-white px-6'
					>
						Read More
					</Button> */}
				</div>

				<div className='relative w-full h-[400px] md:h-full min-h-[400px]'>
					<Image
						src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z1uFl7TQDWdPI9M26TukEZdTBmFvlA.png'
						alt='Technology visualization with glowing network lines'
						fill
						className='object-cover rounded-lg'
						priority
					/>
				</div>
			</div>
		</section>
	);
}
