const authenticationService = require("../services/authenticationServices");
const bcrypt = require("bcrypt");
const joi = require("joi");

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});
console.log("controller");
module.exports = {
  login: async (req, res) => {
    try {
      const validation = await loginSchema.validateAsync(req.body);
      if (validation.error) {
        res.send(validation.error);
      }
    } catch (error) {
      res.send(error);
    }
  },
};
