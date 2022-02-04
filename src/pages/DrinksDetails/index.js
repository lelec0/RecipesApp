import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DrinkCard } from '../../components';
import RecipesContext from '../../context/RecipesContext';
import { getDrinkById, randomDrink } from '../../services';
import {
  DrinksDetailsContainer,
  DrinksDetailsImage,
  DrinksDetailsTitle,
  DrinksDetailsButton,
  DrinksDetailsCategory,
  DrinksList,
  DrinksListItem,
  DrinksInstructions,
} from './style';

function DrinksDetails() {
  const { id } = useParams();
  /* https://backefront.com.br/como-usar-useparams-react/ tem q fazer por aqui por causa dos testes */
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  const [drinkApi, setDrinkApi] = useState(false);
  const [randomDrinkApi, setRandomDrinkApi] = useState({});

  useEffect(() => {
    setTitle('Drinks Details');
    setBtnSearchIcon(false);

    const handleApi = async () => {
      const api = await getDrinkById(id);
      const drinkRecommendation = await randomDrink();
      setRandomDrinkApi(drinkRecommendation.drinks[0]);
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
      <DrinksDetailsCategory data-testid="recipe-category">
        { drinkApi[0].strAlcoholic }
      </DrinksDetailsCategory>
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
      <DrinkCard
        drinks={ randomDrinkApi }
        testID="0-recomendation-card"
      />
      <DrinksDetailsButton
        type="button"
        data-testid="start-recipe-btn"
      >
        Start Recipe
      </DrinksDetailsButton>
    </DrinksDetailsContainer>
  );
}

export default DrinksDetails;
