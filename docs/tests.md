# Stratégie de tests

## Fonctionnalité 1 — Gestion des étudiants

Pourquoi critique :
L'API doit permettre d'ajouter, consulter et gérer les étudiants.

### Test unitaire
- Vérifier la création d'un étudiant valide.

### Test d'intégration
- Vérifier que l'endpoint GET /students retourne une liste.

---

## Fonctionnalité 2 — Validation des données

Pourquoi critique :
Les données invalides ne doivent pas être acceptées.

### Test unitaire
- Refuser un étudiant sans nom.

### Test d'intégration
- Vérifier qu'une requête invalide retourne une erreur.

---

## Fonctionnalité 3 — Disponibilité de l'API

Pourquoi critique :
L'application doit être disponible pour les utilisateurs.

### Test unitaire
- Vérifier que la route /health retourne "OK".

### Test d'intégration
- Vérifier que le serveur répond avec le statut HTTP 200.