import React, { useState } from 'react';
import ListItem from '../components/ListItem';

import IconeLista from '../assets/images/icone_lista.png';
import EditarTarefa from '../assets/images/icone_editar.png';

import BotaoAdicionar from '../assets/images/botao_adicionar.png';
import DeletarTarefa from '../assets/images/icone_deletar_lista.png';

import '../styles/components/List.scss';

const List = ({ id }) => {
  const [showContent, setShowContent] = useState(false);

  const onEdit = () => {
    console.log('on edit');
  };

  const onClickTitle = () => {
    console.log('on click title');
    setShowContent(!showContent);
  };

  return (
    <div className='tab'>
      <input
        className='tab-input'
        type='checkbox'
        id={`cb${id}`}
        onClick={onClickTitle}
      />
      <label className='tab-label' htmlFor={`cb${id}`}>
        <div className='title'>
          <img src={IconeLista} alt='Lista tarefas' /> Item 1
        </div>
        <div className='icones'>
          <img src={EditarTarefa} alt='Editar tarefa' onClick={onEdit} />
          <img src={DeletarTarefa} alt='Deletar tarefa' />
        </div>
      </label>
      <div className={`tab-content ${showContent ? 'show' : 'hide'}`}>
        <input
          type='text'
          className='add-tarefa-input'
          placeholder='Adicionar tarefa'
        />
        <img src={BotaoAdicionar} className='btn-add' alt='adicionar tarefa' />

        <div className='task-title'>
          <div className='task-content'>
            <ListItem />
          </div>
          <hr />
          <div className='sub-task-content'>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </div>

          <div className='subtask-input'>
            <input
              type='text'
              className='add-tarefa-input'
              placeholder='Adicionar subtarefa'
            />
            <img
              src={BotaoAdicionar}
              className='btn-add'
              alt='adicionar tarefa'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
