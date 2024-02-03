import "./App.css";
import Heading from "./components/Heading";
import Content from "./components/Content";
import Content2 from "./components/Content2";
function App() {
  return (
    <div className="whole-container">
      <center className="Container ">
        <Heading />
        <Content />
        <Content2 />
      </center>
    </div>
  );
}

export default App;
