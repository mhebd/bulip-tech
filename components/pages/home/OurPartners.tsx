'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';

const partners = [
	{
		category: 'Technology Partners',
		logos: [
			{ name: 'IBM', image: '/placeholder.svg' },
			{ name: 'Hostinger', image: '/placeholder.svg' },
			{ name: 'DigitalOcean', image: '/placeholder.svg' },
			{ name: 'Microsoft', image: '/placeholder.svg' },
		],
	},
	{ category: 'Branding Partners', logos: [] },
	{ category: 'Training Partners', logos: [] },
	{ category: 'Banking Partners', logos: [] },
];

const testimonials = [
	{
		id: 1,
		name: 'Asharaful Islam',
		role: 'SEO Specialist',
		content:
			'I was skeptical about learning Website Development and SEO as a beginner, but Bulipe Tech made it so easy. The trainers are knowledgeable, and the materials are straightforward.',
		avatar: '/placeholder.svg',
	},
	{
		id: 2,
		name: 'Asharaful Islam',
		role: 'SEO Specialist',
		content:
			'I was skeptical about learning Website Development and SEO as a beginner, but Bulipe Tech made it so easy. The trainers are knowledgeable, and the materials are straightforward.',
		avatar: '/placeholder.svg',
	},
];

export default function PartnersAndTestimonials() {
	const [activePartnerCategory, setActivePartnerCategory] = useState(
		'Technology Partners'
	);
	const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

	const handlePrevTestimonial = useCallback(() => {
		setCurrentTestimonialIndex((prev) =>
			prev === 0 ? testimonials.length - 1 : prev - 1
		);
	}, []);

	const handleNextTestimonial = useCallback(() => {
		setCurrentTestimonialIndex((prev) =>
			prev === testimonials.length - 1 ? 0 : prev + 1
		);
	}, []);

	return (
		<div className='w-full max-w-7xl mx-auto px-4 py-16 space-y-24'>
			{/* Partners Section */}
			<section>
				<div className='flex justify-between items-center mb-8'>
					<h2 className='text-3xl font-bold'>Our Partners</h2>
					<div className='flex gap-2'>
						<button
							className='w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors'
							aria-label='Previous partners'
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
							className='w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors'
							aria-label='Next partners'
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

				<div className='flex flex-wrap gap-4 mb-8'>
					{partners.map((category) => (
						<button
							key={category.category}
							onClick={() => setActivePartnerCategory(category.category)}
							className={`px-4 py-2 rounded-md transition-colors ${
								activePartnerCategory === category.category
									? 'bg-[#00D1FF] text-white'
									: 'text-gray-500 hover:bg-gray-100'
							}`}
						>
							{category.category}
						</button>
					))}
				</div>

				<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
					{partners
						.find((p) => p.category === activePartnerCategory)
						?.logos.map((logo, index) => (
							<div
								key={logo.name}
								className='bg-[#B4EAE4] rounded-lg p-6 flex items-center justify-center h-24'
							>
								<Image
									src={logo.image || '/placeholder.svg'}
									alt={logo.name}
									width={120}
									height={40}
									className='object-contain'
								/>
							</div>
						))}
				</div>
			</section>

			{/* Testimonials Section */}
			<section>
				<div className='flex justify-between items-center mb-8'>
					<h2 className='text-3xl font-bold'>Testimonials</h2>
					<div className='flex gap-2'>
						<button
							onClick={handlePrevTestimonial}
							className='w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors'
							aria-label='Previous testimonial'
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
							onClick={handleNextTestimonial}
							className='w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors'
							aria-label='Next testimonial'
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

				<div className='grid md:grid-cols-2 gap-6'>
					{[testimonials[currentTestimonialIndex]].map((testimonial) => (
						<div
							key={testimonial.id}
							className='p-6 rounded-lg border border-gray-200 shadow-sm transition-opacity duration-300'
						>
							<div className='flex items-center gap-4 mb-4'>
								<Image
									src={testimonial.avatar || '/placeholder.svg'}
									alt={testimonial.name}
									width={48}
									height={48}
									className='rounded-full'
								/>
								<div>
									<h3 className='font-semibold'>{testimonial.name}</h3>
									<p className='text-sm text-gray-500'>{testimonial.role}</p>
								</div>
							</div>
							<p className='text-gray-600'>{testimonial.content}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
