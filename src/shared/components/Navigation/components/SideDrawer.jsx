import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './SideDrawer.css';

const SideDrawer = (prop) => {
	const content = (
		<CSSTransition
			in={prop.show}
			timeout={200}
			classNames="slide-in-left"
			mountOnEnter
			unmountOnExit
		>
			<aside className="side-drawer" onClick={prop.onClick}>
				{prop.children}
			</aside>
		</CSSTransition>
	);
	return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
