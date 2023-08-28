const { Model, DataTypes } = require("sequelize");

const sequelize = require("../../bin/dbConnection");
const Users = require("./user");
const Videos = require("./videos");
const playlist = require("./playlist");

class watchLater extends Model {}

watchLater.init(
  {
    id: {
      autoIncrement: true,

      type: DataTypes.INTEGER,
    },
    playlist_id: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: playlist,
        key: "id",
      },
      video_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Videos,
          key: "id",
        },
      },
    },
  },
  { sequelize, modelName: "watchLater", timestamps: true, paranoid: true }
);

module.exports = watchLater;
