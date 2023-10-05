export const recipesService = {
    getRandomRecipe: async () => {
        const res = await fetch('https://themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json());
        return res;
    },

    getRecipeById: async (id: string) => {
        const res = await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.json());
        return res;
    },

    getAllIngredients: async () => {
        const res = await fetch('https://themealdb.com/api/json/v1/1/list.php?i=list')
            .then(response => response.json());
        return res;
    },

    getRecipeByName: async (name: string) => {
        const res = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${name}`)
            .then(response => response.json());
        return res;
    },

    getRecipesByFirstLetter: async (firstLetter: string) => {
        const res = await fetch(`https://themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`)
            .then(response => response.json());

        return res;
    },

    getRecipeByIngredient: async (ingredient: string) => {
        const res = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
            .then(response => response.json());
        return res;
    }
}