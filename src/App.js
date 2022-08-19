import { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const App = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (text) => {
    if (!text || /^\s*$/.test(text)) {
      alert("enter valid input");
      return;
    }
    const newTodo = { text: text, id: Math.random() * 1000, checked: false };
    setTodos([newTodo, ...todos]);
  };

  const handleDelete = (id) => {
    const newArr = todos.filter((todo) => todo.id !== id);
    setTodos(newArr);
  };

  const handleCheck = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <div className="container">
        <TodoForm addTask={addTask} />
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      </div>
    </div>
  );
};

export default App;
