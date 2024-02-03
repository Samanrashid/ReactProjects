import Item from "./item";
function ListWithMap() {
  let foodItems = [
    "Over Soaked Oats",
    "Soya curry",
    "Dal Khichdi",
    "chicken roast",
    "Fruit salad",
    "Beens",
    "Low Carbs Food",
    "Low calories food",
  ];
  // let foodItems = [];
  return (
    <>
      <ul className="list-group">
        {foodItems.map((item) => (
          <Item foodItems={item} />
        ))}
      </ul>
    </>
  );
}
export default ListWithMap;
