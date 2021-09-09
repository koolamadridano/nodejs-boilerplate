const express = require("express");
const router = express.Router();

const Profile = require("../models/profile");

router.post("/profile", (req, res) => {
    try {
       // const { firstName, lastName, address, avatarUrl } = req.body;
        const newProfile = new Profile({
            firstName: req.body.firstName,
            lastName:  req.body.lastName,
            address: req.body.address,
            avatarUrl: req.body.avatarUrl,
            dateJoined: Date.now()
        });
        newProfile
            .save()
            .then((value) => res.json(value))
            .catch((error) => res.json(error));
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;