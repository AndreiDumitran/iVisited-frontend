import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import './App.css';
import User from './users/pages/Users';
import UserPlaces from './places/pages/UserPlaces';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/components/MainNavigation';
import UpdatePlace from './places/pages/UpdatePlace';

const App = () => {
	return (
		<Router>
			<MainNavigation />
			<main>
				<Switch>
					<Route path="/" exact>
						<User />
					</Route>
					<Route path="/:userId/places" exact>
						<UserPlaces />
					</Route>
					<Route path="/places/new" exact>
						<NewPlace />
					</Route>
					<Route path="/places/:placeId">
						<UpdatePlace />
					</Route>
					<Redirect to="/" />
				</Switch>
			</main>
		</Router>
	);
};

export default App;
