export default function ButtonOutline({
	label,
	rightIcon,
}: {
	label: string;
	rightIcon?: any;
}) {
	return (
		<button className='font-medium text-[#F15B2D] flex items-center justify-between rounded-3xl border border-[#F15B2D] px-5 py-2'>
			<span className={`${rightIcon && 'mr-2'}`}>{label}</span>
			{rightIcon}
		</button>
	);
}
