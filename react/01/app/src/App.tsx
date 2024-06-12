import React, { useState, ChangeEvent } from 'react';
// import logo from './logo.svg';
import './App.css';

type TodoType = string[];

function App() {
  const [todos, setTodos] = useState<TodoType>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = () => {
    if(inputValue.trim()){
      setTodos([...todos, inputValue])
      setInputValue("")
    }
  }

  const handleDelete = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => { handleChangeValue(e)}}
        placeholder='Enter a TODO'      
      />
      <button onClick={handleSubmit}>Add TODO</button>
      <ul>
      {todos.map((v, index) => {
        return (
          <li key={index}>
            {v} <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        )}
      )}
      </ul>
    </div>
  );
}

export default App;
