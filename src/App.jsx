import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import './App.css';
import User from './users/pages/usersPage';
import NewPlace from './places/pages/newPlacePage';

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact>
						<User />
					</Route>
					<Route path="/places/new" exact>
						<NewPlace />
					</Route>
					<Redirect to="/" />
				</Switch>
			</Router>
		</>
	);
};

export default App;
