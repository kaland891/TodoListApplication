import React, { useState } from "react";

const ChangeList = (props) => {
  fetch("http://localhost:8000/todos/" + props.id, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      is_done: "True",
      content: props.content,
    }),
  });
};

const ChangeButtom = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit && props.onSubmit(value);
    ChangeList({ id: props.id, content: value });
    setValue("");
  };

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder={props.defaultText}
        value={value}
        onChange={handleChange}
        className="border border-gray-300 p-1 rounded-lg mr-2"
      />
      <button
        type="change"
        className="mr-2 py-1 px-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        value="change"
        onClick={handleSubmit}
      >
        change
      </button>
    </div>
  );
};

export default ChangeButtom;
