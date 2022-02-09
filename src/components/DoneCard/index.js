import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  DoneCardContainer,
  CardImage,
  CardButton,
  CardTitle,
  ImageContainer,
  CardContainer,
  TextContainer,
} from './style';
import { ShareButton } from '..';

function DoneCard({ element, index }) {
  const [link, setLink] = useState('foods');
  const { id, type, category, nationality,
    alcoholicOrNot, name, image, doneDate, tags } = element;
  const [isloading, setIsloading] = useState(true);
  const maxtags = 2;

  useEffect(() => {
    setIsloading(false);
  }, [link]);

  useEffect(() => {
    if (type === 'food') {
      setLink('foods');
    } else {
      setLink('drinks');
    }
  }, [type]);

  return (
    !isloading && (
      <DoneCardContainer>
        <ImageContainer>
          <Link to={ `/${link}/${id}` } style={ { textDecoration: 'none' } }>
            <CardButton type="button">
              <CardImage
                data-testid={ `${index}-horizontal-image` }
                src={ image }
                alt={ image }
              />
            </CardButton>
          </Link>
        </ImageContainer>
        <CardContainer>
          {
            link === 'foods'
              ? (
                <TextContainer data-testid={ `${index}-horizontal-top-text` }>
                  {`${nationality} - ${category}`}
                </TextContainer>)
              : (
                <TextContainer data-testid={ `${index}-horizontal-top-text` }>
                  {alcoholicOrNot}
                </TextContainer>)
          }
          <ShareButton
            testID={ `${index}-horizontal-share-btn` }
            linkCopied={ `http://localhost:3000/${link}/${id}` }
          />
          <Link to={ `/${link}/${id}` } style={ { textDecoration: 'none' } }>
            <CardButton type="button">
              <CardTitle data-testid={ `${index}-horizontal-name` }>
                {name}
              </CardTitle>
            </CardButton>
          </Link>

          <TextContainer data-testid={ `${index}-horizontal-done-date` }>
            {doneDate}
          </TextContainer>

          <TextContainer data-testid={ `${index}-horizontal-done-date` }>
            {doneDate}
          </TextContainer>
          {
            tags
              && tags.map((tag, i) => (
                i < maxtags && (
                  <span
                    data-testid={ `${index}-${tag}-horizontal-tag` }
                    key={ i }
                  >
                    {tag}
                  </span>
                )
              ))
          }
        </CardContainer>

      </DoneCardContainer>
    )
  );
}

DoneCard.propTypes = {
  index: PropTypes.string.isRequired,
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    doneDate: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

export default DoneCard;

// [{
//   id: id-da-receita,
//   type: comida-ou-bebida,
//   nationality: nacionalidade-da-receita-ou-texto-vazio,
//   category: categoria-da-receita-ou-texto-vazio,
//   alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
//   name: nome-da-receita,
//   image: imagem-da-receita,
//   doneDate: quando-a-receita-foi-concluida,
//   tags: array-de-tags-da-receita-ou-array-vazio
// }]
