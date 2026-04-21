# 🚀 Freelazone

**Freelazone** é uma aplicação web completa para conectar profissionais autônomos a clientes que buscam serviços digitais. Inspirada no Fiverr, a plataforma permite a oferta de serviços como design, programação, marketing, redação, entre outros.

![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.1-6DB33F?logo=springboot)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?logo=postgresql)

---

## ✨ Funcionalidades Principais

- 🔐 **Autenticação e autorização** (JWT) com roles de `CLIENT` e `FREELANCER`
- 👤 **Perfis personalizados** com portfólio, avaliações e descrição
- 🛍️ **Criação e listagem de serviços** (título, descrição, preço, categoria)
- 📦 **Pedidos (orders)** entre cliente e freelancer
- ⭐ **Sistema de avaliações** após a conclusão do serviço
- 💰 **Pagamentos simulados** (integração com gateway fictício)
- 📊 **Dashboard** com métricas para freelancers e administradores
- 🔍 **Busca e filtros** por categoria, preço, avaliação, etc.

---

## 🧱 Tecnologias Utilizadas

### Frontend
- React 18 + Vite
- React Router DOM
- Axios
- Context API (gerenciamento de estado)
- TailwindCSS (estilização)
- React Hook Form + Zod (validação)

### Backend
- Java 17
- Spring Boot 3
- Spring Security + JWT
- Spring Data JPA
- PostgreSQL
- Hibernate (migrations)
- Lombok

### DevOps & Outros
- Docker + Docker Compose
- Postman (testes de API)

---

## 📁 Estrutura do Projeto (resumida)

freelazone/
├── backend/
│ ├── src/main/java/com/freelazone/
│ ├── src/main/resources/
│ └── pom.xml
├── frontend/
│ ├── src/
│ ├── public/
│ └── package.json
├── docker-compose.yml
└── README.md


---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Docker e Docker Compose (recomendado)
- ou Java 17 + Node.js 18+ + PostgreSQL
