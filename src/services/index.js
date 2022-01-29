export async function requestCategory() {
  const URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const categoryFetch = await fetch(URL);
  const categoryJson = await categoryFetch.json();
  return categoryJson;
}

export async function requestFoods() {
  const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const foodsFetch = await fetch(URL);
  const foodsJson = await foodsFetch.json();
  return foodsJson;
}

export async function requestNationality() {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  const nationalityFetch = await fetch(URL);
  const nationalityJson = await nationalityFetch.json();
  return nationalityJson;
}

export async function requestIngredients() {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const ingredientsFetch = await fetch(URL);
  const ingredientsJson = await ingredientsFetch.json();
  return ingredientsJson;
}

export async function requestPhoto(ingredientName) {
  const URL = `https://www.themealdb.com/images/ingredients/${ingredientName}.png`;
  const ingredientsFetch = await fetch(URL);
  const ingredientsJson = await ingredientsFetch.json();
  return ingredientsJson;
}
