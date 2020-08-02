import React from 'react';
import './Logo.scss';
import logoImage from './logo.svg';

const Logo = () => {
  return <img className="Logo" src={logoImage} alt="App Logo" />;
};

export default Logo;
