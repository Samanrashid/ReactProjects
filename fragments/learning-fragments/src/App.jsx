import "./App.css";
import ListWithMap from "./components/ListWithMap";
import Errormesaage from "./components/Errormessage";
import Item from "./components/item";

function App() {
  return (
    <>
      <h1>Options for Food</h1>
      <Errormesaage />
      <ListWithMap />
    </>
  );
}
export default App;
