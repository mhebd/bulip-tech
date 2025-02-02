import Exclemation from '@/components/icons/Exclemation';
import ProgCatIcon1 from '@/components/icons/ProgCatIcon1';
import Star from '@/components/icons/Star';
import SectionHeader from '@/components/UI/SectionHeader';

const programCategories = [
	{
		id: 1,
		title: 'Digital Skills Development',
		icon: <ProgCatIcon1 />,
	},
	{
		id: 2,
		title: 'Skills Development',
		icon: <ProgCatIcon1 />,
	},
	{
		id: 3,
		title: 'All',
		icon: <ProgCatIcon1 />,
	},
];

const programs = [
	{
		id: 1,
		title: 'It support specialists',
		image: '/images/program1.png',
	},
	{
		id: 2,
		title: 'It support specialists',
		image: '/images/program1.png',
	},
	{
		id: 3,
		title: 'It support specialists',
		image: '/images/program1.png',
	},
	{
		id: 4,
		title: 'It support specialists',
		image: '/images/program1.png',
	},
	{
		id: 5,
		title: 'It support specialists',
		image: '/images/program1.png',
	},
	{
		id: 6,
		title: 'It support specialists',
		image: '/images/program1.png',
	},
];

export default function OurPrograms() {
	return (
		<section
			className='py-32'
			style={{
				backgroundImage: 'url(/images/programs-bg.png)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<div className='container mx-auto'>
				<SectionHeader title='Our Programs' />

				<div className='grid grid-cols-3 mb-10'>
					{programCategories.map((category: any) => (
						<div
							key={category.id}
							className={`flex items-center border-b-4 cursor-pointer ${
								category.id === 1
									? 'border-[#29BDBF]'
									: 'border-b border-gray-50'
							} `}
						>
							<div className='p-4'>{category.icon}</div>
							<h2 className='text-sm font-mediam text-[#242424]'>
								{category.title}
							</h2>
						</div>
					))}
				</div>
				<div className='grid grid-cols-3 gap-8'>
					{programs.map((program: any) => (
						<div
							key={program.id}
							className='bg-white rounded-xl space-y-2 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] p-4'
						>
							<div className='p-4'>
								<img src={program.image} alt={program.title} />
							</div>
							<h2 className='text-base font-mediam text-[#333333]'>
								{program.title}
							</h2>
							<div className='flex justify-between items-center'>
								<div className='flex space-x-4 items-center'>
									<div className='flex space-x-1'>
										<Star />
										<Star />
										<Star />
										<Star />
										<Star />
									</div>
									<p className='text-sm'>5.0 (255)</p>
								</div>
								<p className='text-sm font-bold text-[#242424]'>$300</p>
							</div>
							<div className='flex items-center justify-between'>
								<button className='flex text-[#F15B2D] text-sm'>
									<span className='mr-2'>More Info</span> <Exclemation />
								</button>
								<button
									className={`font-medium text-white
									flex items-center justify-between rounded-lg bg-[#F15B2D]
								 px-5 py-2`}
								>
									Enroll Now
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
