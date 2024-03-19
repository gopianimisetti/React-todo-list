import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if(newTodo===""){
      alert("task should not be empty")
    }
    else if(newTodo!=='') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleting = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const editing = (index, newTodoText) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = newTodoText;
    setTodos(updatedTodos);
  };

  return (
    <div className='card' style={{marginTop: '100px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '450px', padding: '40px', backgroundColor: 'cyan'}}>
      <input
        style={{padding: '10px', borderRadius: '20px', margin: '10px', width: '100%'}}
        type="text"
        value={newTodo}
        placeholder="Enter a task"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button style={{padding: '10px', borderRadius: '10px', backgroundColor: 'lightgreen', width: '100%'}} onClick={addTodo}>Submit</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{marginBottom: '10px'}}>
            {todo}
            <button style={{backgroundColor: 'darkviolet', margin: '5px', padding: '5px'}} onClick={() => deleting(index)}>Delete</button>
            <button style={{backgroundColor: 'snow', margin: '5px', padding: '5px'}} onClick={() => editing(index, prompt('Enter new todo text:'))}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
