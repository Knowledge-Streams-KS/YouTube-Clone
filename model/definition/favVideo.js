const { Model, DataTypes } = require("sequelize");

const sequelize = require("../../bin/dbConnection");
const Users = require("./user");
const Videos = require("./videos");

class favVideos extends Model {}

favVideos.init(
  {
    id: {
      autoIncrement: true,

      type: DataTypes.INTEGER,
    },
    user_id: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Users,
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
  { sequelize, modelName: "favVideos", timestamps: true, paranoid: true }
);

module.exports = favVideos;
