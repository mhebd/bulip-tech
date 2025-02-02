import Link from 'next/link';
import Face from '../icons/Face';
import Logo from '../icons/Logo';
import ButtonSolid from '../UI/ButtonSolid';

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
	return (
		<header>
			<div className='bg-white'>
				<div className='container mx-auto flex items-center justify-between py-2'>
					<div className='flex items-center justify-between space-x-8 w-full'>
						<div className=''>
							<Logo />
						</div>
						<nav>
							<ul className='flex items-center justify-between space-x-8'>
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
						<div className=''>
							<ButtonSolid label='Sign Up' rightIcon={<Face />} />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
