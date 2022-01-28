import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import { HeaderContext } from '../../context/HeaderProvider';

function Nationalities() {
  const { setTitle, setBtnSearchIcon } = useContext(HeaderContext);
  useEffect(() => {
    setTitle('Explore Nationalities');
    setBtnSearchIcon(true);
  }, [setTitle, setBtnSearchIcon]);
  return (
    <div>
      <Header />
    </div>
  );
}

export default Nationalities;
