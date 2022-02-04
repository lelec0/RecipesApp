import React, { useContext, useEffect } from 'react';
import { Header, Footer } from '../../components';
import RecipesContext from '../../context/RecipesContext';
import { ExploreFoodContainer, ExploreFoodTitle } from './style';

function ExploreFood() {
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);

  useEffect(() => {
    setTitle('Explore Foods');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);

  return (
    <ExploreFoodContainer>
      <Header />
      <ExploreFoodTitle>
        Explore Food
      </ExploreFoodTitle>
      <Footer />
    </ExploreFoodContainer>
  );
}

export default ExploreFood;
