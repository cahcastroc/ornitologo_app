import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link className="link-nav" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link-nav" to="/catalogo">
            Catálogo
          </Link>
        </li>
        <li>
          <Link className="link-nav" to="/anotacao">
            Anotações
          </Link>
        </li>
        <li>
          <Link className="link-nav" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
