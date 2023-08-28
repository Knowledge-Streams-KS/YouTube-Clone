const adminModel = require("../model/adminModel");

module.exports = {
  createUser: async (body) => {
    try {
      const response = await adminModel.createUser(body);
      if (response) {
        return response;
      }
      return "user not created";
    } catch (error) {
      return error;
    }
  },
  getAllUsers: async () => {
    try {
      const response = await adminModel.getAllUsers();
      if (response) {
        return response;
      }
      return "user not found";
    } catch (error) {
      console.log(error);
    }
  },
  getUserByID: async (id) => {
    try {
      const response = await adminModel.getUserByID(id);
      if (response) {
        return response;
      }
      return "user not found";
    } catch (error) {
      return error.message;
    }
  },
  updateUser: async (body) => {
    try {
      const validate = await adminModel.getUserByID(body.id);
      if (validate) {
        const response = await adminModel.updateUser(body);

        if (response) {
          return "userUpdated";
        }
        return "user not updated";
      }
      return "user not found";
    } catch (error) {
      return error.message;
    }
  },
  deleteUser: async (id) => {
    try {
      const validate = await adminModel.getUserByID(id);
      if (validate) {
        const response = await adminModel.deleteUser(validate.id);
        if (response) {
          return "user deleted";
        }
        return "user not deleted";
      }
      return "user not found";
    } catch (error) {
      return error.message;
    }
  },

  
};
