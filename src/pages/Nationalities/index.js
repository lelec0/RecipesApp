import React, { useContext, useEffect } from 'react';
import { Header, Footer } from '../../components';
import RecipesContext from '../../context/RecipesContext';
import { NationalitiesContainer, NationalitiesTitle } from './style';

function Nationalities() {
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);

  useEffect(() => {
    setTitle('Explore Nationalities');
    setBtnSearchIcon(true);
  }, [setTitle, setBtnSearchIcon]);

  return (
    <NationalitiesContainer>
      <Header />
      <NationalitiesTitle>
        Nationalities
      </NationalitiesTitle>
      <Footer />
    </NationalitiesContainer>
  );
}

export default Nationalities;
