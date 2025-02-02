import Image from 'next/image';
import Link from 'next/link';
import LogoFooter from '../icons/LogoFooter';
import LinkedIn from '../icons/LinkedIn';
import RightArrow from '../icons/RightArrow';

export default function Footer() {
	return (
		<footer>
			{/* Call to Action Section */}
			<div className='bg-[#40CBC0] py-12 px-4'>
				<div className='container mx-auto max-w-6xl'>
					<div className='grid grid-cols-1 md:grid-cols-2'>
						<h2 className='text-2xl md:text-3xl font-bold text-[#001F3F] text-center md:text-right mb-4 md:mb-0 md:mr-4 md:max-w-[300px] md:ml-auto'>
							Ready to start your career?
						</h2>
						<div className='text-center md:text-left pt-4 md:pt-0 md:pl-4 border-t-2 md:border-t-0 md:border-l-2 border-[#001F3F]'>
							<p className='text-white text-2xl font-medium mb-2'>
								We are waiting for you to contact us
							</p>
							<p className='text-lg text-white'>
								If you have any query call us at any of the following number
							</p>
							<p className='font-medium text-2xl text-[#001F3F]'>
								01825 004 976, 01804 181 257
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Main Footer Section */}
			<div className='bg-[#001F3F] text-white py-12 px-4'>
				<div className='container mx-auto max-w-6xl'>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
						{/* Company Info */}
						<div className='space-y-4'>
							<LogoFooter />
							<p className='text-sm'>
								Bulipe Tech as a visionary agent collaborates with its parent
								companies from the US and UK to bring forth a far-reaching
								Digital Skills Development project for the ever-changing
								workforce of Bangladesh.
							</p>
							<div className='flex gap-4'>
								<Link href='#' className='hover:text-[#40CBC0]'>
									<LinkedIn />
								</Link>
								<Link href='#' className='hover:text-[#40CBC0]'>
									<LinkedIn />
								</Link>
								<Link href='#' className='hover:text-[#40CBC0]'>
									<LinkedIn />
								</Link>
							</div>
						</div>

						{/* Addresses */}
						<div>
							<h3 className='text-lg font-bold mb-4'>ADDRESSES</h3>
							<div className='space-y-2 text-sm'>
								<p>Mobile: 01712 944 876</p>
								<p>info@bulipetech.com</p>
								<p>House: 14, Road: 23/1a, Block- A,</p>
								<p>Banani, Dhaka-1213</p>
								<Link
									href='#'
									className='text-[#FF4D00] hover:underline inline-flex items-center gap-2'
								>
									COUNTRY OFFICES <span>→</span>
								</Link>
							</div>
						</div>

						{/* Quick Links */}
						<div>
							<h3 className='text-lg font-bold mb-4'>QUICK LINKS</h3>
							<nav className='space-y-2'>
								{[
									'HOME',
									'ABOUT US',
									'OUR PROGRAMS',
									'CAREER & PLACEMENT',
									'CONTACT US',
									'NEWS & MEDIA',
									'PRIVACY & POLICY',
								].map((link) => (
									<Link
										key={link}
										href='#'
										className='flex items-center text-[#FF4D00] hover:underline'
									>
										<span className='mr-4'>
											<RightArrow />
										</span>{' '}
										{link}
									</Link>
								))}
							</nav>
						</div>

						{/* Get The App */}
						<div>
							<h3 className='text-lg font-bold mb-4'>GET THE APP</h3>
							<div className='space-y-2'>
								<Link href='#'>
									<Image
										src='/images/app-store.png'
										alt='Get it on Google Play'
										width={120}
										height={40}
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Copyright Section */}
			<div className='bg-gray-100 py-6 px-4'>
				<div className='container mx-auto max-w-6xl'>
					<div className='text-center text-sm text-gray-600'>
						<p>
							© 2025{' '}
							<Link href='#' className='text-[#FF4D00]'>
								Bulipe Tech Limited
							</Link>{' '}
							all rights reserved.
						</p>
						<p className='mt-2 text-xs'>
							The quick brown fox jumps over the lazy dog. The quick brown fox
							jumps over the lazy dog once upon a time. The quick brown fox
							jumps over the lazy dog. The quick brown fox jumps over the lazy
							dog once upon a time. The quick brown fox jumps over the lazy dog.
							The lazy dog once upon a time. The quick brown fox jumps over the
							lazy dog. The quick brown fox jumps over the lazy dog once upon a
							time.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
