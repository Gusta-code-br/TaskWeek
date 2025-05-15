import React from 'react';
import '../styles/components/Header.css';
import logo from '../assets/images/logo-TaskWeek.png';

function Header() {
  return (
    <header className="header">
      <img id="imagemlogo" src={logo} width='200' alt="Logo Taskweek" className="logo" />
      <h1 className="title">Bem vindo ao seu sistema de controle de atividades! Task Week!</h1>
    </header>
  );
}

export default Header;
