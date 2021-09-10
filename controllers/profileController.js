const Profile = require("../models/profile");

module.exports = {
  // [POST]
  createProfile(req, res) {
    try {
      const { firstName, lastName, address, avatarUrl, email, userType } =
        req.body;
      const newProfile = new Profile({
        firstName,
        lastName,
        address,
        avatarUrl,
        email,
        userType,
        dateJoined: Date.now(),
      });
      newProfile
        .save()
        .then((value) => {
          res.status(200).json(value);
        })
        .catch(() => {
          res.status(400).send({ message: "Cannot create profile" });
        });
    } catch (error) {
      console.error(error);
    }
  },

  // [GET]
  getAllProfiles(req, res) {
    try {
      Profile.find()
        .then((value) => {
          res.status(200).json(value);
        })
        .catch(() => {
          res.status(400).json({ message: "No profiles have found" });
        });
    } catch (error) {
      console.error(error);
    }
  },

  getProfile(req, res) {
    try {
      Profile.findById(req.params.id)
        .then((value) => {
          res.status(200).json(value);
        })
        .catch(() => {
          res.status(400).json({ message: "No profile have found" });
        });
    } catch (error) {
      console.error(error);
    }
  },

  getProfileByType(req, res) {
    try {
      Profile.find({ userType: req.params.userType })
        .then((value) => {
          res.status(200).json(value);
        })
        .catch(() => {
          res.status(400).json({ message: "No profiles have found" });
        });
    } catch (error) {
      console.error(error);
    }
  },

  // [UPDATE]
  updateProfile(req, res) {
    try {
      Profile.findByIdAndUpdate(req.params.id, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        avatarUrl: req.body.avatarUrl,
        email: req.body.email,
        userType: req.body.userType,
      })
        .then(() => {
          res.status(200).json({ message: "Profile updated" });
        })
        .catch(() => {
          res.status(400).json({ message: "Cannot update profile" });
        });
    } catch (error) {
      console.error(error);
    }
  },

  // [DELETE]
  deleteProfile(req, res) {
    try {
      Profile.findByIdAndRemove(req.params.id)
        .then(() => {
          res.status(200).json({ message: "Profile removed" });
        })
        .catch(() => {
          res.status(400).json({ message: "Cannot delete profile" });
        });
    } catch (error) {
      console.log(error);
    }
  },
};
