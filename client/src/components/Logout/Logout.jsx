import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authentication';

import logoutIcon from '../../assets/image/logout.png';

const Logout = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <span onClick={logoutHandler} tabIndex="0" role="button" onKeyDown={logoutHandler}>
      <img src={logoutIcon} alt="logout" />
    </span>
  );
};

export default Logout;
