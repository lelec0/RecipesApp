import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecommendationDrink from '../../components/RecommendationDrink';
import RecipesContext from '../../context/RecipesContext';
import { getFoodById, randomDrink } from '../../services';
import {
  FoodDetailsContainer,
  FoodDetailsImage,
  FoodDetailsTitle,
  FoodDetailsButton,
  FoodDetailsCategory,
  FoodRecipeCategory,
  FoodDetailsList,
  FoodDetailsListItem,
  FoodDetailsInstructions,
  VideoFrame,
  TopButtonsContainer,
  StartRecipeButton,
  BottomButtonsContainer,
} from './style';

function FoodDetails() {
  const { id } = useParams();
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  const [foodApi, setFoodApi] = useState(false);
  const [drinksRandom, setDrinksRandom] = useState();

  useEffect(() => {
    setTitle('Foods Details');
    setBtnSearchIcon(false);
    const handleApi = async () => {
      try {
        const api = await getFoodById(id);
        setFoodApi(api.meals);
        const MAX_RANDOM_DRINKS = 6;
        const drinkRandom = await randomDrink(MAX_RANDOM_DRINKS);
        setDrinksRandom(drinkRandom);
      } catch (error) {
        console.log(error);
      }
    };
    handleApi();
  }, [setFoodApi, id, setTitle, setBtnSearchIcon]);

  const handleIngredient = () => (
    foodApi && Object.entries(foodApi[0]).filter((arrayEntrie) => (
      arrayEntrie[0].includes('strIngredient') && arrayEntrie[1] !== ''
    ))
  );

  const handlestrMeasure = () => (
    foodApi && Object.entries(foodApi[0]).filter((arrayEntrie) => (
      arrayEntrie[0].includes('strMeasure') && arrayEntrie[1] !== ' '
    ))
  );

  const getId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const number = 11;
    if (match && match[2].length === number) {
      const videoId = match[2];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return '';
  };

  return (
    foodApi && (
      <FoodDetailsContainer>
        <FoodDetailsImage
          src={ foodApi[0].strMealThumb }
          data-testid="recipe-photo"
          alt={ foodApi[0].strMeal }
        />
        <FoodDetailsTitle
          data-testid="recipe-title"
        >
          { foodApi[0].strMeal }
        </FoodDetailsTitle>
        <FoodDetailsCategory
          data-testid="recipe-category"
        >
          { foodApi[0].strCategory }
        </FoodDetailsCategory>

        <TopButtonsContainer>
          <FoodDetailsButton
            data-testid="share-btn"
            type="button"
          >
            Share
          </FoodDetailsButton>
          <FoodDetailsButton
            data-testid="favorite-btn"
            type="button"
          >
            Favorites
          </FoodDetailsButton>
        </TopButtonsContainer>

        <FoodRecipeCategory data-testid="recipe-category">
          { foodApi.strCategory }
        </FoodRecipeCategory>
        <FoodDetailsList>
          {
            handleIngredient().map((meal, index) => (
              <FoodDetailsListItem
                key={ meal[1] }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                { `${meal[1]} - ${handlestrMeasure()[index][1]}` }
              </FoodDetailsListItem>
            ))
          }
        </FoodDetailsList>
        <FoodDetailsInstructions data-testid="instructions">
          { foodApi[0].strInstructions }
        </FoodDetailsInstructions>
        {/* {
          foodApi
          && (
            <VideoFrame
              data-testid="video"
              title="Recipe Video"
              width="747"
              height="420"
              src={ foodApi[0].strYoutube }
            />
          )
        } */}
        {
          foodApi
          && (
            <VideoFrame
              data-testid="video"
              title="Recipe Video"
              width="747"
              height="420"
              src={ getId(foodApi[0].strYoutube) }
            />
          )
        }
        <BottomButtonsContainer>
          {
            drinksRandom
            && drinksRandom.map((drinkRandom, index) => (
              <RecommendationDrink
                key={ index }
                testID="0-recomendation-card"
                drinkRandom={ drinkRandom }
                index={ index }
              />
            ))
          }
          <StartRecipeButton
            type="button"
            data-testid="start-recipe-btn"
          >
            Start Recipe
          </StartRecipeButton>
        </BottomButtonsContainer>
      </FoodDetailsContainer>
    )
  );
}

export default FoodDetails;
