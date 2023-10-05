import { useState } from "react";
import { recipesService } from "../services/recipesService";
import { Recipe } from "./Home";
import { Loader, MealsSection, Ingredients } from "../components";

export const SearchByIngredient: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [ingredient, setIngredient] = useState('');

    const handleClick = async (ingredient: any) => {
        setIsLoading(true);
        setIngredient(ingredient);
        const res = await recipesService.getRecipeByIngredient(ingredient);
        setRecipes(res.meals);
        setIsLoading(false);
    }

    if (isLoading) {
        return <Loader />
    }

    if (recipes) {
        return (
            <main className={`bg-gray-100 w-full`}>
                <div className="max-w-[1200px] mx-auto mt-2">
                    <button
                        className='ms-6 md:ms-32 rounded px-4 py-1 border-2 border-black bg-orange-500 shadow'
                        onClick={() => setRecipes(undefined)}
                    >
                        Return
                    </button>
                </div>
                <MealsSection
                    title={`Meals with ${ingredient}`}
                    recipes={recipes}
                />
            </main>
        )
    }

    return (
        <main className={`bg-gray-100 w-full`}>
            <Ingredients
                handleClick={handleClick}
            />
        </main>
    )


}