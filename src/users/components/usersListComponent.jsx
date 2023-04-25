import './usersList.css';
import UsersItemComponent from './usersItemComponent';

const UsersListComponent = (prop) => {
	if (prop.items.length === 0) {
		return (
			<div className="center">
				<h2>No users found.</h2>
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
