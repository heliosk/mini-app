import React from 'react';

import Brand from './Brand';
import Avatar from '../assets/images/avatar.png';

import '../styles/components/Header.scss';

const Header = () => {
  return (
    <header>
      <div className='header-content'>
        <Brand />
        <div>
          <img src={Avatar} className='user' alt='avatar' />
          <p className='username'>user</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
