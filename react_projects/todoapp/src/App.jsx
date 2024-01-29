// src/App.js
import React, { useState, useEffect } from 'react';
import { Header } from './components/header';
import { Link } from 'react-router-dom';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [completed,setCompleted] = useState(false)



  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);


  useEffect(() => {
    //localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed:false }]);
      localStorage.setItem('todos', JSON.stringify([...todos, { id: Date.now(), text: newTodo, completed:false }]));
      setNewTodo('');
    }
  };

  const editTodo = (id, newText,completed) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, text: newText, completed:completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  
    // Remove the todo from local storage
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const updatedStoredTodos = storedTodos.filter(todo => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(updatedStoredTodos));
  };

  return (
    <div>
      <Header/>

      
        <Link to={'/todolist'}>
        <button className='text-white bg-gray-500 p-2'>
        All todo page
        </button>
        </Link>
        
      

<div className="container mx-auto max-w-md p-4 mt-8">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button
          className="mt-2 bg-blue-500 text-white p-2 rounded"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
      <ul>
        {todos?.map(todo => (
          <li key={todo.id} className="mb-2">
            <input
              type="text"
              value={todo.text}
              className="w-full p-2 border rounded"
              onChange={e => editTodo(todo.id, e.target.value)}
            />

        <input
              type="checkbox"
              value={todo.completed}
              className="w-full p-2 border rounded"
              onChange={e => editTodo(todo.id, e.target.value)}
            />
            <button
              className="bg-red-500 text-white p-2 ml-2 rounded"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
   
  );
};

export default App;
