import React from 'react';
import { useHistory } from 'react-router-dom';

import Marca from '../components/Marca';
import ImgResponsive from '../assets/images/img_responsive.png';

const HomeScreen = () => {
  const history = useHistory();

  return (
    <div className='background-pattern'>
      <div className='home-logo-box'>
        <img src={ImgResponsive} alt='responsive' />
        <Marca />
        <div className='button-container'>
          <button
            className='button primary'
            onClick={() => history.push('/register')}>
            Criar Conta
          </button>
          <button
            className='button secondary'
            onClick={() => history.push('/login')}>
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
