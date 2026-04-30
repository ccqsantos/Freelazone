import React, { useState } from 'react';
import '../css/Freelancers.css';

const freelancersData = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Desenvolvedora Full Stack",
    rating: 4.9,
    reviews: 128,
    hourlyRate: 85,
    skills: ["React", "Node.js", "Python", "PostgreSQL"],
    avatar: "👩‍💻",
    completed: 342,
    location: "São Paulo, SP"
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Designer UI/UX",
    rating: 4.8,
    reviews: 94,
    hourlyRate: 70,
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    avatar: "🎨",
    completed: 215,
    location: "Rio de Janeiro, RJ"
  },
  {
    id: 3,
    name: "Marina Costa",
    role: "Especialista em Marketing Digital",
    rating: 4.9,
    reviews: 156,
    hourlyRate: 65,
    skills: ["SEO", "Google Ads", "Social Media", "Content Marketing"],
    avatar: "📊",
    completed: 412,
    location: "Belo Horizonte, MG"
  },
  {
    id: 4,
    name: "Rafael Oliveira",
    role: "Desenvolvedor Mobile",
    rating: 4.7,
    reviews: 67,
    hourlyRate: 90,
    skills: ["React Native", "Flutter", "Swift", "Kotlin"],
    avatar: "📱",
    completed: 178,
    location: "Curitiba, PR"
  },
  {
    id: 5,
    name: "Patrícia Santos",
    role: "Redatora e Copywriter",
    rating: 5.0,
    reviews: 203,
    hourlyRate: 50,
    skills: ["Copywriting", "SEO Writing", "Blog Posts", "Ghostwriting"],
    avatar: "✍️",
    completed: 567,
    location: "Porto Alegre, RS"
  },
  {
    id: 6,
    name: "Thiago Lima",
    role: "Especialista em SEO",
    rating: 4.9,
    reviews: 112,
    hourlyRate: 75,
    skills: ["SEO", "Analytics", "SEMrush", "Content Strategy"],
    avatar: "🔍",
    completed: 289,
    location: "Brasília, DF"
  }
];

const Freelancers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  const allSkills = [...new Set(freelancersData.flatMap(f => f.skills))];

  const filteredFreelancers = freelancersData
    .filter(f => 
      f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .filter(f => !selectedSkill || f.skills.includes(selectedSkill))
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'hourlyRate') return a.hourlyRate - b.hourlyRate;
      if (sortBy === 'completed') return b.completed - a.completed;
      return 0;
    });

  return (
    <div className="freelancers-container">
      <div className="freelancers-header">
        <h1>Encontre o freelancer perfeito</h1>
        <p>Conecte-se com profissionais talentosos para seu próximo projeto</p>
      </div>

      <div className="filters-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar por nome, habilidade ou cargo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="filters-row">
          <select 
            value={selectedSkill} 
            onChange={(e) => setSelectedSkill(e.target.value)}
            className="filter-select"
          >
            <option value="">Todas as habilidades</option>
            {allSkills.map(skill => (
              <option key={skill} value={skill}>{skill}</option>
            ))}
          </select>

          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="filter-select"
          >
            <option value="rating">Melhor avaliados</option>
            <option value="hourlyRate">Menor preço</option>
            <option value="completed">Mais projetos</option>
          </select>
        </div>
      </div>

      <div className="freelancers-grid">
        {filteredFreelancers.map(freelancer => (
          <div key={freelancer.id} className="freelancer-card">
            <div className="freelancer-avatar">{freelancer.avatar}</div>
            <div className="freelancer-info">
              <h3>{freelancer.name}</h3>
              <p className="freelancer-role">{freelancer.role}</p>
              <div className="freelancer-location">📍 {freelancer.location}</div>
              
              <div className="skills-container">
                {freelancer.skills.slice(0, 3).map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
                {freelancer.skills.length > 3 && (
                  <span className="skill-tag">+{freelancer.skills.length - 3}</span>
                )}
              </div>

              <div className="freelancer-stats">
                <div className="stat">
                  <span className="stat-value">⭐ {freelancer.rating}</span>
                  <span className="stat-label">({freelancer.reviews})</span>
                </div>
                <div className="stat">
                  <span className="stat-value">${freelancer.hourlyRate}</span>
                  <span className="stat-label">/hora</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{freelancer.completed}</span>
                  <span className="stat-label">projetos</span>
                </div>
              </div>

              <button className="btn-hire">Contratar agora</button>
            </div>
          </div>
        ))}
      </div>

      {filteredFreelancers.length === 0 && (
        <div className="no-results">
          <p>Nenhum freelancer encontrado com esses critérios.</p>
        </div>
      )}
    </div>
  );
};

export default Freelancers;