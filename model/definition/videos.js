const { Model, DataTypes } = require("sequelize");

const sequelize = require("../../bin/dbConnection");
class Videos extends Model {}

Videos.init(
  {
    title: {
      type: sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: sequelize.TEXT,
      allowNull: false,
    },
    duration: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    url: {
      type: sequelize.STRING,
      allowNull: false,
    },
    views: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Videos", timestamps: true, paranoid: true }
);

module.exports = Videos;
