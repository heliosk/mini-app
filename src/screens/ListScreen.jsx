import React, { useState } from 'react';

import Marca from '../components/Marca';
import Avatar from '../assets/images/avatar.png';
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
    </div>
  );
};

export default ListScreen;
