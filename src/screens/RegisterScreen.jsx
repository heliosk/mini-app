import React from 'react';
import { useHistory } from 'react-router-dom';

import Marca from '../components/Marca';
import Camera from '../assets/images/camera.png';
import Seta from '../assets/images/seta.png';

import '../styles/RegisterScreen.scss';

const RegisterScreen = () => {
  const history = useHistory();

  return (
    <div className='background-pattern'>
      <div className='wrapper'>
        <Marca />
        <div className='register-container'>
          <img
            src={Seta}
            className='seta'
            alt='seta'
            onClick={() => history.push('/')}
          />
          <div className='register-content'>
            <img src={Camera} className='logo' alt='camera' />
            <label>Criar Conta</label>
            <input type='text' className='input' placeholder='Nome' />
            <input
              type='text'
              className='input'
              placeholder='Endereço de e-mail'
            />
            <input type='password' className='input' placeholder='Senha' />
            <button
              className='button primary'
              onClick={() => history.push('/register')}>
              Criar Conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
