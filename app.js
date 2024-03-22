const express = require('express')
const db = require("./app/models/index.js");
const router = require("./app/routes/index.js");
const path= require('path');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yaml')
const fs = require('fs');

const app = express()

const file  = fs.readFileSync('./swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

db.sequelize
.authenticate()
.then(() => console.log("Database connected ..."))
.catch((err) => console.log(err));


app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", router);

module.exports = app;