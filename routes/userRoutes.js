const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/insert_user", userController.insertUser);
router.get("/getall_users", userController.getAllUsers);

module.exports = router;
