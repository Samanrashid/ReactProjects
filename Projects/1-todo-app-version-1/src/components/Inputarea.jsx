function Inputarea() {
  return (
    <div className="container text-center">
      <div class="row kg-row">
        <div class="col-6">
          <input type="text" placeholder="Enter todo here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" className="btn kg-btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Inputarea;
