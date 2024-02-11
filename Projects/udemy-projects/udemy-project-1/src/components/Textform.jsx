import PropTypes from "prop-types";
import { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = enterText.toUpperCase();
    setEnterText(newText);
  };
  const handleOnChange = (event) => {
    setEnterText(event.target.value);
  };
  const handleLowerClick = () => {
    const textLength = enterText.length;
    console.log(textLength);
  };

  const [enterText, setEnterText] = useState("Enter your Text here");
  return (
    <>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          {props.Text}
        </label>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={enterText}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className="d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleLowerClick}
        >
          Check length of text
        </button>
      </div>
    </>
  );
}
Textform.propTypes = {
  Text: PropTypes.string,
  heading: PropTypes.string,
};
