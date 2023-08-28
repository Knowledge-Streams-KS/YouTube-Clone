const dbConnection = require("../config.json");
const { Sequelize } = require("sequelize");

const database = new Sequelize(dbConnection.database);

database
  .authenticate()
  .then(() => {
    console.log("database Connected");
  })

  .catch((error) => {
    console.log(error);
  });

module.exports = database;
