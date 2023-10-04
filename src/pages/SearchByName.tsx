import { useState } from "react";
import { MealsSection, Form } from "../components";
import { recipesService } from "../services/recipesService";
import { Recipe } from "./Home";

export const SearchByName: React.FC = () => {

    const [name, setName] = useState('');
    const [recipes, setRecipes] = useState<Recipe[] | undefined>(undefined);

    const handleKeyPress = async (name: string, ev?: any) => {
        setName(ev.target.value);
        if (ev.key === 'Enter') {
            setRecipes([]);
            if (name !== '') {
                const res = await recipesService.getRecipeByName(name);
                setRecipes(res.meals);
            }
        }
    }

    return (
        <main className={`bg-gray-100 w-full`}>
            <MealsSection
                title='Search by name'
                recipes={recipes}>
                <Form
                    value={name}
                    setValue={setName}
                    placeholder="Search recipe name (then press ENTER!)"
                    handleKeyPress={handleKeyPress}
                />
            </MealsSection>
        </main>
    )
}