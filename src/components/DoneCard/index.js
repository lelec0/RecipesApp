import React from 'react';
import PropTypes from 'prop-types';

function DoneCard({ index }) {
  return (
    <>
      <div>
        <img
          alt="img"
          data-testid={ `${index}-horizontal-image` }
        />
      </div>
      <section>
        <p
          data-testid={ `${index}-horizontal-top-text` }
        />
        <p
          data-testid={ `${index}-horizontal-name` }
        />
      </section>
      <p
        data-testid={ `${index}-horizontal-done-date` }
      />
      <input
        type="image"
        data-testid={ `${index}-horizontal-share-btn` }
        alt="share"
      />
      {/*  <span
        data-testid={ `${index}-${tagName}-horizontal-tag` }
      /> */}
    </>
  );
}

DoneCard.propTypes = {
  index: PropTypes.string.isRequired,
};

export default DoneCard;
