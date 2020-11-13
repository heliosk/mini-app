import React, { useState } from 'react';

import List from '../components/List';
import Header from '../components/Header';

import BotaoAdicionar from '../assets/images/botao_adicionar.png';
import '../styles/ListScreen.scss';

const ListScreen = () => {
  return (
    <div>
      <Header />
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
