import React, { useState } from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import Marca from '../components/Marca';
import Avatar from '../assets/images/avatar.png';
import IconeLista from '../assets/images/icone_lista.png';
import EditarTarefa from '../assets/images/icone_editar.png';
import DeletarTarefa from '../assets/images/icone_deletar_lista.png';
import BotaoAdicionar from '../assets/images/botao_adicionar.png';
import '../styles/ListScreen.scss';

const ListScreen = () => {
  const [user, setUser] = useState('user1');

  const ab = [1, 2];

  const handleClick = () => {
    console.log('handle click');
  };

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

      <div className='title'>
        <p>Listas</p>
      </div>
      <div className='coll-list'>
        {ab.map((a) => {
          return (
            <Accordion allowZeroExpanded={true} className='list-header'>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div>
                      <img src={IconeLista} alt='icone lista' /> List Header
                    </div>
                    <div className='list-header-options'>
                      <img
                        src={EditarTarefa}
                        alt='editar tarefa'
                        onClick={handleClick}
                        className='delete'
                      />
                      <img src={DeletarTarefa} alt='deletar tarefa' />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='list-content'>
                  <div className='tarefa-content'>
                    <input type='text' className='input primary' />
                  </div>

                  <div className='tarefa-checkbox'>
                    <div className='checkbox'>
                      <input type='checkbox' name='tarefa1' />
                      <label for='tarefa1'>Tarefa 1</label>
                    </div>
                    <img src={DeletarTarefa} alt='deletar tarefa' />
                  </div>

                  <hr />
                  <div className='subtarefa-checkbox'>
                    <div className='subtarefa checkbox'>
                      <input type='checkbox' name='subtarefa1' />
                      <label for='subtarefa1'>Sub Tarefa 1</label>
                    </div>
                    <img src={DeletarTarefa} alt='deletar tarefa' />
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default ListScreen;
