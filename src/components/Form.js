import React, { useState } from 'react';

export default function Form({ todo, setTodo }) {
	const [inputText, setInputText] = useState();

	const handleChange = (e) => {
		const inputTextValue = e.target.value;
		setInputText(inputTextValue);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setTodo([...todo, { id:Math.round((Math.random()*1000)), value: inputText,completed:false}]);
		setInputText(' ');
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<input className="new-todo" placeholder="What needs to be done?" value={inputText} onChange={handleChange} />
		</form>
	);
}
