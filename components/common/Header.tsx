import Face from '../icons/Face';
import Logo from '../icons/Logo';

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
								<li className='font-medium text-[#014463]'>
									<a href='#'>Home</a>
								</li>
								<li className='font-medium text-[#014463]'>
									<a href='#'>About</a>
								</li>
								<li className='font-medium text-[#014463]'>
									<a href='#'>Programs</a>
								</li>
								<li className='font-medium text-[#014463]'>
									<a href='#'>Contact</a>
								</li>
							</ul>
						</nav>
						<div className=''>
							<button className='font-medium text-white flex items-center justify-between w-[130px] rounded-3xl bg-[#F15B2D] px-5 py-2'>
								Sign Up
								<Face />
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
