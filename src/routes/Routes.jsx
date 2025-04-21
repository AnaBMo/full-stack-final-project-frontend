import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import UnderConstruction from '../pages/under-construction/UnderConstruction';

function RoutesBrowser() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/under-construction" element={<UnderConstruction />} />
        </Routes>
    </>
  );
}

export default RoutesBrowser;