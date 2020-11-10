import React from 'react';

import ImgResponsive from '../assets/images/img_responsive.png';
import MarcaMiniApp from '../assets/images/marca_mini_app.png';

const HomeScreen = () => {
  return (
    <div className='background-pattern'>
      <div className='home-logo-box'>
        <img src={ImgResponsive} alt='responsive' />
        <img src={MarcaMiniApp} alt='marca mini app' />
        <div className='button-container'>
          <button className='button orange'>Criar Conta</button>
          <button className='button green'>Entrar</button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
