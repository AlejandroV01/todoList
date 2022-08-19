import React, { useState } from "react";
import "./TodoForm.css";
const TodoForm = ({ addTask }) => {
  const [input, setInput] = useState("");

  return (
    <div className="main">
      <h1 className="title">Todo-List</h1>
      <div className="form-bar">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Add a task here"
        />
        <button
          onClick={() => {
            addTask(input);
            setInput("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
