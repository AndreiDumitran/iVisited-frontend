import { useEffect, useReducer } from 'react';
import './Input.css';
import { validate } from '../../utils/validators';

const inputReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE':
			return {
				...state,
				value: action.val,
				isValid: validate(action.val, action.validators),
			};
		case 'TOUCH':
			return {
				...state,
				isTouched: true,
			};
		default: {
			return state;
		}
	}
};

const Input = (prop) => {
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: prop.value || '',
		isTouched: false,
		isValid: prop.valid || false,
	});

	const { id, onInput } = prop;
	const { value, isValid } = inputState;

	useEffect(() => {
		prop.onInput(id, value, isValid);
	}, [id, value, isValid, onInput]);

	const changeHandler = (event) => {
		dispatch({
			type: 'CHANGE',
			val: event.target.value,
			validators: prop.validators,
		});
	};

	const touchHandler = () => {
		dispatch({ type: 'TOUCH' });
	};

	const element =
		prop.element === 'input' ? (
			<input
				id={prop.id}
				type={prop.type}
				placeholder={prop.placeholder}
				onChange={changeHandler}
				onBlur={touchHandler}
				value={inputState.value}
			/>
		) : (
			<textarea
				id={prop.id}
				rows={prop.rows || 3}
				onChange={changeHandler}
				onBlur={touchHandler}
				value={inputState.value}
			></textarea>
		);

	return (
		<div
			className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'
				}`}
		>
			<label htmlFor={prop.id}>{prop.label}</label>
			{element}
			{!inputState.isValid && <p>{prop.errorText}</p>}
		</div>
	);
};

export default Input;
