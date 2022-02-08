import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecomendationFood from '../../components/RecomendationFood';
import RecipesContext from '../../context/RecipesContext';
import { randomMeal, getDrinkById, requestFoods } from '../../services';
import {
  DrinksDetailsContainer,
  DrinksDetailsImage,
  DrinksDetailsTitle,
  DrinksDetailsButton,
  DrinksDetailsCategory,
  DrinksList,
  DrinksListItem,
  DrinksInstructions,
  StartRecipeButton,
  BottomButtonsContainer,
  TopButtonsContainer,
} from './style';

function DrinksDetails() {
  const { id } = useParams();
  /* https://backefront.com.br/como-usar-useparams-react/ tem q fazer por aqui por causa dos testes */
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  const [drinkApi, setDrinkApi] = useState(false);
  const [randomFoodApi, setRandomFoodApi] = useState({});
  const [foods, setFoods] = useState();

  useEffect(() => {
    setTitle('Drinks Details');
    setBtnSearchIcon(false);

    const handleApi = async () => {
      const api = await getDrinkById(id);
      const foodsApi = await requestFoods();
      setFoods(foodsApi);
      // console.log(api);
      const foodRecommendation = await randomMeal();
      // console.log(foodRecommendation);
      setRandomFoodApi(foodRecommendation.meals[0]);
      setDrinkApi(api.drinks);
    };
    handleApi();
  }, [setTitle, setBtnSearchIcon, setDrinkApi, id]);

  const handleIngredient = () => (
    drinkApi && Object.entries(drinkApi[0]).filter((arrayEntrie) => (
      arrayEntrie[0].includes('strIngredient') && arrayEntrie[1] !== null
    ))
  );

  const handlestrMeasure = () => (
    drinkApi && Object.entries(drinkApi[0]).filter((arrayEntrie) => (
      arrayEntrie[0].includes('strMeasure') && arrayEntrie[1] !== ''
    ))
  );
  const MAX_RECOMMENDATIONS = 6;

  return drinkApi && (
    <DrinksDetailsContainer>
      <DrinksDetailsImage
        src={ drinkApi[0].strDrinkThumb }
        data-testid="recipe-photo"
        alt={ drinkApi[0].strDrink }
      />
      <DrinksDetailsTitle
        data-testid="recipe-title"
      >
        { drinkApi[0].strDrink }
      </DrinksDetailsTitle>
      <DrinksDetailsCategory data-testid="recipe-category">
        { drinkApi[0].strAlcoholic }
      </DrinksDetailsCategory>

      <TopButtonsContainer>
        <DrinksDetailsButton
          data-testid="share-btn"
          type="button"
        >
          Share
        </DrinksDetailsButton>
        <DrinksDetailsButton
          data-testid="favorite-btn"
          type="button"
        >
          Favorites
        </DrinksDetailsButton>
      </TopButtonsContainer>

      <DrinksList>
        {
          handleIngredient().map((drink, index) => (
            <DrinksListItem
              key={ drink[0] }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {
                handlestrMeasure()[index].includes(null) ? (
                  `${drink[1]}`
                ) : (
                  `${drink[1]} - ${handlestrMeasure()[index][1]}`
                )
              }
            </DrinksListItem>
          ))
        }
      </DrinksList>
      <DrinksInstructions data-testid="instructions">
        { drinkApi[0].strInstructions }
      </DrinksInstructions>
      <BottomButtonsContainer>
        {
          foods
          && foods.map((_food, index) => (
            index > MAX_RECOMMENDATIONS && (
              <RecomendationFood
                food={ randomFoodApi }
                testID="0-recomendation-card"
                index={ index }
              />
            )
          ))
        }

        <StartRecipeButton
          type="button"
          data-testid="start-recipe-btn"
        >
          Start Recipe
        </StartRecipeButton>
      </BottomButtonsContainer>
    </DrinksDetailsContainer>
  );
}

export default DrinksDetails;
