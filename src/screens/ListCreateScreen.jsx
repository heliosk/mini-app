import React from 'react';
import Header from '../components/Header';
import ListItem from '../components/ListItem';

import BotaoAdicionar from '../assets/images/botao_adicionar.png';
import DeletarTarefa from '../assets/images/icone_deletar_lista.png';
import IconeLista from '../assets/images/icone_lista.png';
import EditarTarefa from '../assets/images/icone_editar.png';

import '../styles/ListCreateScreen.scss';

const ListCreateScreen = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <div className='create-container'>
        <p className='create-title'>Criar Lista</p>
        <div>
          <input
            type='text'
            className='add-tarefa-input large'
            placeholder='Digite o nome da lista'
          />
        </div>
        <div>
          <input
            type='text'
            className='add-tarefa-input large'
            placeholder='Adicionar subtarefa'
          />
          <img
            src={BotaoAdicionar}
            className='btn-add'
            alt='adicionar tarefa'
          />
        </div>
        <div className='create-button-container'>
          <button className='button secondary'>Cancelar</button>
          <button className='button primary'>Criar Lista</button>
        </div>

        <div className='create-task'>
          <div className='title'>
            <img src={IconeLista} alt='Lista tarefas' /> Item 1
          </div>
          <div className='icones'>
            <img src={EditarTarefa} alt='Editar tarefa' />
            <img src={DeletarTarefa} alt='Deletar tarefa' />
          </div>
        </div>
        <hr className='split' />
        <div className='create-items'>
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </div>
    </div>
  );
};

export default ListCreateScreen;
