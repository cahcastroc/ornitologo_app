import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  let userName = JSON.parse(localStorage.getItem("token") || "{}").nome;

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="nav">
      <ul>
      
        <li>

            <Link className="link-nav" to="/">
            Home
            </Link>
            </li>
          
        
        {userName ? (
          <li>
            <Link className="link-nav" to="/catalogo">
              Catálogo
            </Link>
            </li>
          ) : null}
        
        {userName ? (
          <li>
            <Link className="link-nav" to="/minhasanotacoes">
              Anotações
            </Link>
            </li>
          ) : null}
        <li>
          {!userName ? (
            <Link className="link-nav" to="/login">
              Login
            </Link>
          ) : (
            <Link className="link-nav" onClick={logout} to="/">
              Logout
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
