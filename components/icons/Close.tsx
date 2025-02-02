export default function Close({ color }: { color?: string }) {
	return (
		<svg
			width='46'
			height='46'
			viewBox='0 0 46 46'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M13.4068 13.4289C12.6583 14.1774 12.6583 15.3909 13.4068 16.1394L20.2784 23.0109L13.4068 29.8826C12.6583 30.631 12.6583 31.8446 13.4068 32.5931C14.1553 33.3416 15.3689 33.3416 16.1174 32.5931L22.9889 25.7215L29.8605 32.5931C30.609 33.3416 31.8226 33.3416 32.5711 32.5931C33.3196 31.8446 33.3196 30.631 32.5711 29.8826L25.6995 23.0109L32.5711 16.1395C33.3196 15.391 33.3196 14.1774 32.5711 13.4289C31.8225 12.6804 30.609 12.6804 29.8605 13.4289L22.9889 20.3004L16.1174 13.4289C15.3689 12.6804 14.1553 12.6804 13.4068 13.4289Z'
				fill={color ? color : 'white'}
			/>
		</svg>
	);
}
