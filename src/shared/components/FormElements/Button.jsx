import { Link } from 'react-router-dom';

import './Button.css';

const Button = (prop) => {
	if (prop.href) {
		return (
			<a
				className={`button button--${prop.size || 'default'} ${prop.inverse && 'button--inverse'
					} ${prop.danger && 'button--danger'}`}
				href={prop.href}
			>
				{prop.children}
			</a>
		);
	}
	if (prop.to) {
		return (
			<Link
				to={prop.to}
				exact={prop.exact}
				className={`button button--${prop.size || 'default'} ${prop.inverse && 'button--inverse'
					} ${prop.danger && 'button--danger'}`}
			>
				{prop.children}
			</Link>
		);
	}
	return (
		<button
			className={`button button--${prop.size || 'default'} ${prop.inverse && 'button--inverse'
				} ${prop.danger && 'button--danger'}`}
			type={prop.type}
			onClick={prop.onClick}
			disabled={prop.disabled}
		>
			{prop.children}
		</button>
	);
};

export default Button;
