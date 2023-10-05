import { useState } from "react";
import { recipesService } from "../services/recipesService";
import { Recipe } from "./Home";
import { Loader, MealsSection, Ingredients } from "../components";

export const SearchByIngredient: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [ingredients, setIngredients] = useState<any[]>([]);
    const [ingredient, setIngredient] = useState('');

    const handleClick = async (ingredient: any) => {
        setIsLoading(true);
        setIngredient(ingredient);
        const res = await recipesService.getRecipeByIngredient(ingredient);
        setRecipes(res.meals);
        setIsLoading(false);
    }

    const handleChange = () => {
        //função com o regex e setando os ingredientes
    }

    if (isLoading) {
        return <Loader />
    }

    if (recipes) {
        return (
            <main className={`bg-gray-100 w-full`}>
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
                ingredients={ingredients}
                setIngredients={setIngredients}
                handleClick={handleClick}
                handleChange={handleChange}
            />
        </main>
    )


}