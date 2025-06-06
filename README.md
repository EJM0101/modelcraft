# 📐 ModelCraft - De la Modélisation Conceptuelle au SQL

**ModelCraft** est une application éducative interactive qui permet de :
- Créer un **Modèle Conceptuel de Données (MCD)**,
- Le transformer automatiquement en **Modèle Logique (MLD)**,
- Puis en **Modèle Physique (MPD)** (script SQL),
- Tout en fournissant des **explications pédagogiques claires** à chaque étape.

## 🚀 Fonctionnalités

- Interface simple pour saisir un MCD (ou importer via JSON),
- Visualisation interactive via **React Flow**,
- Génération automatique de :
  - MLD avec clés primaires et étrangères,
  - MPD sous forme de script SQL téléchargeable,
- Explication affichée dans l'interface,
- Copie rapide d’un exemple JSON prêt à tester.

## 🧠 Concepts pédagogiques

- **MCD** : Entités, attributs, relations
- **MLD** : Ajout des clés primaires, transformations des relations (1-N, N-N)
- **MPD** : Types SQL, contraintes, références
- Visualisation simplifiée des relations

## ▶️ Lancer l’application

```bash
npm install
npm run dev
```

Accès sur `http://localhost:3000`

## 🌐 Déploiement

Compatible avec Render, Vercel, Netlify.
- Build : `npm run build`
- Start : `npm start`

---
Made with ❤️ for learning and production.