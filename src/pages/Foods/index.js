import React, { useContext } from 'react';
import Header from '../../components/Header';
import { HeaderContext } from '../../context/HeaderProvider';

function Foods() {
  const { title } = useContext(HeaderContext);
  console.log(title);
  // useEffect(() => setTitle('foods'), [setTitle]);

  return (
    <div>
      Foods
      <Header />
    </div>
  );
}

export default Foods;
