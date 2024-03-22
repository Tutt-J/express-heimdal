require("dotenv").config({ path: "../.env" });

module.exports = {
  development: {
    username: process.env.DB_username,
    password: process.env.DB_password,
    database: process.env.DB_database,
    host: process.env.DB_host,
    dialect: process.env.DB_dialect,
  },
  test: {
    username: "root",
    password: null,
    database: "node_heimdal_test",
    host: "127.0.0.1",
    dialect: "mariadb",
  },
  production: {
    username: process.env.DB_username,
    password: process.env.DB_password,
    database: process.env.DB_database,
    host: process.env.DB_host,
    dialect: process.env.DB_dialect,
  },
};
