import React, { useState, useEffect } from "react";

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
    <div className="u-flex">
      <input
        type="text"
        placeholder={props.defaultText}
        value={value}
        onChange={handleChange}
        className="NewtodoInput"
      />
      <button
        type="submit"
        className="NewtodoInput-button u-pointer"
        value="Submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
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
