export const recipesService = {
    getRandomRecipe: async () => {
        const res = await fetch('https://themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json());
        return res;
    }
}