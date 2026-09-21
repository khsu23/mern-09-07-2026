import { Recipe } from "../types";
import RecipeCard from "./RecipeCard";
import recipes from "../data";
import { useState } from "react";

const RecipeList: React.FC = () => {
  const [query, setQuery] = useState("");
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(query.toLowerCase()))
  return (
    <div className="recipe-list-container">
      {/* TODO: implement search bar (filter recipes by name, case insensitive) */}
      <input
        type="text"
        placeholder="Search recipes..."
        className="search-input"
        data-testid="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* TODO: render a RecipeCard for each recipe that matches the search query */}
      <div className="recipe-list" data-testid="recipe-list">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <p data-testid="no-recipes-message">No recipes match your search.</p>
      )}
    </div>
  );
};

export default RecipeList;
