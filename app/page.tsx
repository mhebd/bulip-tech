import Header from '@/components/common/Header';
import TopMessage from '@/components/common/TopMessage';
import FeaturedCards from '@/components/pages/home/FeaturedCards';
import Hero from '@/components/pages/home/Hero';
import Image from 'next/image';

export default function Home() {
	return (
		<main>
			{/* top popup message */}
			<TopMessage />

			{/* main header / navbar section */}
			<Header />

			{/* page hero section */}
			<Hero />

			{/* Featured cards section */}
			<FeaturedCards />
		</main>
	);
}
