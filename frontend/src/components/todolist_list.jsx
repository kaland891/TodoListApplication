const todolist_list = (props) => {
  return (
    <div className="todolist_list">
      <div className="todolist_list_title">{props.id}</div>
      <div className="todolist_list_content">{props.title}</div>
    </div>
  );
};
