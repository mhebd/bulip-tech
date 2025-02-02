'use client';

import Link from 'next/link';
import Face from '../icons/Face';
import Logo from '../icons/Logo';
import ButtonSolid from '../UI/ButtonSolid';
import Close from '../icons/Close';
import { useState } from 'react';

const pages = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'About Us',
		href: '#',
	},
	{
		label: 'programs',
		href: '#',
	},
	{
		label: 'Locations',
		href: '#',
	},
	{
		label: 'Career & Placement',
		href: '#',
	},
	{
		label: 'Contact Us',
		href: '#',
	},
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header>
			<div className='bg-white'>
				<div className='container px-4 mx-auto flex items-center justify-between py-4'>
					<div className='flex items-center justify-between space-x-8 w-full'>
						<div className=''>
							<Logo />
						</div>
						{/* main navigation */}
						<nav className='hidden lg:block'>
							<ul className='flex items-center justify-between space-x-4 xl:space-x-8'>
								{pages.map((page) => (
									<li key={page.label}>
										<Link
											href={page.href}
											className={`font-medium capitalize ${
												page.href === '/' ? 'text-[#0786C0]' : 'text-[#004464]'
											} hover:text-[#0786C0] transition duration-300 ease-in-out`}
										>
											{page.label}
										</Link>
									</li>
								))}
							</ul>
						</nav>

						{/* Mobile navigation */}
						<div
							className={`lg:hidden absolute top-0 right-0 p-5 w-full max-w-[300px] h-full bg-white z-50 ${
								isOpen ? 'translate-x-0' : 'translate-x-full'
							} transition duration-300 ease-in-out`}
						>
							<div className=''>
								<div className='flex items-center justify-between mb-10'>
									<Logo />
									<button onClick={() => setIsOpen(false)} className=''>
										<Close color={'#004464'} />
									</button>
								</div>
								<nav>
									<ul className='flex flex-col justify-between space-y-4'>
										{pages.map((page) => (
											<li key={page.label}>
												<Link
													href={page.href}
													className={`font-medium capitalize ${
														page.href === '/'
															? 'text-[#0786C0]'
															: 'text-[#004464]'
													} hover:text-[#0786C0] transition duration-300 ease-in-out`}
												>
													{page.label}
												</Link>
											</li>
										))}
									</ul>
								</nav>
							</div>
						</div>
						<div className='flex items-center'>
							<ButtonSolid label='Sign Up' rightIcon={<Face />} />
							<button
								className='lg:hidden ml-4'
								onClick={() => setIsOpen(true)}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='32'
									height='32'
									fill='currentColor'
									viewBox='0 0 16 16'
									className='text-[#004464]'
								>
									<path
										fillRule='evenodd'
										d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5'
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
