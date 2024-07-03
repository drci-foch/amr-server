// models/entrée.model.js
module.exports = (sequelize, Sequelize) => {
    const Entree = sequelize.define("entree", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false
        }
    });

    return Entree;
};
