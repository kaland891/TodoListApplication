import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTodoList,
  updateTodo,
  sortTodo,
  toggleCompleted,
} from "../ToDoSlice";
import { TiPencil } from "react-icons/ti";
import { BsTrash } from "react-icons/bs";
import empty from "../assets/empty.jpg";

const ToDoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const sortCriteria = useSelector((state) => state.todo.sortCriteria);
  const [showModel, setShowModel] = React.useState(false);

  return (
    <button className="bg-sunsetOrange text-center text-white py-3 px-10 rounded-md">
      Add Task
    </button>
  );
};

export default ToDoList;
