import Pin1 from '@/components/icons/Pin1';
import Pin2 from '@/components/icons/Pin2';
import Pin3 from '@/components/icons/Pin3';
import SectionHeader from '@/components/UI/SectionHeader';

export default function HowItWorks() {
	const steps = [
		{
			number: '01',
			title: 'Training',
			description:
				'Our training programs, tailored to each subject matter and specialized courses, last at least 3 months and take place in our physical venues. Access to all course materials will be provided through the Bulipe App/repository, ensuring a comprehensive learning experience for all participants.',
			color: 'bg-[#1B365D]', // Navy blue
			borderColor: 'border-[#1B365D]',
			paperPin: <Pin1 />,
		},
		{
			number: '02',
			title: 'Certification',
			description:
				'Upon completion of your desired course and training, each trainee must attend a central examination at their respective geographical headquarters of Bulipe. Upon passing, trainee graduates receive industry-recognized certifications trusted by employers globally.',
			color: 'bg-[#F26B3C]', // Orange
			borderColor: 'border-[#F26B3C]',
			paperPin: <Pin2 />,
		},
		{
			number: '03',
			title: 'Employment',
			description:
				'We guarantee confirmed job prospects and a base salary of BDT 30,000 for all Bulipe trainee graduates through our vast alumni network, partnerships with 350+ global businesses across Europe, America, Asia, and Africa.',
			color: 'bg-[#40C5BA]', // Turquoise
			borderColor: 'border-[#40C5BA]',
			paperPin: <Pin3 />,
		},
	];

	return (
		<section className='py-16 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4'>
				<SectionHeader title='How does It Works' />

				<div className='grid md:grid-cols-3 gap-8'>
					{steps.map((step, index) => (
						<div key={index} className='relative'>
							{/* Content card */}
							<div className='relative bg-white rounded-[30px] px-12 max-w-[350px] shadow-[2px_2px_10px_rgba(0,0,0,0.08)]'>
								{/* Paper clip effect */}
								<div className='flex items-center justify-center'>
									<div className='-mt-7'>{step.paperPin}</div>
								</div>

								<h3 className='text-2xl font-semibold text-black text-center mb-4'>
									{step.title}
								</h3>
								<p className='text-[#848484] text-base text-center leading-[28px]'>
									{step.description}
								</p>
								<div className='flex items-center justify-center mt-12'>
									<div
										className={`w-12 h-2 ${step.color} rounded-lg -mb-1`}
									></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
