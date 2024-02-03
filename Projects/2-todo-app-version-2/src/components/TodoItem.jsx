import { AiOutlineDelete } from "react-icons/ai";
function TodoItem({ toDoName, toDoDate }) {
  return (
    <div className="container ">
      <div class="row kg-row">
        <div class="col-6">{toDoName}</div>
        <div class="col-4">{toDoDate}</div>
        <div class="col-2">
          <button type="button" className="btn kg-btn btn-danger">
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
