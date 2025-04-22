import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/logo.png';
import { FaUser } from "react-icons/fa";


function NavBar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <header className="navbar">
        {/*se usa el hook useLocation para poner el logo la barra
        de navegación de todas las páginas que no sean Home*/}
        {!isHome && (
            <Link to="/" className="navbar-logo">
              <img src={logo} alt="Cooking Safely Logo" />
            </Link>
        )}

        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/under-construction">Regulations</Link>
          <Link to="/under-construction">Training</Link>
          <Link to="/under-construction">Sustainability</Link>
          <Link to="/login" className="navbar-link"><FaUser style={{ marginRight: "0.5rem" }} /> Login</Link>
        </nav>

        <button className="navbar-toggle">&#9776;</button>
      </header>
    </>
  );
}

export default NavBar;