import { Recipe } from "../pages/Home";
import { RecipeCard } from ".";
import { ReactNode } from "react";

interface props {
    recipes?: Recipe[] | undefined;
    title: string;
    children?: ReactNode
}

export const MealsSection: React.FC<props> = ({ recipes, title, children }: props) => {
    return (
        <section className='max-w-[1200px] mx-auto flex justify-center flex-wrap gap-8 pt-8'>
            <p className='w-full ps-6 text-3xl md:ps-32 sm:text-4xl text-orange-500 font-bold'>{title}</p>
            {children}
            {
                recipes ?
                    recipes?.map((recipe: Recipe, index: number) => index !== 0 ? <RecipeCard key={index} recipe={recipe} /> : null)
                    :
                    <p className='text-black font-bold text-xl mt-32'>Receitas não encontradas</p>
            }
        </section>
    )
}
