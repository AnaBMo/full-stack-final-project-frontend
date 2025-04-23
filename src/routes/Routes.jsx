import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import Logout from '../pages/logout/logout';
import UnderConstruction from '../pages/under-construction/UnderConstruction';
import Products from "../pages/product/Products";
import NewProduct from "../pages/product/NewProduct";
import ProductDetail from '../pages/product/ProductDetail';
import NewRecipe from '../pages/recipe/NewRecipe';
import Recipes from '../pages/recipe/Recipes'

function RoutesBrowser() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/under-construction" element={<UnderConstruction />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/new" element={<NewProduct />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/recipes/new" element={<NewRecipe />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
    </>
  );
}

export default RoutesBrowser;