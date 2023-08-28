const { Model, DataTypes } = require("sequelize");

const sequelize = require("../../bin/dbConnection");
const Users = require("./user");
const Videos = require("./videos");
const playlist = require("./playlist");

class playlistVideos extends Model {}

playlistVideos.init(
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
  { sequelize, modelName: "playlistVideos", timestamps: true, paranoid: true }
);

module.exports = playlistVideos;
