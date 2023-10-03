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
            <section
                className="w-full bg-no-repeat bg-cover bg-center mb-16 flex flex-col gap-6"
                style={{
                    backgroundImage: `linear-gradient(to bottom, #6666661a, #f3f4f6),
            url(${recipe?.strMealThumb})`,
                    height: '500px'
                }}
            >
                <p
                    className='font-bold text-orange-500 text-3xl min-[500px]:text-5xl md:text-6xl ms-4 sm:ms-16 mt-16'
                    style={{ WebkitTextStroke: '.5px #000' }}
                >
                    {recipe?.strMeal}
                </p>
                <p className="ms-4 sm:ms-16 mt-16 text-base min-[500px]:text-xl md:text-2xl">
                    <span className="text-xl min-[500px]:text-3xl md:text-4xl">Some ingredients:</span>
                    <br />
                    <span className="flex gap-2">
                        <span>{recipe?.strIngredient1}</span>
                        <span>•</span>
                        <span>{recipe?.strIngredient2}</span>
                        <span>•</span>
                        <span>{recipe?.strIngredient3} </span>
                    </span>
                </p>
                <a
                    className="flex justify-center border-black border-2 text-black bg-orange-500 ms-4 w-48 sm:ms-16 mt-16 px-2 py-1 sm:px-4 sm:py-2 rounded hover:bg-orange-600 cursor-pointer"
                    href={recipe?.strYoutube}
                    target="_blank"
                >
                    YouTube
                </a>
            </section>
            <p className='text-black leading-7 text-sm sm:text-base ms-4 sm:ms-16 me-4 sm:me-8 rounded-lg border-2 border-black p-4 bg-orange-500 shadow-lg'>
                <span className='text-xl text-black font-bold'>How to prepare it?</span>
                <br />
                <br />
                {recipe?.strInstructions}
            </p>
        </>
    )
}