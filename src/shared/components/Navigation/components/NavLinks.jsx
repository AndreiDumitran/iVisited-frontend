import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import './NavLinks.css';

const NavLinks = (prop) => {
	return (
		<ul className="nav-links">
			<NavLink to="/" exact>
				All Users
			</NavLink>
			<NavLink to="/u1/places">My Places</NavLink>
			<NavLink to="/places/new">Add Place</NavLink>
			<NavLink to="/auth">Authenticate</NavLink>
		</ul>
	);
};

export default NavLinks;
