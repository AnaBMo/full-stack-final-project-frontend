import { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

    return (
        <div className="products-container">
            <h1>Products</h1>
            <div className="products-btns">
                <button>New Product</button>
                <button>Expiring Soon</button>
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