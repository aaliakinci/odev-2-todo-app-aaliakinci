import React, {useEffect } from 'react';

export default function Filter({ todo,setTodo, setFake, filterStatus, setFilterStatus }) {
 
	const filterTodo = () => {
		switch (filterStatus) {
			case 'all':
				setFake(todo);
				break;
			case 'active':
				setFake(todo.filter((x) => x.completed === false));
				break;
			case 'completed':
				setFake(todo.filter((x) => x.completed === true));
				break;
			default:
				break;
		}
	};
	const clearComplete =  () => 
	{
		 const newState = todo.filter(x=>x.completed!==true);
		 setTodo(newState);
	}
	useEffect(() => {
		filterTodo();
	}, [todo, filterStatus]);
 
	return (
		<ul className="filters">
			<li onClick={() => setFilterStatus('all')}>
				<a className="selected">All</a>
			</li>
			<li onClick={() => setFilterStatus('active')}>
				<a>Active</a>
			</li>
			<li onClick={() => setFilterStatus('completed')}>
				<a>Completed</a>
			</li>
			<li>
				<button className="clear-completed" onClick={clearComplete}>Clear completed</button>
			</li>
		</ul>
	);
}
