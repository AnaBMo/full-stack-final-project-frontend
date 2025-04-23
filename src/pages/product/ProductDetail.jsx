import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css";
import { FaArrowLeft } from "react-icons/fa";
import ProductViewImg from '../../assets/product-view.png'

function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [deleteMessage, setDeleteMessage] = useState("");
    const [deleteError, setDeleteError] = useState("");
    const navigate = useNavigate();

    function getProductById() {
        axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`)
            .then((response) => setProduct(response.data))
            .catch((error) => console.error("Error fetching product:", error));
    }

    useEffect(() => {
        getProductById()
    }, []);

    if (!product) return <p>Loading...</p>;

    const handleDelete = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/products/${productId}`);
            setDeleteMessage("Product deleted successfully.");
            setDeleteError("");
            setTimeout(() => {
                window.location.href = "/products";
            }, 2000);
        } catch (error) {
            console.error("Error deleting product:", error);
            setDeleteError("Failed to delete product.");
            setDeleteMessage("");
        }
    };

    return (
        <div className="product-detail">
            <h2>{product.name}</h2>
            <div className="product-detail-content">
                <img src={ProductViewImg} alt="Image of corn" />
                <div className="product-detail-info">
                    <p><strong>Entry date:</strong> {new Date(product.entryDate).toLocaleDateString()}</p>
                    <p><strong>Expiration date:</strong> {new Date(product.expirationDate).toLocaleDateString()}</p>
                    <p><strong>Batch number:</strong> {product.batchNumber}</p>
                    <p><strong>Delivery note number:</strong> {product.deliveryNoteNumber}</p>
                    <p><strong>Description:</strong> {product.description}</p>

                    <div className="detail-buttons">
                        <button className="delete-btn" onClick={handleDelete}>Delete</button>
                        {deleteMessage && <p className="success-msg">{deleteMessage}</p>}
                        {deleteError && <p className="error-msg">{deleteError}</p>}
                        <button className="back-button" onClick={() => navigate("/products")}>
                        <FaArrowLeft size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;