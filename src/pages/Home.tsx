import { useEffect, useState } from "react";
import { recipesService } from "../services/recipesService";
import { Loader, SuggestSection, MealsSection } from "../components";
export interface Recipe {
    idMeal: string;
    strMeal: string;
    strInstructions: string;
    strMealThumb: string;
    strYoutube: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
}

export const Home: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const recipesList = [];
        for (let i = 0; i < 7; i++) {
            const res = await recipesService.getRandomRecipe();
            const recipe = res.meals[0];
            recipesList.push(recipe);
        }
        setRecipes(recipesList);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return <Loader />
    }


    return (
        <main className='bg-gray-100 w-full'>
            {!isLoading ? <SuggestSection recipe={recipes[0]} /> : null}
            <MealsSection recipes={recipes} title={'Random Recipes'} />
        </main>
    )
}

