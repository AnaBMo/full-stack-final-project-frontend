import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import UnderConstruction from '../pages/under-construction/UnderConstruction';
import Products from "../pages/product/Products";
import NewProduct from "../pages/product/NewProduct";
import ProductDetail from '../pages/product/ProductDetail';

function RoutesBrowser() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/under-construction" element={<UnderConstruction />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/new" element={<NewProduct />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
    </>
  );
}

export default RoutesBrowser;