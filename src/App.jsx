import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContariner/ItemListContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemCategories from "./components/ItemCategories/ItemCategories";
import Home from "./components/Home/Home";
//import NavBar1 from './components/NavBar1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Home greeting={"Bienvenidos a Gustosito"} />}
          />
          <Route
            path="/categories"
            element={
              <ItemCategories  />
            }
          />
          <Route
            path="/productos"
            element={
              <ItemListContainer greeting={"Categories - Jheyson Sanchez"} />
            }
          />
          <Route path="/item/:itemid" element={<ItemDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
