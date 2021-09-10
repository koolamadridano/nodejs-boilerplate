const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// [POST] api/user
// @Description: Create profile
router.post("/user", (request, response) =>
  userController.createUser(request, response)
);
// [POST] api/user/login
// @Description: Create profile
router.post("/user/login", (request, response) =>
  userController.loginUser(request, response)
);
module.exports = router;
