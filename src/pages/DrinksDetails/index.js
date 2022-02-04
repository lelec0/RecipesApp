import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { DrinkCard } from '../../components';
// import { Header, Footer } from '../../components';
import RecipesContext from '../../context/RecipesContext';
import { getDrinkById } from '../../services';
import {
  DrinksDetailsContainer,
  DrinksDetailsImage,
  DrinksDetailsTitle,
  DrinksDetailsButton,
} from './style';

function DrinksDetails() {
  const { id } = useParams();
  /* https://backefront.com.br/como-usar-useparams-react/ tem q fazer por aqui por causa dos testes */
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  const [drinkApi, setDrinkApi] = useState(false);
  useEffect(() => {
    setTitle('Drinks Details');
    setBtnSearchIcon(false);
    const handleApi = async () => {
      const api = await getDrinkById(id);
      // console.log(Object.entries(api.drinks[0]));
      console.log(api);
      setDrinkApi(api.drinks);
    };
    handleApi();
  }, [setTitle, setBtnSearchIcon, setDrinkApi, id]);
  const handleIngredient = () => (
    drinkApi && Object.entries(drinkApi[0]).filter((arrayEntrie) => (
      arrayEntrie[0].includes('strIngredient') && arrayEntrie[1] !== null
    )));
  const handlestrMeasure = () => (
    drinkApi && Object.entries(drinkApi[0]).filter((arrayEntrie) => (
      arrayEntrie[0].includes('strMeasure') && arrayEntrie[1] !== ''
    )));
  console.log(handlestrMeasure());
  return (
    <div>
      {
        drinkApi && (
          <DrinksDetailsContainer>
            <DrinksDetailsImage
              src={ drinkApi[0].strDrinkThumb }
              data-testid="recipe-photo"
              alt={ drinkApi[0].strDrink }
            />
            <DrinksDetailsTitle
              data-testid="recipe-title"
            >
              { drinkApi[0].strDrinks }
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
            <p data-testid="recipe-category">
              { drinkApi[0].strCategory }
            </p>
            <ul>
              {
                handleIngredient().map((drink, index) => (
                  <li
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
                  </li>
                ))
              }
            </ul>
            <p data-testid="instructions">
              { drinkApi[0].strInstructions }
            </p>
            {
              drinkApi
              && (
                <iframe
                  data-testid="video"
                  title="Recipe Video"
                  width="747"
                  height="420"
                  // src={ drinkApi[0].strYoutube }
                />
              )
            }
            {/* <DrinkCard
              testID="0-recomendation-card"
              food={ food }
            /> */}
          </DrinksDetailsContainer>
        )
      }
    </div>
  );
}

export default DrinksDetails;
