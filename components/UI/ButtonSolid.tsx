export default function ButtonSolid({
	label,
	rightIcon,
	color,
	textColor,
}: {
	label: string;
	rightIcon?: any;
	color?: string;
	textColor?: string;
}) {
	return (
		<button
			className={`font-medium ${
				textColor ? textColor : 'text-white'
			} flex items-center justify-between rounded-3xl ${
				color ? color : 'bg-[#F15B2D]'
			} px-5 py-2`}
		>
			<span className={`${rightIcon && 'mr-2'}`}>{label}</span>
			{rightIcon}
		</button>
	);
}
