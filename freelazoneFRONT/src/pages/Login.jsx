import React, { useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import '../css/Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
    // Aqui vai a lógica de autenticação
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Bem-vindo de volta</h2>
          <p>Faça login para continuar na FreelaZone</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <div className="input-icon">
              <span className="icon">📧</span>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <div className="input-icon password-input">
              <span className="icon">🔒</span>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
              <button 
                type="button"
                className="password-toggle-btn"
                onClick={togglePasswordVisibility}
                tabIndex="-1"
              >
                {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <span>Lembrar de mim</span>
            </label>
            <a href="/forgot-password" className="forgot-link">
              Esqueceu a senha?
            </a>
          </div>

          <button type="submit" className="btn-auth-primary">
            Entrar
          </button>

          <div className="auth-divider">
            <span>ou continue com</span>
          </div>

          <div className="social-login">
            <button type="button" className="btn-social">
              <span>G</span> Google
            </button>
            <button type="button" className="btn-social">
              <span>f</span> Facebook
            </button>
            <button type="button" className="btn-social">
              <span>in</span> LinkedIn
            </button>
          </div>
        </form>

        <div className="auth-footer">
          <p>
            Não tem uma conta? <a href="/join" className="auth-link">Cadastre-se grátis</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;