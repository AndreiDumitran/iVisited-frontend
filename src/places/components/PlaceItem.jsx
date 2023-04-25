import './PlaceItem.css';
import Card from '../../shared/components/UIElements/Card';

const PlaceItem = (prop) => {
	return (
		<li className="place-item">
			<Card className="place-item__content">
				<div className="place-item__image">
					<img src={prop.image} alt={prop.name} />
				</div>
				<div className="place-item__info">
					<h2>{prop.title}</h2>
					<h3>{prop.address}</h3>
					<p>{prop.description}</p>
				</div>
				<div className="place-item__actions">
					<button>View on map</button>
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</Card>
		</li>
	);
};

export default PlaceItem;
