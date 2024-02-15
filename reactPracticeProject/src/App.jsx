import "./App.css";
import Navbar from "./components/Navbar";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar title="Baba Hosiery" />
      <Hero name="Baba Hosiery" />
    </>
  );
}

export default App;
