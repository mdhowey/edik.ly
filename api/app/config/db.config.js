// Postgres connection configuration
module.exports = {
  // @TODO for deployment?
  HOST: "localhost",
  // USER: "admin",
  // PASSWORD: "45z@!34*9H",
  DB: "edik_db",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};