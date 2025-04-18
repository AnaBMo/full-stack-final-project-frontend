import { BrowserRouter as Router } from 'react-router-dom';
import RoutesBrowser from './routes/Routes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <RoutesBrowser />
      </main>
      <Footer />
    </Router>
  );
}

export default App;