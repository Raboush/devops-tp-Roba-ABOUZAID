# Stratégie DevOps

## 1. Architecture technique cible

Le projet est une API REST développée avec Node.js et Express.js.
L'application est conteneurisée avec Docker et utilise PostgreSQL comme base de données.

```
Client
   │
   ▼
Backend (Node.js / Express)
   │
   ▼
PostgreSQL
```

---

## 2. Structure du repository

```
.
├── backend/
├── docs/
├── frontend/
├── tests/
├── .github/
├── docker-compose.yml
├── package.json
└── README.md
```

Le dossier **backend/** contient le code source de l'API.
Le dossier **docs/** contient toute la documentation technique.
Le dossier **tests/** contient les tests unitaires.

---

## 3. Workflow Git

Le projet utilise Git et GitHub.

Le développement est réalisé sur des branches de fonctionnalités.

Workflow :

- feature/*
- develop
- main

Chaque modification est validée par un commit puis envoyée sur GitHub.

---

## 4. Services Docker prévus

Deux services sont prévus :

- Backend Node.js
- Base de données PostgreSQL

Docker Compose permet de lancer les deux services ensemble.

---

## 5. Variables d'environnement

Les variables sont stockées dans un fichier `.env`.

Exemples :

- DB_HOST
- DB_PORT
- DB_USER
- DB_PASSWORD
- DB_NAME

Le fichier `.env` n'est jamais versionné.

---

## 6. Stratégie de tests

Les tests utilisent Jest.

Ils couvrent :

- tests unitaires
- validation des données
- transformation des données
- simulation de réponses IA (mock)

Les tests sont exécutés automatiquement dans GitHub Actions.

---

## 7. Pipeline CI

La pipeline GitHub Actions réalise automatiquement :

1. Installation des dépendances
2. Vérification ESLint
3. Exécution des tests Jest

La pipeline est déclenchée sur chaque Push et Pull Request.

---

## 8. Sécurité et secrets

Les secrets ne sont jamais stockés dans Git.

Les informations sensibles sont placées :

- dans `.env`
- dans GitHub Secrets

Dependabot est activé pour surveiller les dépendances.

---

## 9. Logs prévus

Les logs permettent de suivre :

- le démarrage du serveur
- les erreurs Express
- les erreurs de connexion à PostgreSQL

Ces informations facilitent le débogage.

---

## 10. Risques DevOps

Principaux risques :

- fuite de secrets
- dépendances vulnérables
- échec de la CI
- erreur de configuration Docker
- perte des données PostgreSQL

Ces risques sont détaillés dans `docs/security.md`.

---

## 11. Commandes de lancement

Installation :

```bash
npm install
```

Développement :

```bash
npm start
```

Tests :

```bash
npm test
```

Lint :

```bash
npm run lint
```

Docker :

```bash
docker compose up
```

---

## 12. Prochaines actions

Les prochaines améliorations prévues sont :

- compléter les tests d'intégration
- améliorer la couverture des tests
- ajouter davantage d'endpoints REST
- optimiser la configuration Docker
- déployer automatiquement l'application