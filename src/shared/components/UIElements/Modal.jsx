import './Modal.css';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Backdrop from './Backdrop';

const ModalOverlay = (prop) => {
	const content = (
		<div className={`modal ${prop.className}`} style={prop.style}>
			<header className={`modal__header ${prop.headerClass}`}>
				<h2>{prop.header}</h2>
			</header>
			<form
				onSubmit={
					prop.onSubmit ? prop.onSubmit : (event) => event.preventDefault()
				}
			>
				<div className={`modal__content ${prop.contentClass}`}>
					{prop.children}
				</div>
				<footer className={`modal__footer ${prop.footerClass}`}>
					{prop.footer}
				</footer>
			</form>
		</div>
	);

	return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (prop) => {
	return (
		<>
			{prop.show && <Backdrop onClick={prop.onCancel} />}
			<CSSTransition
				in={prop.show}
				mountOnEnter
				unmountOnExit
				timeout={200}
				classNames="modal"
			>
				<ModalOverlay {...prop} />
			</CSSTransition>
		</>
	);
};

export default Modal;
