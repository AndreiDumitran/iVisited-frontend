import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import './PlaceList.css';

const PlaceList = (prop) => {
	if (prop.items.length === 0)
		return (
			<div className="place-list center">
				<Card>
					<h2>No places found.</h2>
					<button>Share Place</button>
				</Card>
			</div>
		);

	return (
		<ul className="place-list">
			{prop.items.map((place) => (
				<PlaceItem
					key={place.id}
					image={place.imageUrl}
					title={place.title}
					description={place.description}
					address={place.address}
					creatorId={place.creator}
					coordinates={place.location}
				/>
			))}
		</ul>
	);
};

export default PlaceList;
