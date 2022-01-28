import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import { HeaderContext } from '../../context/HeaderProvider';

function Drinks() {
  const { setTitle, setBtnSearchIcon } = useContext(HeaderContext);

  useEffect(() => {
    setTitle('Drinks');
    setBtnSearchIcon(true);
  }, [setTitle, setBtnSearchIcon]);

  return (
    <div>
      <Header />
    </div>
  );
}

export default Drinks;
