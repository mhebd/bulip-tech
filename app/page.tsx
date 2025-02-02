import Header from '@/components/common/Header';
import TopMessage from '@/components/common/TopMessage';
import FeaturedCards from '@/components/pages/home/FeaturedCards';
import Hero from '@/components/pages/home/Hero';
import HowDoesItWork from '@/components/pages/home/HowDoesItWork';
import OurCommunity from '@/components/pages/home/OurCommunity';
import OurPrograms from '@/components/pages/home/OurPrograms';
import WhatWeDo from '@/components/pages/home/WhatWeDo';
import Image from 'next/image';
import Footer from '../components/common/Footer';

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

			{/* what we do section */}
			<WhatWeDo />

			{/* how does it work section */}
			<HowDoesItWork />

			{/* Our programms section */}
			<OurPrograms />

			{/* our community section */}
			<OurCommunity />

			{/* Footer section */}
			<Footer />
		</main>
	);
}
