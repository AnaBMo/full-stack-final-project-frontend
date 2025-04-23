import RoutesBrowser from './routes/Routes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <RoutesBrowser />
      </main>
      <Footer />
    </>
  );
}

export default App;