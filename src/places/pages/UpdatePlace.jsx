import { useParams } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
	VALIDATOR_MINLENGTH,
	VALIDATOR_REQUIRE,
} from '../../shared/utils/validators';

import './PlaceForm.css';
import { PLACES_DUMMY } from './UserPlaces';

const UpdatePlace = () => {
	const placeId = useParams().placeId;
	const identifiedPlace = PLACES_DUMMY.find((place) => place.id === placeId);
	if (!identifiedPlace)
		return (
			<div className="center">
				<h2>Could not find place</h2>
			</div>
		);
	return (
		<form className="place-form">
			<Input
				id="title"
				element="input"
				type="text"
				label="Title"
				validators={[VALIDATOR_REQUIRE()]}
				errorText="Enter a valid title"
				value={identifiedPlace.title}
				onInput={() => { }}
				valid={true}
			/>
			<Input
				id="address"
				element="input"
				type="text"
				label="Address"
				validators={[VALIDATOR_REQUIRE()]}
				errorText="Enter a valid address"
				value={identifiedPlace.address}
				onInput={() => { }}
				valid={true}
			/>
			<Input
				id="description"
				element="textarea"
				type="Description"
				label="Title"
				validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
				errorText="Please enter a description"
				value={identifiedPlace.description}
				onInput={() => { }}
				valid={true}
			/>
			<Button type="submit" disabled={true}>
				SAVE
			</Button>
		</form>
	);
};

export default UpdatePlace;
