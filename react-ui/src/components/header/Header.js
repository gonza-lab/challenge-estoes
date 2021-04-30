import React from 'react';
import logo from './logo.png';
import './Header.scss';

export const Header = () => {
  return(
    <div className="header">
      <img alt="Logo" src={logo}  />
    </div>
  );
};
