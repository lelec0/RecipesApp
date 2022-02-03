import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipesContext from '../../context/RecipesContext';
import { getFoodById } from '../../services';
import {
  FoodDetailsContainer,
  FoodDetailsImage,
  FoodDetailsTitle,
  FoodDetailsButton,
} from './style';

function FoodDetails() {
  const { id } = useParams();
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  const [foodApi, setFoodApi] = useState(false);
  useEffect(() => {
    setTitle('Foods Details');
    setBtnSearchIcon(false);
    const handleApi = async () => {
      const api = await getFoodById(id);
      // console.log(Object.entries(api.meals[0]));
      setFoodApi(api.meals);
    };
    handleApi();
  }, [setFoodApi, id, setTitle, setBtnSearchIcon]);
  // console.log(foodApi);
  const handleIngredient = () => (
    foodApi && Object.entries(foodApi[0]).filter((arrayEntrie) => (
      arrayEntrie[0].includes('strIngredient') && arrayEntrie[1] !== ''
    )));
  const handlestrMeasure = () => (
    foodApi && Object.entries(foodApi[0]).filter((arrayEntrie) => (
      arrayEntrie[0].includes('strMeasure') && arrayEntrie[1] !== ' '
    )));
  // foodApi && console.log(foodApi[0].strYoutube);
  console.log(foodApi);
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
        <FoodDetailsTitle // mudar para categoria
          data-testid="recipe-category"
        >
          { foodApi[0].strCategory }
        </FoodDetailsTitle>
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
        <p data-testid="recipe-category">
          { foodApi.strCategory }
        </p>
        <ul>
          {
            handleIngredient().map((food, index) => (
              <li key={ food[1] } data-testid={ `${index}-ingredient-name-and-measure` }>
                { `${food[1]} - ${handlestrMeasure()[index][1]}` }
              </li>
            ))
          }
        </ul>
        <p data-testid="instructions">
          { foodApi[0].strInstructions }
        </p>
        {
          foodApi
          && (
            <iframe
              data-testid="video"
              title="Recipe Video"
              width="747"
              height="420"
              src={ foodApi[0].strYoutube }
            />
          )
        }
      </FoodDetailsContainer>
    )
  );
}

export default FoodDetails;
