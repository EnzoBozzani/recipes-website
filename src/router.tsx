import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./components";
import { Home, RecipePage, SearchByFirstLetter, SearchByIngredient, SearchByName } from "./pages";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'searchByName',
                element: <SearchByName />
            },
            {
                path: 'searchByFirstLetter',
                element: <SearchByFirstLetter />
            },
            {
                path: 'searchByIngredient',
                element: <SearchByIngredient />
            },
            {
                path: 'recipes/:recipeId',
                element: <RecipePage />
            },
        ]
    }
]);

export default router;