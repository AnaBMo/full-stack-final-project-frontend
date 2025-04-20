/*
Define la estructura visual de una tarjeta
*/
import { Link } from 'react-router-dom';
import './HomeCard.css';

function HomeCard({ title, to }) {
  return (
    <div className='home-card'>
      <Link to={to} >
        <h3>{title}</h3>
        {/* <p>{description}</p> */} {/*posibilidad de añadir descripción*/}
      </Link>
    </div>
  );
}

export default HomeCard;