import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import UnderConstruction from '../pages/under-construction/UnderConstruction';
import Products from "../pages/product/Products";

function RoutesBrowser() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/under-construction" element={<UnderConstruction />} />
          <Route path="/products" element={<Products />} />
        </Routes>
    </>
  );
}

export default RoutesBrowser;