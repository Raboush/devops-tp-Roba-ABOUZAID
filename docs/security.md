# Sécurité DevOps

## Risques DevOps

### R1 — Exposition du fichier .env

* **Probabilité :** Moyenne
* **Impact :** Critique
* **Action :**

  * Ne jamais versionner le fichier `.env`.
  * Utiliser uniquement `.env.example`.
  * Ajouter les secrets dans GitHub Secrets.

---

### R2 — Dépendances vulnérables

* **Probabilité :** Moyenne
* **Impact :** Élevé
* **Action :**

  * Activer Dependabot.
  * Mettre régulièrement à jour les dépendances npm.

---

### R3 — Échec de la pipeline CI

* **Probabilité :** Moyenne
* **Impact :** Moyen
* **Action :**

  * Exécuter automatiquement les étapes de lint et de test avant chaque fusion.
  * Corriger immédiatement les erreurs détectées.

---

### R4 — Perte des données PostgreSQL

* **Probabilité :** Faible
* **Impact :** Élevé
* **Action :**

  * Utiliser un volume Docker nommé.
  * Prévoir des sauvegardes régulières de la base de données.

---

### R5 — Image Docker obsolète

* **Probabilité :** Faible
* **Impact :** Moyen
* **Action :**

  * Reconstruire régulièrement l'image Docker.
  * Utiliser une image officielle Node.js récente.
  * Vérifier les mises à jour de sécurité.
