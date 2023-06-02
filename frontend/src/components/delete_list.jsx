import TodoListContent from "./TodoListContent";

const Delete_button = (todolist) => {
  return (
    <button
      className="py-1 px-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
      onClick={() => delcontent(todolist.id)}
    >
      Delete
    </button>
  );
};

const delcontent = (id) => {
  fetch("http://localhost:8000/todos/" + id, {
    method: "DELETE",
  });
  return <TodoListContent />;
};

export default Delete_button;
