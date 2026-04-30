import React from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="logo">
              <span className="logo-icon"></span>
              <span className="logo-text-footer">Freela<span className="logo-highlight">Zone</span></span>
            </div>
            <p className="footer-description">
              Conectando talentos freelancers a projetos incríveis.
            </p>
          </div>

          <div className="footer-section">
            <h4>Plataforma</h4>
            <ul>
              <li><Link className="nav-link" to="/projects">Projetos</Link></li>
              <li><Link className="nav-link" to="/freelancers">Freelancers</Link></li>
              <li><Link className="nav-link" to="/about">Como funciona</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Suporte</h4>
            <ul>
              <li><Link className="nav-link" to="/help">Central de ajuda</Link></li>
              <li><a href="/contact">Contato</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="/terms">Termos de uso</a></li>
              <li><a href="/privacy">Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 FreelaZone. Todos os direitos reservados.</p>
          <div className="social-links">
            <a href="#" className="social-link">📘</a>
            <a href="#" className="social-link">🐦</a>
            <a href="#" className="social-link">📷</a>
            <a href="#" className="social-link">💼</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;