import { Link } from "react-router-dom";
import { Recipe } from "../types";
import { useFavorites } from "./FavoritesContext";

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  const { isFavorites, addFavorites, removeFavorites } = useFavorites();
  const favorited = isFavorites(recipe.id);

  const handleClick = () => {
    if (favorited) {
      removeFavorites(recipe.id)
    } else {
      addFavorites(recipe)
    }
  }
  return (
    <div className="recipe-card" data-testid="recipe-card">
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
      <div className="card-actions">
        <button onClick={handleClick}>{favorited ? "Remove from Favorites" : "Add to Favorites"}</button>
        <Link to={`/recipe/${recipe.id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default RecipeCard;
