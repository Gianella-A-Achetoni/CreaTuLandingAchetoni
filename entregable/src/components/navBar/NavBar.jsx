import CartWidget from "./CartWidget"
import "./navBar.css"

const NavBar = () => {
  return (
    <div>
      <nav>

        {/* Logo */}
        <div>
          <img src="../src\assets\logo.jpg" alt="" />
        </div>

        {/* Categorias */}
        <ul>
          <li><a href="">Premium</a></li>
          <li><a href="">Florales</a></li>
          <li><a href="">Cítricos</a></li>
          <li><a href="">Orientales/Ambar</a></li>
          <li><a href="">Chipre</a></li>
          <li><a href="">Fougère</a></li>
          <li><a href="">Gourmand</a></li>
        </ul>

        {/* Componente del carrito */}
        <div>
          <CartWidget/>
        </div>
      </nav>
    </div>
  )
}

export default NavBar