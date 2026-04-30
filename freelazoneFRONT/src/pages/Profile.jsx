import React, { useState, useEffect } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill, BsPencil, BsSave, BsX } from 'react-icons/bs';
import '../css/Profile.css';

const Profile = () => {
  // Simulação de estado de autenticação
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  // Dados do usuário cadastrado (simulado)
  const [userData, setUserData] = useState({
    fullName: 'Ana Carolina Silva',
    email: 'ana.silva@email.com',
    userType: 'freelancer',
    phone: '(11) 98765-4321',
    location: 'São Paulo, SP',
    bio: 'Desenvolvedora Full Stack com 5 anos de experiência. Especializada em React, Node.js e Python. Apaixonada por criar soluções inovadoras e entregar projetos de alta qualidade.',
    skills: ['React', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL'],
    hourlyRate: 85,
    portfolio: 'https://portfolio-ana.com',
    github: 'https://github.com/anacarolina',
    linkedin: 'https://linkedin.com/in/anacarolina',
    avatar: '👩‍💻',
    completedProjects: 47,
    rating: 4.9,
    memberSince: '2023-05-15'
  });

  // Dados do formulário de cadastro (não logado)
  const [registerData, setRegisterData] = useState({
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
  const [editFormData, setEditFormData] = useState({ ...userData });
  const [successMessage, setSuccessMessage] = useState('');
  const [activeTab, setActiveTab] = useState('profile'); // profile, security, payments

  // Simular login já existente para demonstração
  // Comente esta linha para testar o estado não logado
  // useEffect(() => {
  //   setIsLoggedIn(true);
  // }, []);

  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterData({
      ...registerData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value
    });
  };

  const handleSkillsChange = (e) => {
    const skillsArray = e.target.value.split(',').map(skill => skill.trim());
    setEditFormData({
      ...editFormData,
      skills: skillsArray
    });
  };

  const validateRegister = () => {
    const newErrors = {};
    if (!registerData.fullName.trim()) newErrors.fullName = 'Nome completo é obrigatório';
    if (!registerData.email.trim()) newErrors.email = 'E-mail é obrigatório';
    else if (!/\S+@\S+\.\S+/.test(registerData.email)) newErrors.email = 'E-mail inválido';
    if (!registerData.password) newErrors.password = 'Senha é obrigatória';
    else if (registerData.password.length < 6) newErrors.password = 'Senha deve ter no mínimo 6 caracteres';
    if (registerData.password !== registerData.confirmPassword) newErrors.confirmPassword = 'As senhas não coincidem';
    if (!registerData.agreeTerms) newErrors.agreeTerms = 'Você precisa aceitar os termos';
    return newErrors;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const newErrors = validateRegister();
    if (Object.keys(newErrors).length === 0) {
      // Simular cadastro bem-sucedido
      setSuccessMessage('Cadastro realizado com sucesso! Redirecionando...');
      setTimeout(() => {
        setIsLoggedIn(true);
        setUserData({
          ...userData,
          fullName: registerData.fullName,
          email: registerData.email,
          userType: registerData.userType
        });
        setSuccessMessage('');
      }, 2000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleSaveEdit = () => {
    setUserData(editFormData);
    setIsEditing(false);
    setSuccessMessage('Perfil atualizado com sucesso!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleCancelEdit = () => {
    setEditFormData({ ...userData });
    setIsEditing(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData({
      fullName: 'Ana Carolina Silva',
      email: 'ana.silva@email.com',
      userType: 'freelancer',
      phone: '(11) 98765-4321',
      location: 'São Paulo, SP',
      bio: 'Desenvolvedora Full Stack com 5 anos de experiência...',
      skills: ['React', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL'],
      hourlyRate: 85,
      portfolio: 'https://portfolio-ana.com',
      github: 'https://github.com/anacarolina',
      linkedin: 'https://linkedin.com/in/anacarolina',
      avatar: '👩‍💻',
      completedProjects: 47,
      rating: 4.9,
      memberSince: '2023-05-15'
    });
  };

  // Componente de usuário não cadastrado
  const NotLoggedIn = () => (
    <div className="profile-not-logged">
      <div className="not-logged-card">
        <div className="not-logged-icon">🔐</div>
        <h2>Você não está logado</h2>
        <p>Faça login ou crie uma conta para acessar seu perfil</p>
        <div className="not-logged-actions">
          <button onClick={() => window.location.href = '/login'} className="btn-primary">
            Fazer login
          </button>
          <button onClick={() => document.querySelector('.register-section').scrollIntoView({ behavior: 'smooth' })} 
                  className="btn-outline">
            Criar conta
          </button>
        </div>
      </div>
    </div>
  );

  // Componente de perfil do usuário logado
  const LoggedIn = () => (
    <div className="profile-logged">
      {successMessage && (
        <div className="success-message success-floating">{successMessage}</div>
      )}

      <div className="profile-header-card">
        <div className="profile-avatar-large">{userData.avatar}</div>
        <div className="profile-header-info">
          <h1>{userData.fullName}</h1>
          <p className="profile-user-type">
            {userData.userType === 'freelancer' ? '💼 Freelancer' : '🏢 Cliente'}
          </p>
          <div className="profile-stats">
            {userData.userType === 'freelancer' && (
              <>
                <div className="stat-badge">
                  <span className="stat-value">⭐ {userData.rating}</span>
                  <span className="stat-label">Avaliação</span>
                </div>
                <div className="stat-badge">
                  <span className="stat-value">{userData.completedProjects}</span>
                  <span className="stat-label">Projetos</span>
                </div>
                <div className="stat-badge">
                  <span className="stat-value">${userData.hourlyRate}</span>
                  <span className="stat-label">/hora</span>
                </div>
              </>
            )}
            <div className="stat-badge">
              <span className="stat-value">Membro desde {new Date(userData.memberSince).toLocaleDateString('pt-BR')}</span>
            </div>
          </div>
        </div>
        <button onClick={handleLogout} className="btn-logout">
          Sair
        </button>
      </div>

      <div className="profile-tabs">
        <button 
          className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Perfil
        </button>
        <button 
          className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
          onClick={() => setActiveTab('security')}
        >
          Segurança
        </button>
        {userData.userType === 'freelancer' && (
          <button 
            className={`tab-btn ${activeTab === 'payments' ? 'active' : ''}`}
            onClick={() => setActiveTab('payments')}
          >
            Pagamentos
          </button>
        )}
      </div>

      <div className="profile-content">
        {activeTab === 'profile' && (
          <div className="profile-info-section">
            <div className="section-header">
              <h2>Informações Pessoais</h2>
              {!isEditing && (
                <button onClick={() => setIsEditing(true)} className="btn-edit">
                  <BsPencil /> Editar
                </button>
              )}
            </div>

            {isEditing ? (
              <div className="edit-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Nome completo</label>
                    <input
                      type="text"
                      name="fullName"
                      value={editFormData.fullName}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={editFormData.email}
                      onChange={handleEditChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Telefone</label>
                    <input
                      type="text"
                      name="phone"
                      value={editFormData.phone}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Localização</label>
                    <input
                      type="text"
                      name="location"
                      value={editFormData.location}
                      onChange={handleEditChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Biografia</label>
                  <textarea
                    name="bio"
                    rows="4"
                    value={editFormData.bio}
                    onChange={handleEditChange}
                  />
                </div>

                {userData.userType === 'freelancer' && (
                  <>
                    <div className="form-group">
                      <label>Habilidades (separadas por vírgula)</label>
                      <input
                        type="text"
                        name="skills"
                        value={editFormData.skills.join(', ')}
                        onChange={handleSkillsChange}
                        placeholder="React, Node.js, Python"
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Valor por hora (USD)</label>
                        <input
                          type="number"
                          name="hourlyRate"
                          value={editFormData.hourlyRate}
                          onChange={handleEditChange}
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="form-group">
                  <label>Portfólio</label>
                  <input
                    type="url"
                    name="portfolio"
                    value={editFormData.portfolio}
                    onChange={handleEditChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>GitHub</label>
                    <input
                      type="url"
                      name="github"
                      value={editFormData.github}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>LinkedIn</label>
                    <input
                      type="url"
                      name="linkedin"
                      value={editFormData.linkedin}
                      onChange={handleEditChange}
                    />
                  </div>
                </div>

                <div className="edit-actions">
                  <button onClick={handleSaveEdit} className="btn-save">
                    <BsSave /> Salvar
                  </button>
                  <button onClick={handleCancelEdit} className="btn-cancel">
                    <BsX /> Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <div className="profile-details">
                <div className="detail-row">
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">{userData.email}</span>
                </div>
                {userData.phone && (
                  <div className="detail-row">
                    <span className="detail-label">Telefone:</span>
                    <span className="detail-value">{userData.phone}</span>
                  </div>
                )}
                {userData.location && (
                  <div className="detail-row">
                    <span className="detail-label">Localização:</span>
                    <span className="detail-value">{userData.location}</span>
                  </div>
                )}
                {userData.bio && (
                  <div className="detail-row bio-row">
                    <span className="detail-label">Sobre mim:</span>
                    <p className="detail-value">{userData.bio}</p>
                  </div>
                )}

                {userData.userType === 'freelancer' && (
                  <>
                    <div className="detail-row">
                      <span className="detail-label">Habilidades:</span>
                      <div className="skills-list">
                        {userData.skills.map((skill, index) => (
                          <span key={index} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Valor por hora:</span>
                      <span className="detail-value">${userData.hourlyRate}/hora</span>
                    </div>
                  </>
                )}

                <div className="detail-row">
                  <span className="detail-label">Links:</span>
                  <div className="links-list">
                    {userData.portfolio && (
                      <a href={userData.portfolio} target="_blank" rel="noopener noreferrer" className="link-item">
                        🌐 Portfólio
                      </a>
                    )}
                    {userData.github && (
                      <a href={userData.github} target="_blank" rel="noopener noreferrer" className="link-item">
                        💻 GitHub
                      </a>
                    )}
                    {userData.linkedin && (
                      <a href={userData.linkedin} target="_blank" rel="noopener noreferrer" className="link-item">
                        🔗 LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'security' && (
          <div className="security-section">
            <div className="section-header">
              <h2>Segurança da Conta</h2>
            </div>
            
            <div className="security-card">
              <h3>Alterar Senha</h3>
              <form className="security-form">
                <div className="form-group">
                  <label>Senha atual</label>
                  <input type="password" placeholder="••••••••" />
                </div>
                <div className="form-group">
                  <label>Nova senha</label>
                  <input type="password" placeholder="••••••••" />
                </div>
                <div className="form-group">
                  <label>Confirmar nova senha</label>
                  <input type="password" placeholder="••••••••" />
                </div>
                <button type="submit" className="btn-update-password">
                  Atualizar senha
                </button>
              </form>
            </div>

            <div className="security-card">
              <h3>Autenticação de Dois Fatores (2FA)</h3>
              <p>Adicione uma camada extra de segurança à sua conta</p>
              <button className="btn-enable-2fa">
                Ativar 2FA
              </button>
            </div>

            <div className="security-card danger-zone">
              <h3>Zona de Perigo</h3>
              <p>Excluir sua conta permanentemente</p>
              <button className="btn-delete-account">
                Excluir conta
              </button>
            </div>
          </div>
        )}

        {activeTab === 'payments' && userData.userType === 'freelancer' && (
          <div className="payments-section">
            <div className="section-header">
              <h2>Configurações de Pagamento</h2>
            </div>

            <div className="payment-card">
              <h3>Métodos de Pagamento</h3>
              <div className="payment-method">
                <div className="payment-icon">💳</div>
                <div className="payment-info">
                  <p className="payment-type">Cartão de crédito</p>
                  <p className="payment-details">**** **** **** 4242</p>
                </div>
                <button className="btn-edit-payment">Editar</button>
              </div>
              <div className="payment-method">
                <div className="payment-icon">🏦</div>
                <div className="payment-info">
                  <p className="payment-type">Transferência bancária</p>
                  <p className="payment-details">Banco do Brasil - Ag: 1234 - Conta: 56789-0</p>
                </div>
                <button className="btn-edit-payment">Editar</button>
              </div>
              <button className="btn-add-payment">
                + Adicionar método de pagamento
              </button>
            </div>

            <div className="payment-card">
              <h3>Histórico de Pagamentos</h3>
              <div className="transaction">
                <div className="transaction-info">
                  <p className="transaction-project">Projeto: E-commerce Website</p>
                  <p className="transaction-date">15/11/2024</p>
                </div>
                <p className="transaction-amount">R$ 5.000,00</p>
              </div>
              <div className="transaction">
                <div className="transaction-info">
                  <p className="transaction-project">Projeto: Mobile App Design</p>
                  <p className="transaction-date">01/11/2024</p>
                </div>
                <p className="transaction-amount">R$ 3.200,00</p>
              </div>
              <div className="transaction">
                <div className="transaction-info">
                  <p className="transaction-project">Projeto: API Integration</p>
                  <p className="transaction-date">20/10/2024</p>
                </div>
                <p className="transaction-amount">R$ 2.800,00</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="profile-page">
      {!isLoggedIn ? <NotLoggedIn /> : <LoggedIn />}
    </div>
  );
};

export default Profile;