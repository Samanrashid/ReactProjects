function Content2() {
  let time = new Date();
  return (
    <p className="lead">
      This is the current time {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}
export default Content2;
