import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const TodoList = ()=>{
    const [text, setText] = useState('')
    const [todos,setTodos] = useState([])
   

    const addTodo = ()=>{
        
        if (text.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: text }]);
            localStorage.setItem('todos', JSON.stringify([...todos, { id: Date.now(), text: text }]));
            setText('');
          }

    }

    useEffect(()=>{
        //const storedTodos = JSON.parse(localStorage.getItem('todos'));
        const dbtodos= JSON.parse(localStorage.getItem('todos'))
        setTodos(dbtodos)
        console.log(todos)
    },[])
{/*
    const addTodo = () => {
        if (newTodo.trim() !== '') {
          setTodos([...todos, { id: Date.now(), text: newTodo, completed:false }]);
          localStorage.setItem('todos', JSON.stringify([...todos, { id: Date.now(), text: newTodo, completed:false }]));
          setNewTodo('');
        }
      };*/}




    return(
        <div>
            <div>
                <h1 className="text-center text-lg font-bold">All Todo</h1>
            </div>
            

                

            <div className="container mx-auto mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Add a new todo"
          value={text}
          onChange={(e)=>setText(e.target.value)}
        
        
        
        />
        <button
          className="mt-2 bg-blue-500 text-white p-2 rounded"
          onClick={addTodo}
         
        >
          Add Todo
        </button>
      </div>
  
            <div className="text-center">
                <ul>
                    {todos?.map((todo,index)=>(
                        <li>{todo.text}</li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}