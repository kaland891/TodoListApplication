import React, { useState, useEffect } from "react";

const TodoList_content = () => {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("");

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
        <div key={todo.id}>
          <p>Content: {todo.content}</p>
        </div>
      ))}
    </div>
  );
};
export default TodoList_content;
