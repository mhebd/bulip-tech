import Hundred from '../icons/100';
import Close from '../icons/Close';

export default function TopMessage() {
	return (
		<div className='bg-[#A6E2E2]'>
			<div className='container px-4 mx-auto flex items-center justify-between py-2'>
				<div className='grid grid-cols-2 md:grid-cols-3'>
					<h2 className=''>
						<Hundred />
					</h2>
					<div className='border border-[#004464] px-1 py-1 max-w-[170px] rounded-lg'>
						<p className='text-lg leading-5 font-medium text-center text-[#014463]'>
							<span className='text-[#F15B2D]'>Scholarship</span> on all of our
							programs
						</p>
					</div>
					<p className='text-sm text-[#014463] col-span-2 md:col-span-1 mt-2 md:mt-0'>
						Exclusively for the physically challenged, and third-gender
						communities!
					</p>
				</div>
				<div className='px-2 md:px-4 md:w-[100px]'>
					<button className=''>
						<Close />
					</button>
				</div>
			</div>
		</div>
	);
}
