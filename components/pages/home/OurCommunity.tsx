export default function OurCommunity() {
	const stats = [
		{
			number: '3K+',
			description: 'Global partners worldwide',
		},
		{
			number: '23+',
			description: 'Countries and adding',
		},
		{
			number: '300+',
			description: 'Local training partners',
		},
	];

	return (
		<section className='bg-black py-16 px-4'>
			<div className='container mx-auto max-w-6xl'>
				<h2 className='text-4xl font-bold text-white mb-4'>
					Our community
					<div className='w-24 h-1 bg-red-500 mt-4'></div>
				</h2>

				<p className='text-gray-300 mb-12 max-w-2xl'>
					Bulipe Tech aims to train unemployed individuals in Bangladesh,
					equipping them with essential digital skills and linking them to job
					opportunities across 23 countries worldwide.
				</p>

				<div className=' bg-gradient-to-b from-black to-white rounded-lg p-[1px]'>
					<div className='grid md:grid-cols-3 bg-black rounded-lg'>
						{stats.map((stat, index) => (
							<div
								key={index}
								className={`relative border border-opacity-20 border-blue-400 p-8
                        bg-gradient-to-r from-transparent to-transparent
                        hover:bg-[rgba(0,180,216,0.05)]
                        transition-all duration-300 ${
													index === 1 && 'border-l-0 border-r-0'
												} ${index === 0 && 'rounded-s-lg '} ${
									index === 2 && 'rounded-e-lg '
								}
													`}
							>
								<div className='relative z-10'>
									<h3
										className='text-5xl font-bold text-white mb-3 
                             bg-clip-text text-transparent 
                             bg-gradient-to-r from-white to-blue-400'
									>
										{stat.number}
									</h3>
									<p className='text-gray-400'>{stat.description}</p>
								</div>
								<div className='absolute inset-0 rounded-lg bg-gradient-to-r from-[rgba(0,180,216,0.1)] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
