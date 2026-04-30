import React, { useState } from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon"></span>
          <span className="logo-text-header">Freela<span className="logo-highlight">Zone</span></span>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link className="nav-link" to="/">Início</Link>
          <Link className="nav-link" to="/projects">Projetos</Link>
          <Link className="nav-link" to="/freelancers">Freelancers</Link>
          <Link className="nav-link" to="/profile">Perfil</Link>
        </nav>

        <div className="header-actions">
          <Link to="/login">
            <button className="btn-outline">Entrar</button>
          </Link>
          <Link to="/join">
            <button className="btn-primary">Cadastrar</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;