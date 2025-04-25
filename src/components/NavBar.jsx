import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/logo.png';
import { FaUser } from "react-icons/fa";
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';


function NavBar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isProducts = location.pathname === "/products";
  const isRecipes = location.pathname === "/recipes";
  const { user } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => setMenuOpen(false);

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

        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {!isHome && <Link to="/" onClick={closeMenu}>Home</Link>}
          {!isProducts && <Link to="/products" onClick={closeMenu}>Products</Link>}
          {!isRecipes && <Link to="/recipes" onClick={closeMenu}>Recipes</Link>}
          <Link to="/under-construction" onClick={closeMenu}>Regulations</Link>
          <Link to="/under-construction" onClick={closeMenu}>Training</Link>
          <Link to="/under-construction" onClick={closeMenu}>Sustainability</Link>
          {!user && (
            <Link to="/login" className="navbar-link" onClick={closeMenu}>
              <FaUser style={{ marginRight: "0.5rem" }} /> Login
            </Link>
          )}
          {user && (
            <Link to="/logout" onClick={closeMenu}>Logout</Link>
          )}
        </nav>

        <button className="navbar-toggle" onClick={toggleMenu}>&#9776;</button>
      </header>
    </>
  );
}

export default NavBar;