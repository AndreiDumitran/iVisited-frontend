import ReactDOM from 'react-dom';

import './Backdrop.css';

const Backdrop = (prop) => {
	return ReactDOM.createPortal(
		<div className="backdrop" onClick={prop.onClick}></div>,
		document.getElementById('backdrop-hook')
	);
};

export default Backdrop;
