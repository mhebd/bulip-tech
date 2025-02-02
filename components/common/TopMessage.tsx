import Hundred from '../icons/100';
import Close from '../icons/Close';

export default function TopMessage() {
	return (
		<div className='bg-[#A6E2E2]'>
			<div className='container mx-auto flex items-center justify-between py-2'>
				<div className='flex items-center justify-between space-x-8 w-full'>
					<h2 className=''>
						<Hundred />
					</h2>
					<div className='border border-[#004464] px-1 py-1 max-w-[170px] rounded-lg'>
						<p className='text-lg leading-5 font-medium text-center text-[#014463]'>
							<span className='text-[#F15B2D]'>Scholarship</span> on all of our
							programs
						</p>
					</div>
					<p className='text-sm text-[#014463]'>
						Exclusively for the physically challenged, and third-gender
						communities!
					</p>
				</div>
				<div className='px-4 md:w-[100px]'>
					<button className=''>
						<Close />
					</button>
				</div>
			</div>
		</div>
	);
}
