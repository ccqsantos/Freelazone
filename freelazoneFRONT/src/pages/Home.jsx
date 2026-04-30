import React from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Encontre os melhores <span className="highlight">freelancers</span> para seu projeto</h1>
        <p>Conecte-se com profissionais talentosos de todo o Brasil</p>
        <div className="hero-buttons">
          <Link to="/join"><button className="btn-primary-large">Começar agora</button></Link>
          <Link to="/projects"> <button className="btn-outline-large">Ver projetos</button></Link>
        </div>
      </section>

      <section className="features">
        <h2>Por que escolher a FreelaZone?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Rápido e fácil</h3>
            <p>Encontre freelancers em minutos</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Segurança garantida</h3>
            <p>Pagamentos protegidos</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Comunidade global</h3>
            <p>Profissionais de todo o mundo</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;