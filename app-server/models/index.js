const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize({
    dialect: dbConfig.dialect,
    storage: dbConfig.DB,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.entree = require("./entree.model.js")(sequelize, Sequelize); // Ajout du modèle entrée

module.exports = db;
