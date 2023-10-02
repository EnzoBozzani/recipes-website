import { useEffect, useState } from "react";
import { recipesService } from "../services/recipesService";
import { RecipeCard } from "../components/RecipeCard";
export interface Recipe {
    strMeal: string;
    strInstructions: string;
    strMealThumb: string;
    strYoutube: string;
}

export const Home: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>();

    const fetchData = async () => {
        const res = await recipesService.getRandomRecipe();
        const recipe = res.meals[0];
        const test = [];
        for (let i = 0; i < 9; i++) {
            test.push(recipe);
        }
        setRecipes(test);
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <main className='bg-gray-100 w-full'>
            <section className='max-w-[1200px] mx-auto flex justify-center flex-wrap gap-8 pt-8'>
                {recipes?.map((recipe: Recipe, index: number) => <RecipeCard key={index} recipe={recipe} />)}
            </section>
        </main>
    )
}

