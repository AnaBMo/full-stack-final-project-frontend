import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css";
import { FaArrowLeft } from "react-icons/fa";
import ProductViewImg from '../../assets/product-view.png'

function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [deleteMessage, setDeleteMessage] = useState("");
    const [deleteError, setDeleteError] = useState("");
    const [confirmingDelete, setConfirmingDelete] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    function getProductById() {
        axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`)
            .then((response) => setProduct(response.data))
            .catch((error) => console.error("Error fetching product:", error));
    }

    useEffect(() => {
        getProductById()
    }, []);

    if (!product) return <p>Loading...</p>;

    const confirmDelete = async () => {
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

    const handleBack = () => {
        if (location.state?.from === "recipe") {
            navigate(-1); // vuelve a la receta desde la que viniste
        } else {
            navigate("/products"); // navegación normal
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
                        <button className="back-button" onClick={handleBack}>
                            <FaArrowLeft size={24} />
                        </button>
                        {!confirmingDelete ? (
                            <button className="delete-btn" onClick={() => setConfirmingDelete(true)}>Delete</button>
                        ) : (
                            <>
                                <button className="cancel-btn" onClick={() => setConfirmingDelete(false)}>No, cancel</button>
                                <button className="delete-btn" onClick={confirmDelete}>Yes, delete</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;