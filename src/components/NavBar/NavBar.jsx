import CartWidget from "../CartWidget/CartWidget";
import "../style.css";
const NavBar = () => {
  return (
    <nav>
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
          
    </nav>
  );
};

export default NavBar;
