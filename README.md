# Blog API

API REST de gestion d'articles de blog développée avec Node.js, Express, Sequelize (SQLite) et Swagger.

## Installation

1. Cloner le dépôt :  
   `git clone https://github.com/elviraline/blog-api.git`
2. Aller dans le dossier : `cd blog-api`
3. Installer les dépendances : `npm install`
4. Démarrer le serveur : `node app.js`  
   Le serveur tourne sur `http://localhost:3000`
## Endpoints

| Méthode | URL                          | Description                     |
|---------|------------------------------|---------------------------------|
| POST    | /api/articles                | Créer un article                |
| GET     | /api/articles                | Liste des articles (avec filtres) |
| GET     | /api/articles/:id            | Récupérer un article            |
| PUT     | /api/articles/:id            | Modifier un article             |
| DELETE  | /api/articles/:id            | Supprimer un article            |
| GET     | /api/articles/search?query=  | Recherche par texte             |

### Filtres disponibles
- `?category=Tech`
- `?author=Moi`
- `?date=2025-03-22`

## Exemples d’utilisation avec curl

**Créer un article**
```bash
curl -X POST http://localhost:3000/api/articles \
  -H "Content-Type: application/json" \
  -d '{"title":"Mon article","author":"Moi","content":"Contenu"}'
```

**Récupérer tous les articles**
```bash
curl http://localhost:3000/api/articles
```

**Modifier partiellement un article**
```bash
curl -X PUT http://localhost:3000/api/articles/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Nouveau titre"}'
```

**Rechercher**
```bash
curl "http://localhost:3000/api/articles/search?query=article"
```

**Supprimer**
```bash
curl -X DELETE http://localhost:3000/api/articles/1
```

## Documentation Swagger

Accédez à l’interface interactive :  
`http://localhost:3000/api-docs`

## Technologies utilisées

- Node.js / Express
- Sequelize ORM + SQLite
- Swagger UI Express
- YAML pour la documentation

## Auteur

KOUMETIO KANA ELVIRA LINE
