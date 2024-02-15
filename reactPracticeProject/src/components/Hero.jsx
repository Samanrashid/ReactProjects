import { useState } from "react";
import Image from "./ImageMain.png"; // Corrected import statement
import PropTypes from "prop-types";

export default function Hero(props) {
  const handleOnChange = (event) => {
    setData(event.target.value);
  };
  const handleOnAdd = () => {
    if (data.trim() !== "") {
      setListItems([...listItems, data]);
      setData("");
    }
  };
  const handleOnDelete = (index) => {
    const newList = [...listItems];
    newList.splice(index, 1);
    setListItems(newList);
  };
  const handleCheck = (index) => {
    const newList = [...listItems];
    newList[index].isChecked = !newList[index].isChecked;
    setListItems(newList);
  };

  const handleOnDeleteSelected = () => {
    const newList = listItems.filter((item) => !item.isChecked);
    setListItems(newList);
  };

  const [data, setData] = useState("");
  const [listItems, setListItems] = useState([]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-4 text-dark">
            <p>
              {`Welcome to ${props.name}, your one-stop destination for all your
              shopping needs! Explore our vast collection of products ranging
              from trendy fashion apparel to cutting-edge gadgets, exquisite
              home decor, and everything in between. At ${props.name}, we
              strive to offer you the best shopping experience with our
              carefully curated selection of high-quality items sourced from
              trusted brands and manufacturers. Whether yo are looking to revamp
              your wardrobe, upgrade your tech gadgets, or spruce up your living
              space, we have something for everyone.`}
            </p>
          </div>
          <div className="col">
            <img
              src={Image}
              style={{ width: "70%", height: "auto" }}
              alt="Example"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="secondContainer">
          <div className="row">
            <div className="col mt-2 text-dark">
              <input
                type="text"
                placeholder="Type something..." // Optional placeholder text
                onChange={handleOnChange}
                value={data}
              />
            </div>
            <div className="col mt-2">
              <button className="btn btn-success " onClick={handleOnAdd}>
                Add Item in cart
              </button>
            </div>
            <div className="col mt-2">
              <button
                className="btn btn-danger "
                onClick={handleOnDeleteSelected}
              >
                delete Item from cart
              </button>
            </div>
            <ul className="list-group">
              {listItems.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center mt-4"
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`flexCheckDefault_${index}`}
                    onClick={handleCheck}
                  />

                  {item}
                  <button
                    className="btn btn-danger btn-sm ml-2"
                    onClick={() => handleOnDelete(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
Hero.PropsType = {
  name: PropTypes.string,
};
