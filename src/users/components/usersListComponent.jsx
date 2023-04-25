import './usersList.css';
import UsersItemComponent from './usersItemComponent';

const UsersListComponent = (props) => {
	if (props.items.length === 0) {
		return (
			<div className="center">
				<h2>No users found.</h2>
			</div>
		);
	}

	return (
		<ul className="users-list">
			{props.items.map((user) => {
				return (
					<UsersItemComponent
						key={user.id}
						id={user.id}
						image={user.image}
						placeCount={user.places}
					/>
				);
			})}
		</ul>
	);
};

export default UsersListComponent;
