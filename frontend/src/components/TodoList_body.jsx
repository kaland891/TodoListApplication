import TodoListContent from "./TodoListContent";
import AddNewTodoList from "./AddNewTodoList";

const TodoListBody = () => {
  return (
    <div>
      <div className="card"></div>
      <div className="todoList-body">
        <h1>todoList</h1>
        <AddNewTodoList />
        <TodoListContent />
      </div>
    </div>
  );
};

export default TodoListBody;
