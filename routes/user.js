const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// [POST] api/register
// @Description: Register
router.post("/register", (req, res) =>
  userController.register(req, res)
);

// [POST] api/login
// @Description: Login 
router.post("/login", (req, res) =>
  userController.login(req, res)
);


module.exports = router;
