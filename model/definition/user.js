const { Model, DataTypes } = require("sequelize");

const sequelize = require("../../bin/dbConnection");
class Users extends Model {}

Users.init(
  {
    email: {
      type: DataTypes.STRING(),
      primaryKey: true,
      require: true,
      unique: true,
    },

    id: {
      autoIncrement: true,

      type: DataTypes.INTEGER,
    },
    fName: {
      type: DataTypes.STRING(),
      require: true,
    },
    lName: {
      type: DataTypes.STRING(),
      require: true,
    },

    password: {
      type: DataTypes.STRING(),
      require: true,
    },
  },
  { sequelize, modelName: "Users", timestamps: true, paranoid: true }
);

module.exports = Users;
