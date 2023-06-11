import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTodoList,
  addTodo,
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
  const [newTask, setNewTask] = React.useState("");

  useEffect(() => {
    if (todoList.length > 0)
      localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    const localTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (localTodoList) {
      dispatch(setTodoList(localTodoList));
    }
  }, []);

  const handleAddTodo = (task) => {
    if (task.trim().length === 0) {
      alert("please enter a task");
    } else {
      dispatch(
        addTodo({
          task: task,
          id: Date.now(),
        })
      );
      setNewTask("");
      setShowModel(false);
    }
  };

  return (
    <div>
      {showModel && (
        <div className="fixed w-full left-0 top-0 h-full bg-transparentBlack flex justify-center items-center">
          <div className="bg-white p-8 rounded-md">
            <input
              type="text"
              className="border p-2 rounded-md outlinw-none mb-8"
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
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
                  <button
                    className="bg-sunsetOrange rounded-md text-white py-3 px-10"
                    onClick={() => {
                      handleAddTodo(newTask);
                    }}
                  >
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
      <div className="flex items-center justify-center flex-col">
        {todoList.length === 0 ? (
          <div className="mb-8">
            <div className="sm:w-[500px] sm:h-[500px] min-w-[250px]">
              <img src={empty} alt="" />
            </div>
            <p className="text-center text-Gray">
              You have no todo's,plese add one.
            </p>
          </div>
        ) : (
          <></> //之后会填写
        )}

        <button
          className="bg-sunsetOrange text-center text-white py-3 px-10 rounded-md"
          onClick={() => setShowModel(true)}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
