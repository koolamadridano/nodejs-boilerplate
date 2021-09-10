const express = require("express");
const router = express.Router();

const profileController = require("../controllers/profileController");
const protected = require("../middleware/authentication");

// [POST] api/profile
// @Description: Create profile
router.post("/profile", (req, res) =>
  profileController.createProfile(req, res)
);

// [GET] api/profile
// @Description: Get all profiles
router.get("/profile", protected.auth, (req, res) =>
  profileController.getAllProfiles(req, res)
);

// [GET] api/profile/<objectId>
// @Description: Get one profile
router.get("/profile/:id", protected.auth, (req, res) =>
  profileController.getProfile(req, res)
);

// [GET] api/profile/filter/<type>
// @Description: Get all profiles by type
router.get("/profile/filter/:userType", protected.auth, (req, res) =>
  profileController.getProfileByType(req, res)
);

// [PUT] api/profile/<objectId>
// @Description: Update profile by objectId
router.put("/profile/:id", protected.auth, (req, res) =>
  profileController.updateProfile(request, response)
);

// [DELETE] api/profile/<objectId>
// @Description: Delete profile by objectId
router.delete("/profile/:id", protected.auth, (req, res) =>
  profileController.deleteProfile(request, response)
);

module.exports = router;
