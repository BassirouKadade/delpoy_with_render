const { Sequelize } = require('sequelize');

// Configuration de la base de données
const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'postgres',
  host: process.env.HOST,
  port: 5432,
  logging: false, // Désactiver les journaux SQL (vous pouvez les activer pour le débogage)
});

module.exports = {sequelize};
