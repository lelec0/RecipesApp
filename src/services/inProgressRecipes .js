const readInProgressRecipesArrs = () => (
  JSON.parse(localStorage.getItem('inProgressRecipes')) || {
    cocktails: {
    },
    meals: {
    },
  }
);

const saveInProgressRecipes = (recipes) => (
  localStorage.setItem('inProgressRecipes', JSON.stringify(recipes))
);

export const addRecipesToInProgresss = (type, id, Arr) => {
  const InProgressRecipes = readInProgressRecipesArrs();
  InProgressRecipes[type][id] = Arr;
  saveInProgressRecipes(InProgressRecipes);
};

export const removeRecipesFromInProgresss = (type, id) => {
  const InProgressRecipes = readInProgressRecipesArrs();
  Object.entries(InProgressRecipes).forEach(([key, value]) => {
    Object.entries(value).forEach(([k]) => {
      if (k === id && key === type) {
        delete value[k];
      }
    });
  });
  saveInProgressRecipes(InProgressRecipes);
};

export const isRecipeInProgress = (type, id) => {
  const InProgressRecipes = readInProgressRecipesArrs();
  let pro = false;
  Object.entries(InProgressRecipes).forEach(([key, value]) => {
    Object.entries(value).forEach(([k]) => {
      if (k === id && key === type) {
        pro = true;
      }
    });
  });
  return pro;
};
