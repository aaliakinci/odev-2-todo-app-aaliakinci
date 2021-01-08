
import './App.css';
import Todo from './components/Todo';


function App() {

  return (
     <>

			<Todo/>
			<footer className="info">
					<p>Click to edit a todo</p>
					<p>
						Created by <a href="https://d12n.me/">Ali Akıncı</a>
					</p>
					<p>
						Part of <a href="http://todomvc.com">TodoMVC</a>
					</p>
				</footer>
		 </>
  );
}

export default App;
