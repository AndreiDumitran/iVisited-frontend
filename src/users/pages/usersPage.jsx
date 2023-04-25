import UsersListComponent from '../components/usersListComponent';

const Users = () => {
	const USERS = [
		{
			name: 'Test User1',
			id: 'u1',
			image:
				'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg',
			places: 3,
		},
	];

	return <UsersListComponent items={USERS} />;
};

export default Users;
