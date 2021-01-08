import React from 'react';

export default function List({ todo, setTodo, fake }) {
	const handleChange = (item) => {
		if (item.completed === false) {
			const newState = todo.filter((x) => x.id !== item.id);
			item.completed = true;
			setTodo([...newState, item]);
		}
		else if(item.completed===true)
		{
			const newState = todo.filter((x) => x.id !== item.id);
			item.completed = false;
			setTodo([item,...newState]);
		}
	};
	const removeToTodo = (item) => {
		const newState = todo.filter((x) => x.id !== item.id);
		setTodo([...newState]);
	};
	return (
		<>
			<ul className="todo-list">
				{fake.map((item, i) => (
					<li className={item.completed === true ? 'completed' : ''} key={i}>
						<div className="view" key={item.id}>
							<input
								className="toggle"
								type="checkbox"
								value={item.completed}
								onClick={() => handleChange(item)}
							/>
							<label>{item.value}</label>
							<button className="destroy" onClick={() => removeToTodo(item)}></button>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}
