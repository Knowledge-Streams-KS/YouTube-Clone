var express = require("express");
var router = express.Router();

const adminController = require("../controller/adminController");

router.get("/getUsers", adminController.getUsers);

router.post("/createUser", adminController.createUser);
router.get("/getAllUsers", adminController.getAllUsers);
router.get("/getUserByID", adminController.getUserByID);
router.put("/updateUser", adminController.updateUser);
router.delete("/deleteUser", adminController.deleteUser);
module.exports = router;
