import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState("");

  const HandleInputChange = (event) => setNewTodos(event.target.value);

  const addTodos = () => {
    setTodos([...todos, newTodos]);
    setNewTodos("");
  };

  const resetTodo = () => {
    setTodos([]);
  };

  const removeBtn = (index) => {
    const todoArray = [...todos];
    todoArray.splice(index, 1);
    setTodos(todoArray);
  };

  return (
    <div>
      <input type="text" value={newTodos} onChange={HandleInputChange} />
      <button onClick={addTodos}>Add</button>
      <button onClick={resetTodo}>RESET</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={removeBtn}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
