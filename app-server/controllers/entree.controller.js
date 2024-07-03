const db = require("../models");
const Entree = db.entree;
const Op = db.Sequelize.Op;

// Créer et sauvegarder une nouvelle entrée
exports.create = (req, res) => {
    if (!req.body.date) {
        res.status(400).send({
            message: "Le contenu ne peut pas être vide!"
        });
        return;
    }

    // Créer une entrée
    const entree = {
        date: req.body.date
    };

    // Sauvegarder l'entrée dans la base de données
    Entree.create(entree)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la création de l'entrée."
            });
        });
};

// Récupérer toutes les entrées de la base de données
exports.findAll = (req, res) => {
    Entree.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la récupération des entrées."
            });
        });
};

exports.createWithoutData = (req, res) => {
    const currentDate = new Date();
    const entree = {
        date: currentDate
    };

    Entree.create(entree)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la création de l'entrée."
            });
        });
};