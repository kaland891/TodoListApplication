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
    <div className="u-flex">
      <input
        type="text"
        placeholder={props.defaultText}
        value={value}
        onChange={handleChange}
        className="NewtodoInput"
      />
      <button
        type="change"
        className="NewtodoInput-button u-pointer"
        value="change"
        onClick={handleSubmit}
      >
        change
      </button>
    </div>
  );
};

export default ChangeButtom;
