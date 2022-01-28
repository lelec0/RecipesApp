import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import { HeaderContext } from '../../context/HeaderProvider';

function Foods() {
  const { setTitle, setBtnSearchIcon } = useContext(HeaderContext);

  useEffect(() => {
    setTitle('Foods');
    setBtnSearchIcon(true);
  }, [setTitle, setBtnSearchIcon]);

  return (
    <div>
      <Header />
    </div>
  );
}

export default Foods;
