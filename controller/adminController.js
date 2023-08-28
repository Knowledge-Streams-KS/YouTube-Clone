const joi = require("joi");
const adminService = require("../services/adminService");

const userSchema = joi.object({
  fName: joi.string().required(),

  lName: joi.string().required(),

  email: joi.string().email().required(),

  password: joi.string().required(),
});

const allUserSchema = joi.object({
  id: joi.number().required(),
});
const updateUserSchema = joi.object({
  id: joi.number().required(),
  fName: joi.string().required(),
  lName: joi.string().required(),
  password: joi.string().required(),
});

const deleteUserSchema = joi.object({
  id: joi.number().required(),
});

module.exports = {
  getUsers: async (req, res) => {
    try {
      const validate = await userSchema.validateAsync(req.query);
      res.send(validate);
    } catch (err) {
      res.send(err.message);
    }
  },
  createUser: async (req, res) => {
    try {
      const validate = await userSchema.validateAsync(req.body);
      if (validate.error) {
        res.send(validate.error);
      }
      const response = await adminService.createUser(req.body);
      res.send(response);
    } catch (err) {
      res.send(err.message);
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const response = await adminService.getAllUsers();

      res.send(response);
    } catch (error) {
      res.send(error);
    }
  },

  getUserByID: async (req, res) => {
    try {
      // const validate = await allUserSchema.validateAsync(req.id);
      const validate = await allUserSchema.validateAsync(req.query);
      if (validate.error) {
        res.send(validate.error.message);
      }
      const response = await adminService.getUserByID(validate.id);
      res.send(response);
    } catch (error) {
      res.send(error.message);
    }
  },
  updateUser: async (req, res) => {
    try {
      const validate = await updateUserSchema.validateAsync(req.body);
      if (validate.error) {
        res.send(validate.error);
      }
      const response = await adminService.updateUser(req.body);
      res.send(response);
    } catch (error) {
      res.send(error.message);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const validate = await allUserSchema.validateAsync(req.query);
      if (validate.error) {
        res.send(validate.error.message);
      } else {
        const response = await adminService.deleteUser(validate.id);

        res.send(response);
      }
    } catch (error) {
      res.send(error.message);
    }
  },
};
