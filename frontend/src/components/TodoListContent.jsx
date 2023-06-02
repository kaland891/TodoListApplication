import React, { useState, useEffect } from "react";
import Delete_button from "./delete_list";
import ChangeButtom from "./ChangeButtom";
import "./tailwind.css";

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
    <div className="flex flex-col items-center justify-between p-4  bg-white shadow rounded">
      {todos.map((todo) => (
        <div className="flex items-center justify-between my-2 w-full bg-gray-100 p-2 rounded">
          <hr className="w-full" />
          <div className="flex flex-col items-start">
            <div className="text-xl text-blue-600 font-bold border w-full my-2 p-1 rounded shadow bg-white">
              {todo.content}
            </div>
            <div className="flex items-center ">
              <ChangeButtom id={todo.id} />
              <Delete_button id={todo.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoListContent;
