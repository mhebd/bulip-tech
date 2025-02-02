import Featured2 from '@/components/icons/Featured2';
import Featured1 from '../../icons/Featured1';
import Featured3 from '@/components/icons/Featured3';

interface Card {
	id: number;
	title: string;
	description: string;
	image: any;
}

const featuredCards = [
	{
		id: 1,
		title: 'Master In-Demand Digital Skills to Advance Your Career',
		description:
			'Master In-Demand Digital Skills to Advance Your Career Unlock career opportunities through our industry-recognized Digital Skill Development program. Begin your journey today with 300 local partners to stay ahead of the curve!',
		image: <Featured1 />,
	},
	{
		id: 2,
		title: 'Master In-Demand Digital Skills to Advance Your Career',
		description:
			'Master In-Demand Digital Skills to Advance Your Career Unlock career opportunities through our industry-recognized Digital Skill Development program. Begin your journey today with 300 local partners to stay ahead of the curve!',
		image: <Featured2 />,
	},
	{
		id: 3,
		title: 'Master In-Demand Digital Skills to Advance Your Career',
		description:
			'Master In-Demand Digital Skills to Advance Your Career Unlock career opportunities through our industry-recognized Digital Skill Development program. Begin your journey today with 300 local partners to stay ahead of the curve!',
		image: <Featured3 />,
	},
];

export default function FeaturedCards() {
	return (
		<section className='-mt-[70px] lg:-mt-[100px]'>
			<div className='container px-4 mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5'>
					{featuredCards.map((card: Card) => (
						<Card key={card.id} data={card} />
					))}
				</div>
			</div>
		</section>
	);
}

function Card({ data }: { data: Card }) {
	return (
		<div className='bg-white px-10 rounded-[30px] shadow-[0px_0px_40px_0_rgba(0,0,0,0.1)] lg:shadow-xl pb-10 mb-16'>
			<div className='w-[150px] h-[150px] mx-auto rounded-full p-2 bg-[#004464] -mt-[60px]'>
				<div className='border-2 border-white rounded-full w-full h-full flex items-center justify-center'>
					{data.image}
				</div>
			</div>
			<h1 className='text-xl font-medium text-[#242424] my-6'>{data.title}</h1>
			<p className='text-[#848484]'>{data.description}</p>
		</div>
	);
}
