# Sécurité

## Risques DevOps

### R1 — Exposition des variables d'environnement

- **Probabilité :** Moyenne
- **Impact :** Critique
- **Action :**
  - Ne jamais versionner le fichier `.env`
  - Utiliser `.env.example`
  - Stocker les secrets dans GitHub Secrets

---

### R2 — Vulnérabilités des dépendances

- **Probabilité :** Moyenne
- **Impact :** Élevé
- **Action :**
  - Activer Dependabot
  - Mettre régulièrement les dépendances à jour
  - Vérifier les alertes de sécurité

---

### R3 — Pipeline CI en échec

- **Probabilité :** Faible
- **Impact :** Élevé
- **Action :**
  - Exécuter automatiquement ESLint
  - Lancer les tests Jest
  - Corriger les erreurs avant le merge

---

### R4 — Conteneur Docker mal configuré

- **Probabilité :** Faible
- **Impact :** Moyen
- **Action :**
  - Utiliser une image officielle Node.js
  - Vérifier le Dockerfile
  - Tester le build avant le déploiement

---

### R5 — Perte des données PostgreSQL

- **Probabilité :** Faible
- **Impact :** Critique
- **Action :**
  - Utiliser un volume Docker
  - Sauvegarder régulièrement la base de données
  - Vérifier le fonctionnement du volume persistant