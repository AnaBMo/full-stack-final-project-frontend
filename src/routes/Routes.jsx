import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';

function RoutesBrowser() {
  return (
    <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        {/* Aquí añadiremos Login, Home, etc. */}
        </Routes>
    </>
  );
}

export default RoutesBrowser;