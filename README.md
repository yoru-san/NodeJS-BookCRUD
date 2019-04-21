# Documentation

TP réalisé par Céline BERTAUD & Fabio CORNEAU.

## Scripts

*npm install* : permet d'installer les modules nécessaires au bon fonctionnement de l'application

*npm run start* : permet de lancer l'application

*npm run lint* : permet de lancer l'analyse statique de code

*npm run build* et *node dist/bundle.js* : permet de générer un bundle de l'application  

# API

## Endpoints de l'authentification

POST */login* : connexion de l'utilisateur

GET */logout* : déconnexion de l'utilisateur

## Endpoints des livres
GET */* : récupération de la totalité des livres

GET */:id* : récupération d'un livre spécifique 

POST */* : ajout d'un livre avec le contenu du body

PUT */:id* : mise à jour d'un livre avec le contenu du body

DELETE */:id* : suppression d'un livre (possiblement seulement si l'utilisateur est authentifié)

## Autres Endpoints
GET *random url* : erreur 404