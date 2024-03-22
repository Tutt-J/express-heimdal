require("dotenv").config({ path: "../.env" });

module.exports = {
  development: {
    username: process.env.DB_username,
    password: process.env.DB_password,
    database: process.env.DB_database,
    host: process.env.DB_host,
    dialect: process.env.DB_dialect,
    port: process.env.DB_port,
  },
  test: {
    username: process.env.DB_username_test,
    password: process.env.DB_password_test,
    database: process.env.DB_database_test,
    host: process.env.DB_host_test,
    dialect: process.env.DB_dialect_test,
    port: process.env.DB_port_test,
  },
  production: {
    username: process.env.DB_username,
    password: process.env.DB_password,
    database: process.env.DB_database,
    host: process.env.DB_host,
    dialect: process.env.DB_dialect,
    port: process.env.DB_port,
  },
};
