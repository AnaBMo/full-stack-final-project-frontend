import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./RecipeDetail.css";
import { AuthContext } from "../../context/AuthContext";
import RecipeViewImg from "../../assets/recipe-view.png";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


function RecipeDetail() {
  const { token } = useContext(AuthContext);
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  const getRecipeById = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/recipes/${recipeId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setRecipe(res.data))
      .catch(err => console.error("Error fetching recipe:", err));
  };

  useEffect(() => {
    getRecipeById();
  }, []);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-detail">
      <h2>{recipe.name}</h2>
      <div className="recipe-detail-content">
        <img src={RecipeViewImg} alt="Illustration of a recipe" />

        <div className="recipe-detail-info">
          <p><strong>Preparation date:</strong> {new Date(recipe.preparationDate).toLocaleDateString()}</p>
          <p><strong>Expiration date:</strong> {new Date(recipe.expirationDate).toLocaleDateString()}</p>
          <p><strong>Ingredients:</strong></p>
          <span className="can-click">You can click on the ingredient to see the product in detail.</span>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.product?._id ? (
                  <Link to={`/products/${ingredient.product._id}`} state={{ from: "recipe" }}>
                    {ingredient.product.name}
                  </Link>
                ) : (
                  "Unknown product"
                )}
              </li>
            ))}
          </ul>
          <p><strong>Created by:</strong> {recipe.createdByEmail}</p>

          <button className="back-button" onClick={() => navigate("/recipes")}>
            <FaArrowLeft size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;