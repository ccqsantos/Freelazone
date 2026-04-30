import React, { useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import '../css/Auth.css';

const Join = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'freelancer',
    agreeTerms: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Nome completo é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'E-mail é obrigatório';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'E-mail inválido';
    if (!formData.password) newErrors.password = 'Senha é obrigatória';
    else if (formData.password.length < 6) newErrors.password = 'Senha deve ter no mínimo 6 caracteres';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'As senhas não coincidem';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'Você precisa aceitar os termos';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log('Cadastro data:', formData);
      // Aqui vai a lógica de cadastro
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card join-card">
        <div className="auth-header">
          <h2>Crie sua conta</h2>
          <p>Junte-se à maior comunidade de freelancers do Brasil</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="fullName">Nome completo</label>
            <div className="input-icon">
              <span className="icon">👤</span>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="João Silva"
              />
            </div>
            {errors.fullName && <span className="error-message">{errors.fullName}</span>}
          </div>

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
                placeholder="joao@email.com"
              />
            </div>
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-row">
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
                />
                <button 
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex="-1"
                >
                  {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                </button>
              </div>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar senha</label>
              <div className="input-icon password-input">
                <span className="icon">✓</span>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                />
                <button 
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  tabIndex="-1"
                >
                  {showConfirmPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                </button>
              </div>
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Tipo de conta</label>
            <div className="user-type-selector">
              <label className={`type-option ${formData.userType === 'freelancer' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="userType"
                  value="freelancer"
                  checked={formData.userType === 'freelancer'}
                  onChange={handleChange}
                />
                <span className="type-icon">💼</span>
                <span className="type-name">Freelancer</span>
                <span className="type-desc">Ofereça seus serviços</span>
              </label>
              <label className={`type-option ${formData.userType === 'client' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="userType"
                  value="client"
                  checked={formData.userType === 'client'}
                  onChange={handleChange}
                />
                <span className="type-icon">🏢</span>
                <span className="type-name">Cliente</span>
                <span className="type-desc">Contrate profissionais</span>
              </label>
            </div>
          </div>

          <label className="checkbox-label terms-checkbox">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            <span>
              Eu concordo com os <a href="/terms">Termos de Serviço</a> e{' '}
              <a href="/privacy">Política de Privacidade</a>
            </span>
          </label>
          {errors.agreeTerms && <span className="error-message">{errors.agreeTerms}</span>}

          <button type="submit" className="btn-auth-primary">
            Criar conta gratuita
          </button>

          <div className="auth-divider">
            <span>ou cadastre-se com</span>
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
            Já tem uma conta? <a href="/login" className="auth-link">Faça login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Join;