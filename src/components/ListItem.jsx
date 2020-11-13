import React from 'react';
import DeletarTarefa from '../assets/images/icone_deletar_lista.png';

import '../styles/components/ListItem.scss';

const ListItem = () => {
  return (
    <div className='items'>
      <div>
        <input type='checkbox' name='task' className='cb-task' />
        <label htmlFor='task'>Tarefa</label>
      </div>
      <div>
        <img src={DeletarTarefa} alt='Deletar tarefa' />
      </div>
    </div>
  );
};

export default ListItem;
