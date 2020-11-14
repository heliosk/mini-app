import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

import Brand from '../components/Brand';
import Camera from '../assets/images/camera.png';
import Seta from '../assets/images/seta.png';

import '../styles/RegisterScreen.scss';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const history = useHistory();

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || password === '') {
      setMessage('É necessário preencher todos os campos!');
    } else {
      dispatch(register(name, email, password));

      history.push('/list');
    }
  };

  return (
    <div className='background-pattern'>
      <div className='wrapper'>
        <Brand />
        <form className='register-container' onSubmit={submitHandler}>
          <img
            src={Seta}
            className='seta'
            alt='seta'
            onClick={() => history.push('/')}
          />
          <div className='register-content'>
            <img src={Camera} className='logo' alt='camera' />
            <label>Criar Conta</label>
            <input
              type='text'
              className='input'
              placeholder='Nome'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='email'
              className='input'
              placeholder='Endereço de e-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              className='input'
              placeholder='Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit' className='button primary'>
              Criar Conta
            </button>
            {message && <span className='error'>{message}</span>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
