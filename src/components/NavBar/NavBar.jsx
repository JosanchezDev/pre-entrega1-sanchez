import CartWidget from "../CartWidget/CartWidget";
/*import "../style.css";*/
import { Link } from "react-router-dom";
import './NavBar.scss'
const NavBar = () => {
  return (
    /* <nav>
      <h2 style={{ textAlign: "center" }}>e-Commerce</h2>
      <div style={{ background: "#444444", textAlign: "left" }}>
        <ul className="list">
          <li>Inicio</li>
          <li>Acerca</li>
          <li>Blog</li>
          <li>Contactos</li>
         
        </ul>
      </div>
      <div className="cart">
            <CartWidget />
            <h3>0</h3>
          </div>
          
    </nav> */

    <div className="navbar">
        <div className="navbar-heading">
        <Link to="/"><h1>Gustosito <span>App</span></h1></Link>
        </div>
        <div className="navbar-links">
          <ul>
            <Link to="/"><li>Inicio</li></Link>
            <Link to="/productos"><li>Productos</li></Link>
            <Link to="/categories"><li>Categories</li></Link>
            
            
          
          {/* <li>Categorias</li>
          <li>Blog</li>
          <li>Contactos</li> */}
          </ul>
        </div>
    </div>

  );
};

export default NavBar;
