# Documentation

TP réalisé par Céline BERTAUD & Fabio CORNEAU.

## Scripts

*npm install* : permet d'installer les modules nécessaires au bon fonctionnement de l'application

*npm run start* : permet de lancer l'application

*npm run lint* : permet de lancer l'analyse statique de code

*npm run build* et *node dist/bundle.js* : permet de générer un bundle de l'application  

#API

## Endpoints de l'authentification

## Endpoints des livres
GET *api/books* : récupération de la globalité des livres

GET *api/books/:id* : récupération d'un livre spécifique 

POST *api/books* : ajout d'un livre avec le contenu du body

PATCH *api/books/:id* : mise à jour d'un livre avec le contenu du body

DELETE *api/books/:id* : suppression d'un livre

## Autres Endpoints
GET *random url* : erreur 404