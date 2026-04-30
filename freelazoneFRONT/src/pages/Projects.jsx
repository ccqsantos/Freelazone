import React, { useState } from 'react';
import '../css/Projects.css';

const projectsData = [
  {
    id: 1,
    title: "E-commerce Website Development",
    description: "Precisamos de um desenvolvedor full stack para criar uma loja virtual completa com integração de pagamento.",
    budget: 5000,
    budgetType: "fixed",
    category: "Desenvolvimento Web",
    skills: ["React", "Node.js", "MongoDB", "Stripe"],
    posted: "2 dias atrás",
    proposals: 12,
    client: {
      name: "Tech Solutions Ltda",
      rating: 4.8
    }
  },
  {
    id: 2,
    title: "Mobile App UI/UX Design",
    description: "Busco designer para criar interface moderna para app de fitness. Inclui wireframes e protótipo interativo.",
    budget: 85,
    budgetType: "hourly",
    category: "Design",
    skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
    posted: "1 dia atrás",
    proposals: 24,
    client: {
      name: "HealthApp Inc",
      rating: 4.9
    }
  },
  {
    id: 3,
    title: "SEO Optimization for E-commerce",
    description: "Precisamos melhorar o SEO de nossa loja virtual. Auditoria completa e implementação de estratégias.",
    budget: 3000,
    budgetType: "fixed",
    category: "Marketing",
    skills: ["SEO", "Google Analytics", "Keyword Research", "Link Building"],
    posted: "3 dias atrás",
    proposals: 8,
    client: {
      name: "Moda Fashion Store",
      rating: 4.7
    }
  },
  {
    id: 4,
    title: "API Integration Specialist",
    description: "Integrar APIs de terceiros (pagamento, shipping, CRM) em plataforma existente.",
    budget: 70,
    budgetType: "hourly",
    category: "Desenvolvimento Backend",
    skills: ["REST APIs", "Python", "Django", "PostgreSQL"],
    posted: "5 horas atrás",
    proposals: 5,
    client: {
      name: "LogisticsPro",
      rating: 5.0
    }
  },
  {
    id: 5,
    title: "Social Media Content Creator",
    description: "Criar conteúdo para Instagram e TikTok. Postagens, reels e stories.",
    budget: 1500,
    budgetType: "fixed",
    category: "Marketing Digital",
    skills: ["Content Creation", "Video Editing", "Social Media", "Copywriting"],
    posted: "1 dia atrás",
    proposals: 31,
    client: {
      name: "BeautyBrand Co",
      rating: 4.6
    }
  },
  {
    id: 6,
    title: "WordPress Website Maintenance",
    description: "Manutenção mensal de site WordPress: updates, backups, security, performance.",
    budget: 45,
    budgetType: "hourly",
    category: "Manutenção",
    skills: ["WordPress", "PHP", "MySQL", "Security"],
    posted: "4 dias atrás",
    proposals: 15,
    client: {
      name: "Agency Digital",
      rating: 4.8
    }
  }
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [budgetRange, setBudgetRange] = useState('all');

  const categories = [...new Set(projectsData.map(p => p.category))];

  const filteredProjects = projectsData
    .filter(p =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .filter(p => !selectedCategory || p.category === selectedCategory)
    .filter(p => {
      if (budgetRange === 'all') return true;
      if (budgetRange === 'under1000') return p.budget < 1000;
      if (budgetRange === '1000to5000') return p.budget >= 1000 && p.budget <= 5000;
      if (budgetRange === 'over5000') return p.budget > 5000;
      return true;
    });

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Encontre o projeto ideal</h1>
        <p>Milhares de oportunidades esperando por você</p>
      </div>

      <div className="search-filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar projetos por título, descrição ou habilidades..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="filters-row">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            <option value="">Todas as categorias</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select 
            value={budgetRange} 
            onChange={(e) => setBudgetRange(e.target.value)}
            className="filter-select"
          >
            <option value="all">Todos os orçamentos</option>
            <option value="under1000">Até R$1.000</option>
            <option value="1000to5000">R$1.000 - R$5.000</option>
            <option value="over5000">Acima de R$5.000</option>
          </select>
        </div>
      </div>

      <div className="projects-list">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <div className="project-title-section">
                <h3>{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-budget">
                <span className="budget-amount">
                  {project.budgetType === 'fixed' 
                    ? `R$ ${project.budget.toLocaleString()}`
                    : `R$ ${project.budget}/hora`}
                </span>
                <span className="budget-type">
                  {project.budgetType === 'fixed' ? 'Preço fixo' : 'Por hora'}
                </span>
              </div>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="skills-container">
              {project.skills.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>

            <div className="project-footer">
              <div className="project-meta">
                <div className="client-info">
                  <span className="client-name">{project.client.name}</span>
                  <span className="client-rating">⭐ {project.client.rating}</span>
                </div>
                <div className="project-stats">
                  <span className="stat">📅 {project.posted}</span>
                  <span className="stat">📋 {project.proposals} propostas</span>
                </div>
              </div>
              <button className="btn-apply">Aplicar agora</button>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-results">
          <p>Nenhum projeto encontrado com esses critérios.</p>
        </div>
      )}
    </div>
  );
};

export default Projects;