import React, { useContext, useEffect } from 'react';
import { Header, Footer } from '../../components';
import RecipesContext from '../../context/RecipesContext';
import { ExploreContainer, ExploreTitle } from './style';

function Explore() {
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);

  useEffect(() => {
    setTitle('Explore');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);

  return (
    <ExploreContainer>
      <Header />
      <ExploreTitle>
        Explore
      </ExploreTitle>
      <Footer />
    </ExploreContainer>
  );
}

export default Explore;
