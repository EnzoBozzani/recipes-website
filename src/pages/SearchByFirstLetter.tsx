import { recipesService } from "../services/recipesService";
import { useState } from "react";
import { Recipe } from "./Home";
import { MealsSection, Letters, Loader } from "../components";

export const SearchByFirstLetter: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async (firstLetter: string) => {
        setIsLoading(true);
        const res = await recipesService.getRecipesByFirstLetter(firstLetter);
        setRecipes(res.meals);
        setIsLoading(false);
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <main className={`bg-gray-100 w-full`}>
            <MealsSection
                title='Search Meals by First Letter'
                recipes={recipes}
            >
                <Letters handleClick={handleClick} />
            </MealsSection>
        </main>
    )
}