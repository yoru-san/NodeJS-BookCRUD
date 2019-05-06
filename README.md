# Documentation

TP réalisé par Céline BERTAUD & Fabio CORNEAU.

## Scripts

*npm install* : permet d'installer les modules nécessaires au bon fonctionnement de l'application

*npm run start* : permet de lancer l'application

*npm run lint* : permet de lancer l'analyse statique de code

*npm run dev* : permet de lancer l'outil de live reload

*npm run build* et *node dist/bundle.js* : permet de générer un bundle de l'application  

# API

## Endpoints de l'authentification

POST *auth/login* : connexion de l'utilisateur

GET *auth/logout* : déconnexion de l'utilisateur

## Endpoints des livres
GET */books* : récupération de la totalité des livres

GET */books/:id* : récupération d'un livre spécifique 

POST */books* : ajout d'un livre avec le contenu du body

PUT */books/:id* : mise à jour d'un livre avec le contenu du body

DELETE */books/:id* : suppression d'un livre (possiblement seulement si l'utilisateur est authentifié)

## Autres Endpoints
GET *random url* : erreur 404