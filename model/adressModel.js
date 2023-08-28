const { model } = require("./index");
module.exports = {
  createAddress: async (body) => {
    try {
      return await model.Address.create({
        ...body,
      });
    } catch (err) {
      return err;
    }
  },
};
