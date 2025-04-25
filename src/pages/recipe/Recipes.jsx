import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import "./Recipes.css";
import { useNavigate } from "react-router-dom";

function Recipes() {
  const { user, token } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const navigate = useNavigate();

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

  function filterByDate() {
    if (!selectedDate) return;
    axios
      .get(`${import.meta.env.VITE_API_URL}/recipes/date/${selectedDate}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => console.error("Error fetching recipes by date:", err));
  }

  const handleNewCooking = () => {
    if (user) {
      navigate("/recipes/new");
    } else {
      navigate("/login");
    }
  }

  return (
    <div className="recipes-container">
      <h1>Recipes</h1>
      <div className="recipes-btns">
        <button className="link-to-form" onClick={handleNewCooking}>New Cooking</button>
        <button onClick={getAllRecipes}>All Recipes</button>
        <div className="prepared-on">
          <div className="preparation-date">
            <p>Preparation date</p>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
          <button onClick={filterByDate}>View recipes</button>
        </div>
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