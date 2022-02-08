const readFavoriteRecipesArrs = () => (
  JSON.parse(localStorage.getItem('favoriteRecipes')) || []
);

const saveFavoriteRecipes = (recipes) => (
  localStorage.setItem('favoriteRecipes', JSON.stringify(recipes))
);

export const addRecipesToFavorites = (currentRecipeObj) => {
  const favoriteRecipes = readFavoriteRecipesArrs();
  const newFavoriteRecipes = [...favoriteRecipes, currentRecipeObj];

  saveFavoriteRecipes(newFavoriteRecipes);
};

export const removeRecipesFromFavorites = (currentRecipeObj) => {
  const favoriteRecipes = readFavoriteRecipesArrs();
  // console.log(currentRecipeObj);
  const newFavoriteRecipes = favoriteRecipes
    .filter((favoriteRecipeObj) => {
      // console.log(Arr.type);
      console.log(currentRecipeObj.type);
      return (
        (Number(favoriteRecipeObj.id) !== Number(currentRecipeObj.id))
        // && (favoriteRecipeObj.type === currentRecipeObj.type)
      );
    });
  saveFavoriteRecipes(newFavoriteRecipes);
};

export const isRecipeFavorite = (recipes) => (
  readFavoriteRecipesArrs()
    .filter((recipe) => (
      recipe.id === recipes.id && recipe.type === recipes.type)));

// recipes = array
// export const isRecipeFavorite = () => (recipes.reduce((acc, recipe) => {
//   acc[pokemon.id] = readFavoriteRecipesArrs().includes(pokemon.id);
//   return acc;
// }, {}));
