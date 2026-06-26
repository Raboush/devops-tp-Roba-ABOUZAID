# API de Gestion des Étudiants

![CI](https://github.com/Raboush/devops-tp-Roba-ABOUZAID/actions/workflows/ci.yml/badge.svg)
![Lint](https://github.com/Raboush/devops-tp-Roba-ABOUZAID/actions/workflows/lint.yml/badge.svg)
![Tests](https://github.com/Raboush/devops-tp-Roba-ABOUZAID/actions/workflows/test.yml/badge.svg)

## Description

API REST simple permettant de gérer les informations des étudiants d'un établissement scolaire.

Ce projet est réalisé dans le cadre du module **DevOps** afin de mettre en pratique :

- Git et GitHub
- GitHub Actions (CI)
- Docker
- Docker Compose
- ESLint
- Tests automatisés

---

## Stack

- Node.js
- Express.js
- Git & GitHub
- GitHub Actions
- Docker
- Docker Compose
- PostgreSQL
- Jest
- ESLint
- Prettier

---

# Installation

Cloner le projet :

```bash
git clone https://github.com/Raboush/devops-tp-Roba-ABOUZAID.git
```

Entrer dans le dossier :

```bash
cd devops-tp-Roba-ABOUZAID
```

Installer les dépendances :

```bash
npm install
```

---

# Lancer le projet

En local :

```bash
npm start
```

Le serveur démarre sur :

```
http://localhost:3000
```

---

# Avec Docker

Construire et lancer le conteneur :

```bash
docker compose up --build
```

Arrêter le conteneur :

```bash
docker compose down
```

---

# Vérifier le code

Lint :

```bash
npm run lint
```

Tests :

```bash
npm test
```

---

# Pipelines GitHub Actions

Le projet contient plusieurs workflows :

- ✅ CI Pipeline
- ✅ Lint
- ✅ Tests

Les badges en haut du README affichent leur état.

---

# Architecture

```
.
├── .github/
│   └── workflows/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── src/
├── docs/
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

---

# Auteur

**Roba ABOUZAID**
