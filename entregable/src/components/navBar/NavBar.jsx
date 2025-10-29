import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import "./navBar.css"

const NavBar = () => {
  return (
    <div>
      <nav>

        {/* Logo */}
        <div>
          <Link to="/">
            <img src="../src\assets\logo.jpg" alt="" />
          </Link>
        </div>

        {/* Categorias */}
        <ul>
          <li><Link to="/category/premium">Premium</Link></li>
          <li><Link to="/category/florales">Florales</Link></li>
          <li><Link to="/category/citrico">Cítricos</Link></li>
          <li><Link to="/category/orientales">Orientales/Ambar</Link></li>
          <li><Link to="/category/chipre">Chipre</Link></li>
          <li><Link to="/category/fougere">Fougère</Link></li>
          <li><Link to="/category/gourmand">Gourmand</Link></li>
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