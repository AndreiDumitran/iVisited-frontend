import { useParams } from 'react-router-dom/cjs/react-router-dom';
import PlaceList from '../components/PlaceList';

export const PLACES_DUMMY = [
	{
		id: 'p1',
		title: 'Empire State Building',
		description: 'One of the most famous skyscrapper',
		imageUrl:
			'https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		address: '20 W 34th St., New York, NY 10001, United States',
		location: {
			lat: 40.7484445,
			lng: -73.9878531,
		},
		creator: 'u1',
	},
	{
		id: 'p2',
		title: 'Empire State Building',
		description: 'One of the most famous skyscrapper',
		imageUrl:
			'https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		address: '20 W 34th St., New York, NY 10001, United States',
		location: {
			lat: 40.7484445,
			lng: -73.9878531,
		},
		creator: 'u2',
	},
];

const UserPlaces = () => {
	const userId = useParams().userId;
	const loadedPlaces = PLACES_DUMMY.filter((place) => place.creator === userId);
	return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
