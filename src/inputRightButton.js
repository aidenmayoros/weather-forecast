import { useState } from 'react';

function InputWithButtonOnRight({ updateCityData }) {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<>
			<input
				placeholder='Enter a City'
				type='text'
				id='locationInput'
				name='locationInput'
				onChange={handleChange}></input>
			<button
				type='button'
				id='locationSubmitButton'
				onClick={() => {
					updateCityData(inputValue);
				}}>
				Get the Weather
			</button>
		</>
	);
}

export default InputWithButtonOnRight;
