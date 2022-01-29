import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, CategoryText, CategoryImage } from './style';

function CategoriesButton({ category }) {
  const { strCategory, strCategoryThumb } = category;
  console.log(category);
  return (
    <ButtonContainer
      type="button"
    >
      <CategoryImage
        src={ strCategoryThumb }
        alt={ strCategory }
      />
      <CategoryText>
        { strCategory }
      </CategoryText>
    </ButtonContainer>
  );
}

CategoriesButton.propTypes = {
  category: PropTypes.shape({
    strCategory: PropTypes.string.isRequired,
    strCategoryThumb: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoriesButton;
