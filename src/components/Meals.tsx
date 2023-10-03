import { Recipe } from "../pages/Home";
import { RecipeCard } from ".";

interface props {
    recipes: Recipe[] | undefined;
    title: string;
}

export const MealsSection: React.FC<props> = ({ recipes, title }: props) => {
    return (
        <section className='max-w-[1200px] mx-auto flex justify-center flex-wrap gap-8 pt-8'>
            <p className='w-full ps-6 text-3xl md:ps-32 sm:text-4xl text-orange-500 font-bold'>{title}</p>
            {recipes?.map((recipe: Recipe, index: number) => index !== 0 ? <RecipeCard key={index} recipe={recipe} /> : null)}
        </section>
    )
}