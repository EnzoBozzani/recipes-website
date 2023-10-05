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


    return (
        <>
            <section
                className="w-full bg-no-repeat bg-cover bg-center mb-8 flex flex-col gap-6"
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
                    <span className="text-xl min-[500px]:text-3xl md:text-4xl">Main ingredients:</span>
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
            <section className='max-w-[1200px] min-[1200px]:w-[1200px] mx-6 min-[1200px]:mx-auto mb-8 flex flex-col justify-center items-center gap-6'>
                <p className='font-bold text-orange-500 text-4xl'>All Ingredients</p>
                {
                    recipe?.strIngredient1 &&
                    <span className='bg-white text-xl font-bold rounded shadow w-full border p-4 hover:border-orange-500 flex justify-center'>
                        <span>{recipe?.strIngredient1 || null} <span>•</span> {recipe?.strMeasure1 || null}</span>
                    </span>
                }
                {
                    recipe?.strIngredient2 &&
                    <span className='bg-white text-xl font-bold rounded shadow w-full border p-4 hover:border-orange-500 flex justify-center'>
                        <span>{recipe?.strIngredient2 || null} <span>•</span> {recipe?.strMeasure2 || null}</span>
                    </span>
                }
                {
                    recipe?.strIngredient3 &&
                    <span className='bg-white text-xl font-bold rounded shadow w-full border p-4 hover:border-orange-500 flex justify-center'>
                        <span>{recipe?.strIngredient3 || null} <span>•</span> {recipe?.strMeasure3 || null}</span>
                    </span>
                }
                {
                    recipe?.strIngredient4 &&
                    <span className='bg-white text-xl font-bold rounded shadow w-full border p-4 hover:border-orange-500 flex justify-center'>
                        <span>{recipe?.strIngredient4 || null} <span>•</span> {recipe?.strMeasure4 || null}</span>
                    </span>
                }
                {
                    recipe?.strIngredient5 &&
                    <span className='bg-white text-xl font-bold rounded shadow w-full border p-4 hover:border-orange-500 flex justify-center'>
                        <span>{recipe?.strIngredient5 || null} <span>•</span> {recipe?.strMeasure5 || null}</span>
                    </span>
                }
                {
                    recipe?.strIngredient6 &&
                    <span className='bg-white text-xl font-bold rounded shadow w-full border p-4 hover:border-orange-500 flex justify-center'>
                        <span>{recipe?.strIngredient6 || null} <span>•</span> {recipe?.strMeasure6 || null}</span>
                    </span>
                }
                {
                    recipe?.strIngredient7 &&
                    <span className='bg-white text-xl font-bold rounded shadow w-full border p-4 hover:border-orange-500 flex justify-center'>
                        <span>{recipe?.strIngredient7 || null} <span>•</span> {recipe?.strMeasure7 || null}</span>
                    </span>
                }
                {
                    recipe?.strIngredient8 &&
                    <span className='bg-white text-xl font-bold rounded shadow w-full border p-4 hover:border-orange-500 flex justify-center'>
                        <span>{recipe?.strIngredient8 || null} <span>•</span> {recipe?.strMeasure8 || null}</span>
                    </span>
                }
                {
                    recipe?.strIngredient9 &&
                    <span className='bg-white text-xl font-bold rounded shadow w-full border p-4 hover:border-orange-500 flex justify-center'>
                        <span>{recipe?.strIngredient9 || null} <span>•</span> {recipe?.strMeasure9 || null}</span>
                    </span>
                }
                {
                    recipe?.strIngredient10 &&
                    <span className='bg-white text-xl font-bold rounded shadow w-full border p-4 hover:border-orange-500 flex justify-center'>
                        <span>{recipe?.strIngredient10 || null} <span>•</span> {recipe?.strMeasure10 || null}</span>
                    </span>
                }
                {
                    recipe?.strIngredient11 &&
                    <span className='bg-white text-xl font-bold rounded shadow w-full border p-4 hover:border-orange-500 flex justify-center'>
                        <span>{recipe?.strIngredient11 || null} <span>•</span> {recipe?.strMeasure11 || null}</span>
                    </span>
                }
                {
                    recipe?.strIngredient12 &&
                    <span className='bg-white text-xl font-bold rounded shadow w-full border p-4 hover:border-orange-500 flex justify-center'>
                        <span>{recipe?.strIngredient12 || null} <span>•</span> {recipe?.strMeasure12 || null}</span>
                    </span>
                }
                {
                    recipe?.strIngredient13 &&
                    <span className='bg-white text-xl font-bold rounded shadow w-full border p-4 hover:border-orange-500 flex justify-center'>
                        <span>{recipe?.strIngredient13 || null} <span>•</span> {recipe?.strMeasure13 || null}</span>
                    </span>
                }
                {
                    recipe?.strIngredient14 &&
                    <span className='bg-white text-xl font-bold rounded shadow w-full border p-4 hover:border-orange-500 flex justify-center'>
                        <span>{recipe?.strIngredient14 || null} <span>•</span> {recipe?.strMeasure14 || null}</span>
                    </span>
                }
                {
                    recipe?.strIngredient15 &&
                    <span className='bg-white text-xl font-bold rounded shadow w-full border p-4 hover:border-orange-500 flex justify-center'>
                        <span>{recipe?.strIngredient15 || null} <span>•</span> {recipe?.strMeasure15 || null}</span>
                    </span>
                }
                {
                    recipe?.strIngredient16 &&
                    <span className='bg-white text-xl font-bold rounded shadow w-full border p-4 hover:border-orange-500 flex justify-center'>
                        <span>{recipe?.strIngredient16 || null} <span>•</span> {recipe?.strMeasure16 || null}</span>
                    </span>
                }
                {
                    recipe?.strIngredient17 &&
                    <span className='bg-white text-xl font-bold rounded shadow w-full border p-4 hover:border-orange-500 flex justify-center'>
                        <span>{recipe?.strIngredient17 || null} <span>•</span> {recipe?.strMeasure17 || null}</span>
                    </span>
                }
                {
                    recipe?.strIngredient18 &&
                    <span className='bg-white text-xl font-bold rounded shadow w-full border p-4 hover:border-orange-500 flex justify-center'>
                        <span>{recipe?.strIngredient18 || null} <span>•</span> {recipe?.strMeasure18 || null}</span>
                    </span>
                }
                {
                    recipe?.strIngredient19 &&
                    <span className='bg-white text-xl font-bold rounded shadow w-full border p-4 hover:border-orange-500 flex justify-center'>
                        <span>{recipe?.strIngredient19 || null} <span>•</span> {recipe?.strMeasure19 || null}</span>
                    </span>
                }
                {
                    recipe?.strIngredient20 &&
                    <span className='bg-white text-xl font-bold rounded shadow w-full border p-4 hover:border-orange-500 flex justify-center'>
                        <span>{recipe?.strIngredient20 || null} <span>•</span> {recipe?.strMeasure20 || null}</span>
                    </span>
                }
            </section>
            <p className='max-w-[1200px] text-black leading-7 text-sm sm:text-base mx-6 min-[1200px]:mx-auto rounded-lg border-2 border-black p-4 bg-orange-500 shadow-lg'>
                <span className='text-xl text-black font-bold'>How to prepare it?</span>
                <br />
                <br />
                {recipe?.strInstructions}
            </p>
        </>
    )
}