import React,{useState} from 'react';
import Filter from './Filter';
import Form from './Form';
import List from './List';
import AllCheck from './AllCheck'
export default function Todo() {
	const [todo, setTodo] = useState([]);
	const [fake,setFake] = useState([]);
	const [filterStatus,setFilterStatus] =useState('all');
	return (
		<section className="todoapp">
			<header className="header">
				<h1>todos</h1>
				<Form todo={todo} setTodo={setTodo}/>
			</header>
			<section className="main">
					<AllCheck todo={todo} setTodo={setTodo}/>
					<List todo={todo} setTodo={setTodo} fake={fake}/>
				</section>
				<footer className="footer">
					{todo.length>0?<span className="todo-count">
						<strong>{todo.length}</strong>
						duty left
					</span>:<span className="todo-count">No duty</span>}
			<Filter todo={todo} setTodo={setTodo} setFake={setFake} filterStatus={filterStatus} setFilterStatus={setFilterStatus}/>
			</footer>
		</section>
	);
}
