const { model } = require("../model/index");

console.log("model");
module.exports = {
  login: async (email) => {
    try {
      return await model.User.findOne({
        where: {
          email: email,
        },
      });
    } catch (error) {
      return error;
    }
  },
};
