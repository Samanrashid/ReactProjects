import TodoItem from "./TodoItem";
function TodoItems({ todoitems, onDeleteClick }) {
  return (
    <>
      <div className="items-todo">
        {todoitems.map((item) => (
          <TodoItem
            toDoDate={item.date}
            toDoName={item.name}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </>
  );
}
export default TodoItems;
