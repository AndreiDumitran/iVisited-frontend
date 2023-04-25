import { Link } from 'react-router-dom';

import Card from '../../shared/components/UIElements/Card';
import Avatar from '../../shared/components/UIElements/Avatar';

import './usersItem.css';

const UsersItemComponent = (prop) => {
	return (
		<li className="user-item">
			<Card className="user-item__content">
				<Link to={`/${prop.id}/places`}>
					<div className="user-item__image">
						<Avatar image={prop.image} alt={prop.name} />
					</div>
					<div className="user-item__info">
						<h2>{prop.name}</h2>
						<h3>
							{prop.placeCount} {prop.placeCount === 1 ? 'Place' : 'Places'}
						</h3>
					</div>
				</Link>
			</Card>
		</li>
	);
};

export default UsersItemComponent;
