import { useParams } from "react-router-dom";
import { recipesService } from "../services/recipesService";
import { useEffect, useState } from "react";
import { Recipe } from "./Home";
import { Loader } from "../components";

export const RecipePage: React.FC = () => {
    const { recipeId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [recipe, setRecipe] = useState<Recipe>()

    const fetchData = async () => {
        setIsLoading(true);
        const recipe = await recipesService.getRecipeById(recipeId!);
        setRecipe(recipe.meals[0]);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    console.log(recipe);

    return (
        <>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit at, ea eius ipsa harum asperiores. Incidunt iure rem dicta sequi, repellendus ab a rerum laudantium, vitae quos adipisci id blanditiis.</p>
        </>
    )
}