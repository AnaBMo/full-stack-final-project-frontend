import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  function allProducts (){
    axios.get(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }

  useEffect(() => {
    allProducts()
  }, []);

  function expiringSoon () {
    axios.get(`${import.meta.env.VITE_API_URL}/products/expiring`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }

  function expired () {
    axios.get(`${import.meta.env.VITE_API_URL}/products/expired`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }

    return (
        <div className="products-container">
            <h1>Products</h1>
            <div className="products-btns">
                <Link className="link-to-form" to="/products/new">
                  <button>New Product</button>
                </Link>
                <button onClick={expiringSoon}>Expiring Soon</button>
                <button onClick={expired}>Expired</button>
                <button onClick={allProducts}>All products</button>
            </div>
            <div className="product-list">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product._id} className="product-card">
                            <h3>{product.name}</h3>
                            <p>Batch: {product.batchNumber}</p>
                            <p>Expiry: {new Date(product.expirationDate).toLocaleDateString()}</p>
                        </div>
                    ))
                ) : (
                    <p>There are no products in stock.</p>
                )}
            </div>
        </div>
    );
}

export default Products;