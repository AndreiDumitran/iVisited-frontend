import './PlaceItem.css';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import { useState } from 'react';
import Modal from '../../shared/components/UIElements/Modal';

const PlaceItem = (prop) => {
	const [showMap, setShowMap] = useState(false);
	const openMapHandler = () => setShowMap(true);
	const closeMapHandler = () => setShowMap(false);

	return (
		<>
			<Modal
				show={showMap}
				onCancel={closeMapHandler}
				header={prop.address}
				contentClass="place-item__modal-content"
				footerClass="place-item__modal-actions"
				footer={<Button onClick={closeMapHandler}>X</Button>}
			>
				<div className="map-container">
					<h2>The Map</h2>
				</div>
			</Modal>
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
						<Button inverse onClick={openMapHandler}>
							View on map
						</Button>
						<Button to={`/places/${prop.id}`}>Edit</Button>
						<Button danger>Delete</Button>
					</div>
				</Card>
			</li>
		</>
	);
};

export default PlaceItem;
