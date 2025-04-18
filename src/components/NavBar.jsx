import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/logo.png';

function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Cooking Safely Logo" />
      </div>
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/under-construction">Regulations</Link>
        <Link to="/under-construction">Training</Link>
        <Link to="/under-construction">Sustainability</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
      <button className="navbar-toggle">&#9776;</button>
    </header>
  );
}

export default NavBar;