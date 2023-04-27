import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContariner/ItemListContainer";

//import NavBar1 from './components/NavBar1';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos - Jheyson Sanchez"} />
    </div>
  );
}

export default App;
