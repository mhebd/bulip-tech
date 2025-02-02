export default function ButtonSolid({
	label,
	rightIcon,
}: {
	label: string;
	rightIcon?: any;
}) {
	return (
		<button className='font-medium text-white flex items-center justify-between rounded-3xl bg-[#F15B2D] px-5 py-2'>
			<span className={`${rightIcon && 'mr-2'}`}>{label}</span>
			{rightIcon}
		</button>
	);
}
