const express = require("express");
const cors = require("cors");
const sqlite3 = require('sqlite3').verbose();
const app = express();
const db = require("./app-server/models");
db.sequelize.sync( ).then(() => {
    console.log("Drop and re-sync db.");
});


app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to AMR application." });
});


require("./app-server/routes/entree.route")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});