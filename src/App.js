import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Add this in your component file
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

function Todo({ todo, index, completeTodo, deleteTodo }) {
	return <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className='todo'>
		{todo.text}
		<div>
			<button onClick={() => completeTodo(index)}>Complete</button>
			<button onClick={() => deleteTodo(index)}>x</button>
		</div>
	</div>;
}

function TodoForm({addTodo}) {
	const [value,setValue] = useState('');
	
	const handleSubmit = e => {
		e.preventDefault();
		if(!value) return;
		addTodo(value);
		setValue('');
	}
	
	return(
		<form onSubmit={handleSubmit}>
			<input type='text' className='input' value={value} onChange={e => setValue(e.target.value)}/>
		</form>
	)
}

function App() {
  const [todos, setTodos] = useState([
	  {
		  text: 'Learn about React',
		  isCompleted: false
	  },
	  {
		  text: 'Meet friend for lunch',
		  isCompleted: false
	  },
	  {
		  text: 'Build really cool todo app',
		  isCompleted: false
	  }
	]);
	const addTodo = text => {
		const newTodos = [...todos, {text}];
		setTodos(newTodos);
	}
	
	const completeTodo = index => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
	};
	
	const deleteTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index,1);
		setTodos(newTodos);
	}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='app'>
			<div className='todo-list'>
			{todos.map((todo, index) => (
				<Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
			))}
			<TodoForm addTodo={addTodo} />
			</div>
		</div>
      </header>
	  
		
    </div>
	
  );
}


export default App;