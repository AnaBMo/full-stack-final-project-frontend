import { Route, Routes } from 'react-router-dom';
import Register from '../pages/register/Register';

function RoutesBrowser() {
  return (
    <>
        <Routes>
        <Route path="/register" element={<Register />} />
        {/* Aquí añadiremos Login, Home, etc. */}
        </Routes>
    </>
  );
}

export default RoutesBrowser;