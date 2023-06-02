import TodoListContent from "./TodoListContent";

const Delete_button = (todolist) => {
  return (
    <button className="delete_button" onClick={() => delcontent(todolist.id)}>
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
