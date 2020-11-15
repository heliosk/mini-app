import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Brand from './Brand';
import Avatar from '../assets/images/avatar.png';

import '../styles/components/Header.scss';

const Header = () => {
  const userRegister = useSelector((state) => state.userRegister);
  const { users } = userRegister;

  const history = useHistory();

  const [name, setName] = useState('');

  // useEffect(() => {
  //   users === undefined ? history.push('/') : setName(users.name);
  // }, [users, history]);

  return (
    <header>
      <div className='header-content'>
        <Brand />
        <div>
          <img src={Avatar} className='user' alt='avatar' />
          <p className='username'>{name}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
