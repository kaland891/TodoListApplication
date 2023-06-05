import React, { useEffect } from "react";
import { setTodoList } from "../ToDoSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import "../index.css";

function Test() {
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:8000/todos/")
      .then((response) => response.json())
      .then((data) => {
        const contentArray = data.map((item) => item.content);
        dispatch(setTodoList(contentArray));
        console.log(contentArray);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const data = {
    content: "test",
    is_done: false,
  };
  const addData = (props) => {
    fetch("http://localhost:8000/todos/", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    })
      .then((response) => response.json())
      .then(() => {
        fetchData();
      });
  };

  const deleteData = (id) => {
    fetch(`http://localhost:8000/todos/${id}/`, {
      method: "DELETE",
    }).catch((error) => {
      console.error(error);
    });
  };

  const handleButtonClick = () => {
    addData(data);
  };
  const deleteButtonClick = () => {
    addData(data);
  };
  return (
    <div className="App font-Poppins container py-16 px-6 min-h-screen mx-auto">
      <div className="flex items-center justify-center flex-col">sbxsm</div>
      <div className="flex items-center justify-center flex-col">
        {JSON.stringify(todoList)}
        <button onClick={handleButtonClick}>Add Data</button>
      </div>
    </div>
  );
}

export default Test;
