import React from 'react';

export default function CheckBox({todo,setTodo}) {
 

	const allDuty = () => 
	{
		const newState= []
	  todo.forEach(element => {
			element.completed=true
			 newState.push(element);
		});
		setTodo(newState);
	}


	return (
		<>
			<input className="toggle-all" type="checkbox" />
			<label htmlFor="toggle-all" onClick={()=>allDuty()}>Mark all as complete</label>
		</>
	);
}
