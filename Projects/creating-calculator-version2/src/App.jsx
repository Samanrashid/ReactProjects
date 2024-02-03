import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  let [calVal, setcalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setcalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setcalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display calVal={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
