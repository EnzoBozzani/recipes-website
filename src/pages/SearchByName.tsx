import { useState } from "react";
import { MealsSection, Form, Loader } from "../components";
import { recipesService } from "../services/recipesService";
import { Recipe } from "./Home";

export const SearchByName: React.FC = () => {

    const [name, setName] = useState('');
    const [recipes, setRecipes] = useState<Recipe[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);

    const handleKeyPress = async (name: string, ev?: any) => {
        setIsLoading(true);
        setName(ev.target.value);
        if (ev.key === 'Enter') {
            setRecipes(undefined);
            if (name !== '') {
                const res = await recipesService.getRecipeByName(name);
                setRecipes(res.meals);
            }
        }
        setIsLoading(false);
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <main className={`bg-gray-100 w-full`}>
            <MealsSection
                title='Search Meals by Name'
                recipes={recipes}>
                <Form
                    value={name}
                    setValue={setName}
                    placeholder="Search recipe name (then press ENTER!)"
                    handleFunction={handleKeyPress}
                />
            </MealsSection>
        </main>
    )
}