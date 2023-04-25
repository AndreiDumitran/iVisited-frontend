import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import './App.css';
import User from './users/pages/usersPage';
import NewPlace from './places/pages/newPlacePage';
import MainNavigation from './shared/components/Navigation/components/MainNavigation';

const App = () => {
	return (
		<Router>
			<MainNavigation />
			<main>
				<Switch>
					<Route path="/" exact>
						<User />
					</Route>
					<Route path="/places/new" exact>
						<NewPlace />
					</Route>
					<Redirect to="/" />
				</Switch>
			</main>
		</Router>
	);
};

export default App;
