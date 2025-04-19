/*
Recorre el array importado de HomeCardData.js con .map() 
y renderiza cada HomeCard
*/
import HomeCardData from './HomeCardData';
import HomeCard from './HomeCard';
import './Home.css';
import logo from '../../assets/logo.png';

function Home() {
    return (
      <div className="home-container">
        <div className="home-welcome">
            <div className="home-text">
                <h1>Sustainability Security Control Optimization</h1>
            </div>

            <div className='home-logo'>
                <img src={logo} alt="Cooking Safely Logo" />
            </div>
        </div>
  
        <div className="home-cards">
          {HomeCardData.map((card, index) => (
            <HomeCard
              key={index}
              title={card.title}
              description={card.description}
              to={card.to}
            />
          ))}
        </div>
      </div>
    );
  }
  
export default Home;
