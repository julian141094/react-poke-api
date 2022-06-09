import "./App.css";
import Pokemon from "./pages/pokemons";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNav from "./components/basics/nav";

function App() {
  return (
    <div className="general-container">
      <CustomNav />
      <Pokemon />
    </div>
  );
}

export default App;
