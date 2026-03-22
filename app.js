require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const articleRoutes = require('./routes/articleRoutes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes API
app.use('/api', articleRoutes);

// Documentation Swagger
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger/swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Synchronisation de la base de données et démarrage
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Base de données synchronisée');
    app.listen(PORT, () => {
      console.log(`Serveur démarré sur http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erreur de synchronisation:', err);
  });
