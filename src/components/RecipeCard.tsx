import { Recipe } from "../pages/Home";
import { Link } from "react-router-dom";

interface props {
    recipe: Recipe;
}

export const RecipeCard: React.FC<props> = ({ recipe }: props) => {
    return (
        <div className='flex flex-col w-1/4 rounded hover:scale-105 hover:border hover:border-black hover:border-solid transition duration-500'>
            <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className='rounded-t'
            />
            <p className='px-4'>
                {recipe.strMeal}
            </p>
            <p className='px-4'>
                {recipe.strInstructions.slice(0, 60)}...
                <Link to={'/link para a página específica da receita'} className='text-gray-500 italic'>Click to see more</Link>
            </p>
            <button className='border-black bg-orange-500'>
                Recipe in YouTube
            </button>
        </div>
    )
}