import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo === "") {
      alert("task should not be empty")
    }
    else if (newTodo !== '') {
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
    <div style={{ backgroundColor: "navajowhite", height: "800px", paddingTop: "100px" }}>
      <div className='card' style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '450px', padding: '40px', backgroundColor: '#E5EAF5' }}>
        <input
          style={{ padding: '10px', borderRadius: '10px', margin: '10px', width: '90%' }}
          type="text"
          value={newTodo}
          placeholder="Enter a task"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <center><button style={{ marginTop: "20px", padding: '10px', borderRadius: '10px', border: "none", backgroundColor: 'green', width: '100px' }} onClick={addTodo}>Submit</button></center>
        
        
            {todos.map((todo, index) => (
              <li key={index} style={{ marginTop:"10px",marginBottom: '10px',marginLeft:"10px" }}>
                {todo}
                <button style={{  marginLeft: '5px', padding: '8px',border:"none",backgroundColor:"red" }} onClick={() => deleting(index)}>Delete</button>
                <button style={{  margin: '5px', padding: '8px',border:"none",backgroundColor:"gray" }} onClick={() => editing(index, prompt('Enter new todo text:'))}>Edit</button>
              </li>
            ))}
          
        
      </div>
    </div>
  );
};

export default Todo;
