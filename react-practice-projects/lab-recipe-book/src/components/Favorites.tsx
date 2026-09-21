import RecipeCard from "./RecipeCard";
import { useFavorites } from "./FavoritesContext";

const Favorites: React.FC = () => {
  const { favorites } = useFavorites();

  return (
    <div className="favorites-container">
      {favorites.length === 0 ? (
        <p data-testid="no-favorites">No favorites yet!</p>
      ) : (
        <div data-testid="favorites-list">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
