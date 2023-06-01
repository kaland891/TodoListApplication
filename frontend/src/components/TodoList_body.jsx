import TodoList_content from "./todolist_content";

const TodoList_body = () => {
  return (
    <div>
      <h1>Vite + React</h1>
      <div className="card"></div>
      <div className="todoList-body">
        <h1>todoList</h1>
        {TodoList_content()}
      </div>
    </div>
  );
};

export default TodoList_body;
