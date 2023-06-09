import { useCallback, useReducer } from 'react';
import Input from '../../shared/components/FormElements/Input';
import {
	VALIDATOR_MINLENGTH,
	VALIDATOR_REQUIRE,
} from '../../shared/utils/validators';
import './PlaceForm.css';
import Button from '../../shared/components/FormElements/Button';

const formReducer = (state, action) => {
	switch (action.type) {
		case 'INPUT_CHANGE':
			let formIsValid = true;
			for (const inputId in state.inputs) {
				if (inputId === action.inputId) {
					formIsValid = formIsValid && action.isValid;
				} else {
					formIsValid = formIsValid && state.inputs[inputId].isValid;
				}
			}

			return {
				...state,
				inputs: {
					...state.inputs,
					[action.inputId]: { value: action.value, isValid: action.isValid },
				},
				isValid: formIsValid,
			};
		default:
			return state;
	}
};

const placeSubmitHandler = (event) => {
	event.preventDefault();
};

const NewPlace = () => {
	const [formState, dispatch] = useReducer(formReducer, {
		inputs: {
			title: {
				value: '',
				isValid: false,
			},
			description: {
				value: '',
				isValid: false,
			},
		},
	});
	const inputHandler = useCallback((id, value, isValid) => {
		dispatch({
			type: 'INPUT_CHANGE',
			value: value,
			isValid: isValid,
			inputId: id,
		});
	}, []);

	return (
		<form className="place-form" onSubmit={placeSubmitHandler}>
			<Input
				id="title"
				element="input"
				type="text"
				label="Title"
				validators={[VALIDATOR_REQUIRE()]}
				errorText="Please enter a valid title"
				onInput={inputHandler}
			/>
			<Input
				id="address"
				element="input"
				type="text"
				label="Address"
				validators={[VALIDATOR_REQUIRE()]}
				errorText="Please enter an address."
				onInput={inputHandler}
			/>
			<Input
				id="description"
				element="textarea"
				label="Description"
				validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
				errorText="Please enter a description."
				onInput={inputHandler}
			/>
			<Button type="submit" disabled={!formState.isValid}>
				ADD PLACE
			</Button>
		</form>
	);
};

export default NewPlace;
