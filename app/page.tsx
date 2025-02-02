import Header from '@/components/common/Header';
import TopMessage from '@/components/common/TopMessage';
import FeaturedCards from '@/components/pages/home/FeaturedCards';
import Hero from '@/components/pages/home/Hero';
import HowDoesItWork from '@/components/pages/home/HowDoesItWork';
import OurCommunity from '@/components/pages/home/OurCommunity';
import WhatWeDo from '@/components/pages/home/WhatWeDo';
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

			{/* what we do section */}
			<WhatWeDo />

			{/* how does it work section */}
			<HowDoesItWork />

			{/* our community section */}
			<OurCommunity />
		</main>
	);
}
