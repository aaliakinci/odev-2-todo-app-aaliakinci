import React, {useEffect} from 'react';

export default function Filter({ todo,setTodo, setFake, filterStatus, setFilterStatus }) {
	
	const clearComplete =  () => 
	{
		 const newState = todo.filter(x=>x.completed!==true);
		 setTodo(newState);
	}
	useEffect(() => {
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
	 	filterTodo();
	}, [todo, filterStatus,setFake]);
 
	return (
		<ul className="filters">
			<li onClick={() => setFilterStatus('all')} style={{marginRight:'5px'}}>
				 All 
			</li>
			<li onClick={() => setFilterStatus('active')} style={{marginRight:'5px'}}>
				 Active 
			</li>
			<li onClick={() => setFilterStatus('completed')} style={{marginRight:'5px'}}>
				 Completed 
			</li>
			<li>
				<button className="clear-completed" onClick={clearComplete}>Clear completed</button>
			</li>
		</ul>
	);
}
