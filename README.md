# UBeat

Bienvenue au projet UBeat, la plateforme musicale moderne et efficace! 

## Installation

Pour démarrer le projet, voici quelques étapes à accomplir:

### Prérequis

1. Installer [Node](https://nodejs.org/)
2. Cloner le projet
3. Dans le dossier du projet, exécutez `npm install`

### Démarrage

Pour démarrer l'application, allez dans le dossier du projet, puis:

```bash
npm run start
```

Pour activer le "hot-reloading" :

```bash
npm run dev
```

## Informations importantes

### Livrable 2

Voici quelques informations importante concernant le livrable 2 du projet :

1. Routes existantes:
   1. `/` : affiche quelques albums selon les genres.
   2. `/artist/:id` : affiche les informations de l'artiste à cet `id`.
   3. `/artist` : redirige vers la page `/artist/290242959` (Tame Impala) afin d'éviter d'avoir à connaître un id.
   4. `/album/:id` : affiche les informations de l'album à cet `id`.
   5. `/album` : redirige vers la page `/album/` (Thank U, Next) afin d'éviter d'avoir à connaître un id.
2. Boutons d'accès rapide (HELPER) dans la navigation :
   1. `Artist` : Permet d'accéder à la page `/artist`
   2. `Album` : Permet d'accéder à la page `/album`

