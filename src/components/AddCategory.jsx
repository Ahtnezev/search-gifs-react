import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
	// setCategories

	const [inputValue, setinputValue] = useState('');
	const onInputChanged = ({ target }) => {
		// console.log( target.value);
		setinputValue(target.value);
	};
	const onSubmit = (event) => {
		event.preventDefault();
		if (inputValue.trim().length <= 1) return;
		// console.log(inputValue);
		// setCategories( (categories) => [ inputValue, ...categories ]);
		onNewCategory( inputValue.trim() );
		setinputValue('');
	}
	return (
		// Los atributos de html son tomadas como props
		// (event) => onSubmit(event)
		<form onSubmit={ onSubmit }>
			<input
				type="text"
				placeholder="Buscar gifs"
				value={inputValue}
				onChange={onInputChanged}
				// onChange={ (event) => { onInputChanged(event) } }
			/>
		</form>
	)
}
