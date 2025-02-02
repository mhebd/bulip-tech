export default function SectionHeader({ title }: { title: string }) {
	return (
		<div className='text-center mb-16'>
			<h2 className='text-[32px] font-bold text-gray-900'>{title}</h2>
			<div className='w-24 h-0.5 bg-red-500 mx-auto mt-4'></div>
		</div>
	);
}
