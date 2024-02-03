import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonsName.map((item) => (
        <button
          className={styles.button}
          onClick={() => {
            onButtonClick(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
