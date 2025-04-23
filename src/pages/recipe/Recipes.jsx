import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import "./Recipes.css";

function Recipes() {
  const { token } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);

  const getAllRecipes = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/recipes`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setRecipes(res.data))
      .catch((err) => console.error("Error fetching recipes:", err));
  };

  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <div className="recipes-container">
      <h1>Recipes</h1>

      <div className="recipes-btns">
        <Link className="link-to-form" to="/recipes/new">
          <button>New Cooking</button>
        </Link>
      </div>

      <div className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Link
              to={`/recipes/${recipe._id}`}
              key={recipe._id}
              className="recipe-card"
            >
              <h3>{recipe.name}</h3>
              <p>
                Prepared:{" "}
                {new Date(recipe.preparationDate).toLocaleDateString()}
              </p>
              <p>
                Expires:{" "}
                {new Date(recipe.expirationDate).toLocaleDateString()}
              </p>
            </Link>
          ))
        ) : (
          <p>No recipes created yet.</p>
        )}
      </div>
    </div>
  );
}

export default Recipes;