require('dotenv').config();
const express = require('express');
const { sequelize } = require('./config/sequelize');

const app = express();
const port = process.env.PORT || 3001;

app.get('/', function(req, res) {
  res.json({ message: "Bienvenue sur notre plateforme de création d'emplois du temps" });
});

// Middleware de gestion d'erreurs global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Une erreur est survenue sur le serveur');
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('La connexion à la base de données a réussi');
    await sequelize.sync({ force: true });
    console.log('Les tables ont été synchronisées');
    
    app.listen(port, function () {
      console.log(`Le serveur est prêt à écouter les requêtes sur le port ${port}`);
    });
  } catch (e) {
    console.error('Une erreur est survenue lors d\'une opération');
    console.error(e);
  }
})();
