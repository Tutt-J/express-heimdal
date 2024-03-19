const express = require('express')
const db = require("./app/models/index.js");
const router = require("./app/routes/index.js");

db.sequelize
.authenticate()
.then(() => console.log("Database connected ..."))
.catch((err) => console.log(err));

const app = express()

app.use(express.json());
app.use("/api", router);

module.exports = app;