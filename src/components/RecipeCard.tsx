import { Recipe } from "../pages/Home";
import { Link } from "react-router-dom";

interface props {
    recipe: Recipe;
}

export const RecipeCard: React.FC<props> = ({ recipe }: props) => {
    return (
        <div
            className='flex flex-col justify-between w-full mx-8 md:mx-0 md:w-1/4 rounded-md hover:scale-105 hover:border-2   
            hover:border-orange-500 hover:border-solid transition duration-500 bg-white'>
            <Link to={`/recipes/${recipe.idMeal}`}>
                <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className='rounded-t object-cover h-48 w-full'
                />
            </Link>
            <p className={`px-4 text-lg font-bold mt-4 ${recipe.strInstructions ? null : 'mb-6'}`}>
                {recipe.strMeal}
            </p>
            {
                recipe.strInstructions ?
                    <p className='px-4 mb-4'>
                        {recipe.strInstructions.slice(0, 60)}...
                        <Link to={`/recipes/${recipe.idMeal}`} className='text-gray-500 italic'>Click here to see more</Link>
                    </p>
                    : null
            }
            <a
                className='border-black bg-orange-500 mx-auto mb-4 text-gray-100 px-4 py-2 rounded hover:bg-orange-600 cursor-pointer'
                href={recipe.strYoutube}
                target="_blank"
            >
                Recipe in YouTube
            </a>
        </div>
    )
}