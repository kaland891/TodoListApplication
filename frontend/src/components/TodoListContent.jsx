import React, { useState, useEffect } from "react";
import Delete_button from "./delete_list";
import ChangeButtom from "./ChangeButtom";

const TodoListContent = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/todos/")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  return (
    <div className="todoList-body">
      {todos.map((todo) => (
        <div>
          <p>Content: {todo.content}</p>
          <Delete_button id={todo.id} />
          <ChangeButtom id={todo.id} />
        </div>
      ))}
    </div>
  );
};

const TodoListContentBody = (props) => {
  return (
    <div className="todoList-body">
      {todos.map((todo) => (
        <div>
          <p>Content: {todo.content}</p>
          <Delete_button id={todo.id} />
          <ChangeButtom id={todo.id} />
        </div>
      ))}
    </div>
  );
};

export default TodoListContent;
