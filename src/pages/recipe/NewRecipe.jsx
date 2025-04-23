import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { FaArrowLeft } from "react-icons/fa";
import "./NewRecipe.css";

function NewRecipe() {
    const { user, token } = useContext(AuthContext);
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        ingredients: [],
        preparationDate: "",
        expirationDate: ""
    });
    const [success, setSuccess] = useState("");

    const getAllProducts = () => {
        axios.get(`${import.meta.env.VITE_API_URL}/products`)
            .then(res => setProducts(res.data))
            .catch(err => console.error("Error fetching products:", err));
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleIngredientSelect = (e) => {
        const selectedId = e.target.value;
        if (selectedId && !formData.ingredients.includes(selectedId)) {
            setFormData({
                ...formData,
                ingredients: [...formData.ingredients, selectedId],
            });
        }
    };

    const removeIngredient = (idToRemove) => {
        setFormData({
            ...formData,
            ingredients: formData.ingredients.filter(id => id !== idToRemove),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted", formData);
        try {
            console.log("🟡 Token being sent:", token);
            await axios.post(`${import.meta.env.VITE_API_URL}/recipes`, {
                ...formData, createdBy: user.uid
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setSuccess("Recipe created successfully!");
            setFormData({ name: "", ingredients: [], preparationDate: "", expirationDate: "" });
        } catch (err) {
            console.error("Error creating recipe:", err);
            setSuccess("");
        }
    };

    return (
        <div className="new-recipe-page">
            <div className="title-wrapper">
                <h2>NEW COOKING</h2>
            </div>
            <div className="form-wrapper">
                <form className="new-recipe-form" onSubmit={handleSubmit}>
                    <label>Recipe name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    <div className="ingredients-container">
                    <label>Ingredients</label>
                    <select onChange={handleIngredientSelect}>
                        <option value="">Select an ingredient</option>
                        {products.map(product => (
                            <option key={product._id} value={product._id}>
                                {product.name} - {new Date(product.expirationDate).toLocaleDateString()}
                            </option>
                        ))}
                    </select>
                    <div className="selected-ingredients">
                        {formData.ingredients.map(id => {
                            const product = products.find(p => p._id === id);
                            return (
                                <span key={id} className="ingredient-tag">
                                    {product?.name}
                                    <button type="button" className="delete-ingredient" onClick={() => removeIngredient(id)}>x</button>
                                </span>
                            );
                        })}
                    </div>
                    </div>

                    <label>Preparation date</label>
                    <input type="date" name="preparationDate" value={formData.preparationDate} onChange={handleChange} required />

                    <label>Expiration date</label>
                    <input type="date" name="expirationDate" value={formData.expirationDate} onChange={handleChange} required />

                    <p><strong>Created by:</strong> {user?.email}</p>

                    <button type="submit">Create</button>
                    {success && <p className="success-msg">{success}</p>}

                    <button className="back-button" onClick={() => navigate("/recipes")} type="button">
                        <FaArrowLeft size={24} />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default NewRecipe;