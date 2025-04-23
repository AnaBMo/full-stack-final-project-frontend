import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/logo.png';
import { FaUser } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';



function NavBar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isProducts = location.pathname === "/products";
  const isRecipes = location.pathname === "/recipes";
  const { user } = useContext(AuthContext);

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
          {!isHome && <Link to="/">Home</Link>}
          {!isProducts && <Link to="/products">Products</Link>}
          {!isRecipes && <Link to="/recipes">Recipes</Link>}
          <Link to="/under-construction">Regulations</Link>
          <Link to="/under-construction">Training</Link>
          <Link to="/under-construction">Sustainability</Link>
          {!user && (
            <Link to="/login" className="navbar-link">
              <FaUser style={{ marginRight: "0.5rem" }} /> Login
            </Link>
          )}
          {user && (
            <Link to="/logout">Logout</Link>
          )}
        </nav>

        <button className="navbar-toggle">&#9776;</button>
      </header>
    </>
  );
}

export default NavBar;