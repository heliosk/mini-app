import React, { useState } from 'react';

import List from '../components/List';

import Marca from '../components/Marca';
import Avatar from '../assets/images/avatar.png';
import BotaoAdicionar from '../assets/images/botao_adicionar.png';

import '../styles/ListScreen.scss';

const ListScreen = () => {
  const [user, setUser] = useState('user1');

  return (
    <div>
      <header>
        <div className='header-content'>
          <Marca />
          <div>
            <img src={Avatar} className='user' alt='avatar' />
            <p className='username'>{user}</p>
          </div>
        </div>
      </header>

      <br />
      <br />
      <div className='list-container'>
        <div className='list-header'>
          <span>Listas</span>
          <div>
            <img src={BotaoAdicionar} alt='botao adicionar' />
          </div>
        </div>
        <List id='1' />
        <List id='2' />
        <List id='3' />
      </div>
    </div>
  );
};

export default ListScreen;
