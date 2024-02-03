import Appname from "./components/Appname";
import Inputarea from "./components/Inputarea";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import Welcome from "./components/Welcome";
function App() {
  const initialTodoitems = [
    {
      name: "Go to College",
      date: "7/11/2024",
    },
    {
      name: "buy Milk",
      date: "8/11/2024",
    },
    {
      name: "like this video",
      date: "9/9/2025",
    },
  ];
  const [todoItems, setTodoItems] = useState(initialTodoitems);
  const handleNewItem = (toDoName, toDoDate) => {
    console.log(`new item added ${toDoName} date is ${toDoDate}`);
    const newTodoitems = [...todoItems, { name: toDoName, date: toDoDate }];
    setTodoItems(newTodoitems);
  };
  const handleDeleteItem = (toDoName) => {
    console.log(`deleted item is ${toDoName}`);
  };
  return (
    <center className="to-do-container">
      <Appname />
      <Inputarea onNewItem={handleNewItem} />
      {todoItems.length === 0 && <Welcome />}
      <TodoItems todoitems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
