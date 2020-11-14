import React from 'react';
import { useHistory } from 'react-router-dom';
import MarcaMiniApp from '../assets/images/marca_mini_app.png';

const Brand = () => {
  const history = useHistory();

  return (
    <div className='brand'>
      <img
        src={MarcaMiniApp}
        alt='marca mini app'
        onClick={() => history.push('/')}
      />
    </div>
  );
};

export default Brand;
