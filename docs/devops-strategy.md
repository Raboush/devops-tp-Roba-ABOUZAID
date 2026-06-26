# Stratégie DevOps

# 1. Architecture technique cible

Le projet est une API REST développée avec Node.js et Express. L'application est conteneurisée avec Docker et peut être exécutée avec Docker Compose. Une base de données PostgreSQL est prévue pour stocker les informations des étudiants.

---

# 2. Structure du repository

Le dépôt est organisé de la manière suivante :

* `backend/` : code source de l'API
* `docs/` : documentation technique
* `tests/` : tests unitaires
* `.github/workflows/` : pipelines GitHub Actions
* `Dockerfile` : image Docker du backend
* `docker-compose.yml` : orchestration des services

---

# 3. Workflow Git

Le développement est réalisé sur des branches de fonctionnalités.

Processus :

* création d'une branche
* développement
* commit
* push
* vérification automatique via GitHub Actions
* fusion dans la branche principale

---

# 4. Services Docker prévus

Deux services principaux sont utilisés :

* Backend Node.js
* Base de données PostgreSQL

Docker Compose permet de lancer tous les services avec une seule commande.

---

# 5. Variables d'environnement

Les variables sensibles sont stockées dans un fichier `.env`.

Le fichier `.env` n'est jamais versionné.

Un fichier `.env.example` est fourni comme modèle.

---

# 6. Stratégie de tests

Les tests sont réalisés avec Jest.

Les tests couvrent :

* validation des données
* normalisation des scores
* transformation des réponses IA

Les tests sont exécutés automatiquement dans la pipeline CI.

---

# 7. Pipeline CI

La pipeline GitHub Actions exécute automatiquement :

* installation des dépendances
* analyse ESLint
* tests Jest

Chaque push déclenche une vérification automatique.

---

# 8. Sécurité et secrets

Les secrets ne sont jamais stockés dans Git.

Dependabot est activé pour surveiller les dépendances.

Les fichiers `.env` sont exclus du dépôt grâce au `.gitignore`.

---

# 9. Logs prévus

Les logs permettront de suivre :

* le démarrage de l'application
* les erreurs serveur
* les appels API
* les erreurs de la base de données

---

# 10. Risques DevOps

Les principaux risques sont :

* exposition des secrets
* dépendances vulnérables
* échec de la CI
* perte des données
* image Docker obsolète

Ces risques sont documentés dans `docs/security.md`.

---

# 11. Commandes de lancement

```bash
git clone https://github.com/Raboush/devops-tp-Roba-ABOUZAID.git
cd devops-tp-Roba-ABOUZAID
cp .env.example .env
docker compose up
```

L'application est disponible sur :

http://localhost:3000

---

# 12. Prochaines actions

Les prochaines améliorations prévues sont :

* connecter PostgreSQL au backend
* augmenter la couverture des tests
* améliorer la documentation
* renforcer la sécurité
* déployer l'application sur un serveur cloud

---

# Schéma de l'architecture

```text
Utilisateur
      │
      ▼
GitHub Repository
      │
      ▼
GitHub Actions
      │
      ▼
Docker
      │
      ├────────► Backend (Node.js)
      │
      └────────► PostgreSQL
```
