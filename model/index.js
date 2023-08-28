const sequelize = require("../bin/dbConnection");

//importing table/modles
const Users = require("./definition/user");
const Videos = require("./definition/videos");
const playlist = require("./definition/playlist");
const favVideos = require("./definition/favVideo");
const playlistVideos = require("./definition/playlistVideo");
const watchLater = require("./definition/watchLater");

let db = {};
const model = {
  Users,
  Videos,
  playlist,
  playlistVideos,
  favVideos,
};

db.sequelize = sequelize;
sequelize.model = model;

module.exports = { db, model };

// Create the relationships
Users.hasMany(watchLater, { foreignKey: "user_id" });
watchLater.belongsTo(Users, { foreignKey: "user_id" });
watchLater.hasMany(Videos, { foreignKey: "video_id" });
Videos.belongsTo(watchLater, { foreignKey: "video_id" });

Users.hasMany(favVideos, { foreignKey: "user_id" });
favVideos.belongsTo(Users, { foreignKey: "user_id" });
favVideos.hasMany(Videos, { foreignKey: "video_id" });
Videos.belongsTo(favVideos, { foreignKey: "video_id" });

Users.hasMany(playlist, { foreignKey: "user_id" });
playlist.belongsTo(Users, { foreignKey: "user_id" });
playlist.hasMany(playlistVideos, { foreignKey: "playlistvideo_id" });
playlistVideos.belongsTo(playlist, { foreignKey: "playlistvideo_id" });
playlistVideos.hasMany(Videos, { foreignKey: "video_id" });
Videos.belongsTo(playlistVideos, { foreignKey: "video_id" });
