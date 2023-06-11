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
  const [currentTodo, setCurrentTodo] = React.useState(null);

  return (
    <div>
      {showModel && (
        <div className="fixed w-full left-0 top-0 h-full bg-transparentBlack flex justify-center items-center">
          <div className="bg-white p-8 rounded-md">
            <input
              type="text"
              className="border p-2 rounded-md outlinw-none mb-8"
              placeholder={
                currentTodo ? "Update your task here" : "Enter your task here"
              }
            />
            <div className="flex justify-between">
              {currentTodo ? (
                <>
                  <button className="bg-sunsetOrange rounded-md text-white py-3 px-10">
                    Save
                  </button>
                  <button
                    className="bg-Tangaroa rounded-md text-white py-3 px-10"
                    onClick={() => setShowModel(false)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button className="bg-sunsetOrange rounded-md text-white py-3 px-10">
                    Add
                  </button>
                  <button
                    className=" bg-Tangaroa rounded-md text-white py-3 px-10"
                    onClick={() => setShowModel(false)}
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <button
        className="bg-sunsetOrange text-center text-white py-3 px-10 rounded-md"
        onClick={() => setShowModel(true)}
      >
        Add Task
      </button>
    </div>
  );
};

export default ToDoList;
