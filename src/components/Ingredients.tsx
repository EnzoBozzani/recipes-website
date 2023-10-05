import { useState, useEffect } from "react";
import { recipesService } from "../services/recipesService";
import { Loader } from ".";
import data from '../../ingredients.json';

interface props {
    handleClick: any;
}

const allIngredients = data.meals.map((ing: any) => ing.strIngredient);

export const Ingredients: React.FC<props> = ({ handleClick }: props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [ingredients, setIngredients] = useState<any[]>([]);

    const fetchIngredients = async () => {
        setIsLoading(true);
        const res = await recipesService.getAllIngredients();
        setIngredients(res.meals.map((ing: any) => ing.strIngredient));
        setIsLoading(false);
    }

    const handleChange = (ev: any) => {
        const regex = new RegExp(ev.target.value, 'i');
        const filteredIngredients = allIngredients.filter((ingredientName: string) => regex.test(ingredientName) ? ingredientName : null);
        setIngredients(filteredIngredients);
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
            <input
                type="text"
                className='w-full mx-6 md:mx-32 p-3 focus:outline-none border-2 focus:border-orange-500 rounded'
                placeholder='Search ingredient'
                onChange={(ev) => handleChange(ev)}
            />
            {
                ingredients.length === 0 ?
                    <p className='text-black font-bold text-xl mt-32 mx-auto'>
                        Nenhum ingrediente encontrado
                    </p>
                    :
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                        {ingredients.map((ing: any, index: number) => (
                            <span
                                key={index}
                                className='bg-white text-2xl font-bold rounded shadow w-full border p-4 cursor-pointer hover:border-orange-500'
                                onClick={() => handleClick(ing)}
                            >
                                {ing}
                            </span>
                        ))}
                    </div>
            }
        </section>
    )
}