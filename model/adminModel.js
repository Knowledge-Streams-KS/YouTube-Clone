const { where } = require("sequelize");
const { param } = require("../routes/adminRoute");
const { model } = require("./index");

module.exports = {
  createUser: async (body) => {
    return await model.User.create({ ...body });
  },
  getAllUsers: async () => {
    return await model.User.findAll();
  },
  getUserByID: async (id) => {
    return await model.User.findByPk(id);
  },
  updateUser: async (body) => {
    return await model.User.update({ ...body }, { where: { id: body.id } });
  },
  deleteUser: async (id) => {
    return await model.User.destroy({ where: { id: id } });
  },
};
