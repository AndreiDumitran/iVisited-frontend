import './usersList.css';
import UsersItemComponent from './usersItemComponent';
import Card from '../../shared/components/UIElements/Card';

const UsersListComponent = (prop) => {
	if (prop.items.length === 0) {
		return (
			<div className="center">
				<Card>
					<h2>No users found.</h2>
				</Card>
			</div>
		);
	}

	return (
		<ul className="users-list">
			{prop.items.map((user) => {
				return (
					<UsersItemComponent
						key={user.id}
						id={user.id}
						name={user.name}
						image={user.image}
						placeCount={user.places}
					/>
				);
			})}
		</ul>
	);
};

export default UsersListComponent;
