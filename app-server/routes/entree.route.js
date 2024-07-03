module.exports = app => {
    const entrees = require("../controllers/entree.controller.js");

    var router = require("express").Router();

    // Créer une nouvelle entrée
    router.post("/", entrees.create);

    // Récupérer toutes les entrées
    router.get("/", entrees.findAll);

    router.post("/createWithoutData", entrees.createWithoutData);

    // Utiliser /api/entrees pour accéder aux routes
    app.use("/api/entrees", router);
};
