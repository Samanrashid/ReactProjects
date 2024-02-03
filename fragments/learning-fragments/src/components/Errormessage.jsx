function Errormesaage() {
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
  return <>{foodItems.length === 0 ? "I am still hungry" : null}</>;
}
export default Errormesaage;
