import { useParams, useNavigate } from "react-router-dom";
import recipes from "../data";

const RecipeDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return (
      <div className="recipe-details" data-testid="recipe-details">
        <p>Recipe not found.</p>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    );
  }

  return (
    <div className="recipe-details" data-testid="recipe-details">
      <h2>{recipe.name}</h2>

      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>

      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default RecipeDetails;
