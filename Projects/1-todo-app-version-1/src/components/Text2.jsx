function Text2() {
  let toDoName = "Buy Milk";
  let toDoDate = "7/10/2023";
  return (
    <div className="container ">
      <div class="row kg-row">
        <div class="col-6">{toDoName}</div>
        <div class="col-4">{toDoDate}</div>
        <div class="col-2">
          <button type="button" className="btn kg-btn btn-danger">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Text2;
