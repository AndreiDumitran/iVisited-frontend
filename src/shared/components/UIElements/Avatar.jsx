import './Avatar.css';

const Avatar = (prop) => {
	return (
		<div className={`avatar ${prop.className}`} style={prop.style}>
			<img
				src={prop.image}
				alt={prop.alt}
				style={{ width: prop.width, height: prop.width }}
			/>
		</div>
	);
};

export default Avatar;
