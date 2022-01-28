import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import { HeaderContext } from '../../context/HeaderProvider';

function Profile() {
  const { setTitle, setBtnSearchIcon } = useContext(HeaderContext);
  useEffect(() => {
    setTitle('Profile');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);
  return (
    <div>
      <Header />
    </div>
  );
}

export default Profile;
