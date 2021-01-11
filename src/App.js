
import './App.css';
import Todo from './components/Todo';


function App() {

  return (
     <>

			<Todo/>
			<footer className="info">
					<p>Click to edit a todo</p>
					<p>
						Created by Ali Akıncı
					</p>
					<p>
						Part of TodoMVC
					</p>
				</footer>
		 </>
  );
}

export default App;
