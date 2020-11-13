import React from 'react';
import { useHistory } from 'react-router-dom';

import Brand from '../components/Brand';
import Seta from '../assets/images/seta.png';
import '../styles/LoginScreen.scss';

const LoginScreen = () => {
  const history = useHistory();

  return (
    <div className='background-pattern'>
      <div className='wrapper'>
        <Brand />
        <div className='login-container'>
          <img
            src={Seta}
            className='seta'
            alt='seta'
            onClick={() => history.push('/')}
          />
          <div className='login-content'>
            <label>Entrar</label>
            <input type='text' className='input' placeholder='Nome' />
            <input type='text' className='input' placeholder='Senha' />
            <button
              className='button secondary'
              onClick={() => history.push('/register')}>
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
