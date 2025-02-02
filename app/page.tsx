import Header from '@/components/common/Header';
import TopMessage from '@/components/common/TopMessage';
import Image from 'next/image';

export default function Home() {
	return (
		<main>
			{/* top popup message */}
			<TopMessage />

			{/* main header / navbar section */}
			<Header />
		</main>
	);
}
