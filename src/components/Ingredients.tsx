import { useState, useEffect } from "react";
import { recipesService } from "../services/recipesService";
import { Loader, Form } from ".";

interface props {
    handleClick: any;
    handleChange: any;
    ingredients: any;
    setIngredients: any;
}

export const Ingredients: React.FC<props> = ({ handleClick, handleChange, ingredients, setIngredients }: props) => {
    const [isLoading, setIsLoading] = useState(false);

    const fetchIngredients = async () => {
        setIsLoading(true);
        const res = await recipesService.getAllIngredients();
        setIngredients(res.meals);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchIngredients();
    }, []);

    if (isLoading) {
        return <Loader />
    }

    return (
        <section className='max-w-[1200px] mx-auto flex flex-col items-center gap-8 pt-8 px-4'>
            <p className='w-full text-3xl sm:text-4xl text-orange-500 font-bold'>
                Ingredients
            </p>
            <Form
                handleFunction={handleChange}
                placeholder="Search ingredient"
            />
            {ingredients.map((ingredient: any, index: number) => (
                <span
                    key={index}
                    className='bg-white text-2xl font-bold rounded shadow w-full border p-4 cursor-pointer hover:border-orange-500'
                    onClick={() => handleClick(ingredient.strIngredient)}
                >
                    {ingredient.strIngredient}
                </span>
            ))}
        </section>
    )
}