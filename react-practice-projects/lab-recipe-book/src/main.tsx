import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FavoritesProvider } from "./components/FavoritesContext.tsx";

createRoot(document.getElementById("root")!).render(
    <FavoritesProvider>
        <App />
    </FavoritesProvider>
);
