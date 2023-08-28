const authenticationModel = require("../model/authenticationModel");
const bcrypt = require("bcrypt");

const { jwtSecret } = require("../config.json");
const jwt = require("jsonwebtoken");

console.log("service");
module.exports = {
  login: async (body) => {
    try {
      const user = await authenticationModel.login(body.email);
      if (!user) {
        return "incorrect username or password ";
      }

      const check = await bcrypt.compare(body.password, user.password);
      if (check) {
        const accessTokenSecret = jwtSecret.key;
        const accessToken = jwt.sign({ email: user.email }, accessTokenSecret, {
          expiresIn: "20m",
        });
        return accessToken;
      }

      return "incorrect USername or Password";
    } catch (error) {
      return error;
    }
  },
};
