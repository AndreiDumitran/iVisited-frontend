import { Link } from 'react-router-dom';
import { useState } from 'react';
import MainHeader from './MainHeader';

import './MainNavigation.css';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../../UIElements/Backdrop';

const MainNavigation = (prop) => {
	const [drawerIsOpen, setDrawerIsOpen] = useState(false);

	const openDrawerHandler = () => {
		setDrawerIsOpen(true);
	};

	const closeDrawerHandler = () => {
		setDrawerIsOpen(false);
	};

	return (
		<>
			{drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
			<SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
				<nav className="main-navigation__drawer-nav">
					<NavLinks />
				</nav>
			</SideDrawer>
			<MainHeader>
				<button
					className="main-navigation__menu-btn"
					onClick={openDrawerHandler}
				>
					<span />
					<span />
					<span />
				</button>
				<h1 className="main-navigation__title">
					<Link to="/">Your Places</Link>
				</h1>
				<nav className="main-navigation__header-nav">
					<NavLinks />
				</nav>
			</MainHeader>
		</>
	);
};

export default MainNavigation;