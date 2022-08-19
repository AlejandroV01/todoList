import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./TodoList.css";
const TodoList = ({ todos, handleDelete, handleCheck }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div
          className={
            todo.checked === true
              ? "todo-container-checked todo-container"
              : "todo-container"
          }
          key={todo.id}
        >
          <span className={todo.checked === true ? "todo-text-checked" : ""}>
            {todo.text}
          </span>
          <div className="icon-div">
            <FontAwesomeIcon
              icon={faCheck}
              className="faCheck"
              onClick={() => handleCheck(todo.id)}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faTrash}
              className="faTrash"
              onClick={() => handleDelete(todo.id)}
            ></FontAwesomeIcon>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
