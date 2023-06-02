import React, { useState } from "react";
import "./tailwind.css";

const NewtodoInput = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit && props.onSubmit(value);
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between items-center mb-6"
    >
      <input
        type="text"
        placeholder={props.defaultText}
        value={value}
        onChange={handleChange}
        className="flex-1 px-4 py-2 mr-3 border rounded-md w-40"
      />
      <button
        type="submit"
        className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
      >
        提交
      </button>
    </form>
  );
};

const AddNewTodoList = () => {
  const addtodolist = (todolist) => {
    fetch("http://localhost:8000/todos/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        is_done: false,
        content: todolist,
      }),
    });
  };

  return <NewtodoInput defaultText="newtodo" onSubmit={addtodolist} />;
};

export default AddNewTodoList;
