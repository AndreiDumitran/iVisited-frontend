import './Card.css';

const Card = (prop) => {
	return (
		<div className={`card ${prop.className}`} style={prop.style}>
			{prop.children}
		</div>
	);
};

export default Card;
