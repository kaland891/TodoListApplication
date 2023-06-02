import TodoListContent from "./TodoListContent";
import AddNewTodoList from "./AddNewTodoList";
import "./tailwind.css";

const TodoListBody = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="card max-w-md w-full mx-auto shadow-md rounded p-6 bg-white">
        <div className="todoList-body">
          <h1 className="text-3xl font-bold mb-4 text-center">Todo List</h1>
          <AddNewTodoList />
          <TodoListContent />
        </div>
      </div>
    </div>
  );
};

export default TodoListBody;
