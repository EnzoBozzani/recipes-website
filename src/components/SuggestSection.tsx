import { Recipe } from "../pages/Home"
import { Link } from "react-router-dom"

interface props {
    recipe: Recipe | undefined
}

export const SuggestSection: React.FC<props> = ({ recipe }: props) => {

    return (
        <section
            className="w-full bg-no-repeat bg-cover bg-center mb-16 flex flex-col"
            style={{
                backgroundImage: `linear-gradient(to bottom, #6666661a, #f3f4f6),
            url(${recipe?.strMealThumb})`,
                height: '500px'
            }}
        >
            <p
                className='text-bold text-2xl sm:text-4xl md:text-6xl ms-4 sm:ms-16 mt-16'
                style={{ WebkitTextStroke: '1px #000' }}
            >
                SUGGESTED FOR YOU: <br />
                <span className='italic text-orange-500'>{recipe?.strMeal}</span>
            </p>
            <Link
                to={`/${recipe?.idMeal}`}
                className="flex justify-center border-black border-2 text-black bg-orange-500 ms-4 w-48 sm:ms-16 mt-16 px-4 py-2 rounded hover:bg-orange-600 cursor-pointer"
            >
                Check it
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                className="mt-32 w-12 h-12 mx-auto"
            >
                <path fillRule="evenodd" d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z" clipRule="evenodd" />
            </svg>

        </section>
    )
}