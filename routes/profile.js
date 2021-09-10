const express = require("express");
const router = express.Router();

const profileController = require("../controllers/profileController");

// [POST] api/profile
// @Description: Create profile
router.post("/profile", (request, response) =>
  profileController.createProfile(request, response)
);

// [GET] api/profile
// @Description: Get all profiles
router.get("/profile", (request, response) =>
  profileController.getAllProfiles(request, response)
);

// [GET] api/profile/<objectId>
// @Description: Get one profile
router.get("/profile/:id", (request, response) =>
  profileController.getProfile(request, response)
);

// [GET] api/profile/filter/<type>
// @Description: Get all profiles by type
router.get("/profile/filter/:userType", (request, response) =>
  profileController.getProfileByType(request, response)
);

// [PUT] api/profile/<objectId>
// @Description: Update profile by objectId
router.put("/profile/:id", (request, response) =>
  profileController.updateProfile(request, response)
);

// [DELETE] api/profile/<objectId>
// @Description: Delete profile by objectId
router.delete("/profile/:id", (request, response) =>
  profileController.deleteProfile(request, response)
);

module.exports = router;
