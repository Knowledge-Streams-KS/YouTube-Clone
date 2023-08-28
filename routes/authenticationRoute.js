var express = require("express");
var router = express.Router();

console.log("route");
const authentictionController = require("../controller/authenticationController");

router.post("/login", authentictionController.login);

module.exports = router;
