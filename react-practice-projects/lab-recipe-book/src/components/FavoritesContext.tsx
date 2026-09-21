import { useState, createContext, ReactNode, useContext, Children } from "react";
import { Recipe } from "../types";

interface FavoritesContextType {
    favorites: Recipe[];
    addFavorites: (recipe: Recipe) => void;
    removeFavorites: (id: number) => void;
    isFavorites: (id: number) => boolean
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<Recipe[]>([])
    const addFavorites = (recipe: Recipe) => {
        setFavorites((prev) => [...prev, recipe]);
    };

    const removeFavorites = (id: number) => {
        setFavorites((prev) => prev.filter((r) => r.id !== id));
    };

    const isFavorites = (id: number) => {
        return favorites.some((r) => r.id === id);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorites, removeFavorites, isFavorites }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavorites() {
    const context = useContext(FavoritesContext)
    if (!context) {
        throw new Error("useFavorites must be used within a FavoriteProvider")
    }
    return context;
}