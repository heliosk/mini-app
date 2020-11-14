import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Brand from '../components/Brand';
import Seta from '../assets/images/seta.png';
import '../styles/LoginScreen.scss';

const LoginScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const history = useHistory();

  const userRegister = useSelector((state) => state.userRegister);
  const { users } = userRegister;

  const submitHandler = (e) => {
    e.preventDefault();

    if (name === '' || password === '') {
      setMessage('É necessário preencher todos os campos!');
    } else {
      if (users) {
        if (users.name === name && users.password === password) {
          history.push('/list');
        }
      } else {
        setMessage('Usuário não está cadastrado!');
      }
    }
  };

  return (
    <div className='background-pattern'>
      <div className='wrapper'>
        <Brand />
        <form className='login-container' onSubmit={submitHandler}>
          <img
            src={Seta}
            className='seta'
            alt='seta'
            onClick={() => history.push('/')}
          />
          <div className='login-content'>
            <label>Entrar</label>
            <input
              type='text'
              className='input'
              placeholder='Nome'
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='password'
              className='input'
              placeholder='Senha'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit' className='button secondary'>
              Entrar
            </button>
            {message && <span className='error'>{message}</span>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
