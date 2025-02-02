'use client';

import Image from 'next/image';
import { useState } from 'react';

const featuredArticles = [
	{
		id: 1,
		category: 'Technology',
		title:
			"Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10 with no penalty",
		excerpt:
			'It is a long established fact that a reader will be distracted by the readable content of a page.',
		image: '/images/news.png',
	},
	{
		id: 2,
		category: 'Technology',
		title:
			"Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10 with no penalty",
		excerpt:
			'It is a long established fact that a reader will be distracted by the readable content of a page.',
		image: '/images/news.png',
	},
	{
		id: 3,
		category: 'Technology',
		title:
			"Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10 with no penalty",
		excerpt:
			'It is a long established fact that a reader will be distracted by the readable content of a page.',
		image: '/images/news.png',
	},
];

export default function LatestNews() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % featuredArticles.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) =>
			prev === 0 ? featuredArticles.length - 1 : prev - 1
		);
	};

	return (
		<section className='max-w-7xl mx-auto px-4 py-16'>
			{/* Latest News Header */}
			<div className='mb-8'>
				<h2 className='text-3xl font-bold relative inline-block'>
					Latest News
					<span className='absolute -bottom-2 left-0 w-12 h-1 bg-[#FF6B6B]'></span>
				</h2>
			</div>

			{/* Main Featured Article */}
			<div className='grid md:grid-cols-2 gap-6 mb-16 bg-gray-50 rounded-lg overflow-hidden'>
				<div className='relative h-[300px] md:h-full'>
					<Image
						src='/images/news.png'
						alt='Featured article image'
						fill
						className='object-cover'
					/>
				</div>
				<div className='p-6 flex flex-col justify-center'>
					<span className='text-sm text-gray-600 mb-2'>Current Events</span>
					<h3 className='text-xl font-semibold mb-4'>
						Judge upholds Donald Trump's conviction, sets sentencing for Jan. 10
						with no penalty
					</h3>
					<p className='text-gray-600 mb-4'>
						It is a long established fact that a reader will be distracted by
						the readable content of a page. When looking at its layout, it has a
						more-or-less normal distribution of letters, as opposed to using
						Content here, content here, making it look like readable English.
					</p>
					<button className='self-start px-4 py-2 text-[#FF6B6B] flex items-center gap-2 hover:gap-3 transition-all'>
						Read More
						<svg
							width='16'
							height='16'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
						>
							<path d='M5 12h14M12 5l7 7-7 7' />
						</svg>
					</button>
				</div>
			</div>

			{/* Featured News Section */}
			<div className='space-y-6'>
				<div className='flex justify-between items-center'>
					<h3 className='text-xl font-semibold'>Featured news</h3>
					<div className='flex gap-2'>
						<button
							onClick={prevSlide}
							className='w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50'
						>
							<svg
								width='16'
								height='16'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
							>
								<path d='M15 18l-6-6 6-6' />
							</svg>
						</button>
						<button
							onClick={nextSlide}
							className='w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50'
						>
							<svg
								width='16'
								height='16'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
							>
								<path d='M9 18l6-6-6-6' />
							</svg>
						</button>
					</div>
				</div>

				<div className='grid md:grid-cols-3 gap-6'>
					{featuredArticles.map((article, index) => (
						<article
							key={article.id}
							className={`bg-white rounded-lg overflow-hidden shadow-sm transition-opacity duration-300 ${
								index === currentIndex ? 'opacity-100' : 'opacity-50'
							}`}
						>
							<div className='relative h-48'>
								<Image
									src={article.image || '/placeholder.svg'}
									alt={article.title}
									fill
									className='object-cover'
								/>
							</div>
							<div className='p-4'>
								<span className='text-sm text-gray-600 mb-2 block'>
									{article.category}
								</span>
								<h4 className='font-semibold mb-2 line-clamp-2'>
									{article.title}
								</h4>
								<p className='text-gray-600 text-sm mb-4 line-clamp-2'>
									{article.excerpt}
								</p>
								<button className='text-[#FF6B6B] flex items-center gap-2 hover:gap-3 transition-all text-sm'>
									Read More
									<svg
										width='16'
										height='16'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
									>
										<path d='M5 12h14M12 5l7 7-7 7' />
									</svg>
								</button>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
