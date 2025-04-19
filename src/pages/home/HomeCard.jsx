/*
Define la estructura visual de una tarjeta
*/
import { Link } from 'react-router-dom';
import './HomeCard.css';

function HomeCard({ title, to }) {
  return (
    <Link to={to} className="home-card">
      <h3>{title}</h3>
      {/* <p>{description}</p> */} {/*posibilidad de añadir descripción*/}
    </Link>
  );
}

export default HomeCard;