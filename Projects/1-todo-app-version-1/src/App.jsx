import Appname from "./components/Appname";
import Inputarea from "./components/Inputarea";
import Text from "./components/Text";
import Text2 from "./components/Text2";
import "./App.css";
function App() {
  return (
    <center className="to-do-container">
      <Appname />
      <Inputarea />
      <div className="items-todo">
        <Text />
        <Text2 />
      </div>
    </center>
  );
}

export default App;
