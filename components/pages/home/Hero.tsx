import Exclemation from '@/components/icons/Exclemation';
import Face from '@/components/icons/Face';
import ButtonOutline from '@/components/UI/ButtonOutline';
import ButtonSolid from '@/components/UI/ButtonSolid';
import Image from 'next/image';

export default function Hero() {
	return (
		<section className='bg-[#004464] pt-16 pb-40 text-white'>
			<div className='container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10'>
				<div className='space-y-4 order-2 md:order-1 mt-8 md:mt-0'>
					<h5 className='text-lg uppercase'>Eleveting</h5>
					<h1 className='text-[52px] leading-[62px] font-medium'>
						IT Service Industry with Digital Skills Development
					</h1>
					<p className=''>
						Bulipe Tech as a visionary agent collaborates with its parent
						companies from the USA and UK to bring forth a far-reaching Digital
						Skills Development project for the ever-changing workforce of
						Bangladesh.
					</p>
					<div className='flex items-center space-x-4'>
						<ButtonSolid label='Enroll Now' rightIcon={<Face />} />
						<ButtonOutline label='Read More' rightIcon={<Exclemation />} />
					</div>
				</div>
				<div className='order-1 md:order-2'>
					<Image
						className='ml-auto'
						src='/images/hero.png'
						alt='hero'
						width={500}
						height={500}
					/>
				</div>
			</div>
		</section>
	);
}
