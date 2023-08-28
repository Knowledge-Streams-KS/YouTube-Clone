const { Model, DataTypes } = require("sequelize");

const sequelize = require("../../bin/dbConnection");
const playlistVideos = require("./playlistVideo");
class playlist extends Model {}

playlist.init(
  {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true,
      require: true,
      unique: true,
    },
    user_id: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Users,
        key: "id",
      },
    },
    playlistVideo: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: playlistVideos,
        key: "id",
      },
    },
  },

  { sequelize, modelName: "playlist", timestamps: true, paranoid: true }
);

module.exports = playlist;
