const express = require("express");
const router = express.Router();

const profileController = require("../controllers/profileController");
const protected = require("../middleware/authentication");

// [POST] api/profile
// @Description: Create profile
router.post("/profile", protected.auth, (req, res) =>
  profileController.createProfile(req, res)
);

// [GET] api/profile
// @Description: Get all profiles
router.get("/profile",  protected.auth, (req, res) =>
  profileController.getAllProfiles(req, res)
);

// [GET] api/profile/single?userId=6231b77afcb5981d18a17a58
// @Description: Get one profile
router.get("/profile/single",  protected.auth, (req, res) =>
  profileController.getProfile(req, res)
);

// [PUT] api/profile?userId=6231b77afcb5981d18a17a58
// @Description: Update profile by objectId
router.put("/profile",  protected.auth, (req, res) =>
  profileController.updateProfile(req, res)
);

// [DELETE]  api/profile?userId=6231b77afcb5981d18a17a58
// @Description: Delete profile by objectId
router.delete("/profile",  protected.auth, (req, res) =>
  profileController.deleteProfile(req, res)
);


module.exports = router;
