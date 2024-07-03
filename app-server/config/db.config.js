// db.config.js
module.exports = {
    DB: './app-server/database/database.db',
    dialect: 'sqlite',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    define: {
        timestamps: true, // Ajouter cette ligne si nécessaire
        underscored: true, // Ajouter cette ligne si nécessaire
        freezeTableName: true, // Ajouter cette ligne si nécessaire
        autoIncrement: true // Ajouter cette ligne
    },
};
