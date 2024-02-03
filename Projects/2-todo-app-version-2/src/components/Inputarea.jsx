import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";
function Inputarea({ onNewItem }) {
  const [toDoName, setTodoName] = useState();
  const [toDoDate, setTododate] = useState();
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTododate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(toDoName, toDoDate);
    setTodoName("");
    setTododate("");
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            value={toDoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={toDoDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn kg-btn btn-success"
            onClick={handleAddButtonClicked}
          >
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Inputarea;
