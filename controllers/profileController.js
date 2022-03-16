const Profile = require("../models/profile");

module.exports = {

  // [POST]
  async createProfile(req, res) {
    try {
      console.log(req.authorization);
      return Profile(req.body)
        .save()
        .then((value) => res.status(200).json(value))
        .catch((err) => res.status(400).send(err.errors));
    } catch (error) {
      console.error(error);
    }
  },

  // [GET]
  async getAllProfiles(req, res) {
    try {
      const role = req.query.role;
      return Profile.find({ role })
        .sort({ _id: -1 })
        .select({ _id: 0, __v: 0 })
        .then((value) => res.status(200).json(value))
        .catch((err) => res.status(400).json(err));
    } catch (error) {
      console.error(error);
    }
  },


  async getProfile(req, res) {
    try {
      const userId = req.query.userId;
      Profile.findOne({ userId })
        .select({ _id: 0, __v: 0 })
        .then((value) => {
          if (!value) 
            return res.status(400).json({ message: "userId not found" });
          return res.status(200).json(value);
        })
        .catch((err) => res.status(400).json(err));
    } catch (error) {
      console.error(error);
    }
  },

  // [UPDATE]
  async updateProfile(req, res) {
    try {
      const type = req.query.type;
      const userId = req.query.userId;

      if(type == "personal") {
          const { firstName, lastName, bio } = req.body;
          Profile.findOneAndUpdate(
            { userId },
            { firstName, lastName, bio },
          )
          .then((value) => {
            if (!value) 
              return res.status(400).json({ message: "userId not found" });
            return res.status(200).json({ message: "updated"});
          })
          .catch((err) => res.status(400).json(err));
      }

      if(type == "contact") {
          const { number, email } = req.body;
          Profile.findOneAndUpdate(
            { userId },
            {
              $set: {
                "contact.number": number,
                "contact.email": email,
              },
            },
          )
          .then((value) => {
            if (!value) 
              return res.status(400).json({ message: "userId not found" });
            return res.status(200).json({ message: "updated"});
          })
          .catch((err) => res.status(400).json(err));
      }

      if(type == "address") {
        const { title, coordinates } = req.body;
        Profile.findOneAndUpdate(
          { userId },
          {
            $set: {
              "address.title": title,
              "address.coordinates": coordinates,
            },
          },
        )
        .then((value) => {
          if (!value) 
            return res.status(400).json({ message: "userId not found" });
          return res.status(200).json({ message: "updated"});
        })
        .catch((err) => res.status(400).json(err));
    }

    } catch (error) {
      console.error(error);
    }
  },

  // [DELETE]
  async deleteProfile(req, res) {
    try {
      const userId = req.query.userId;
      Profile.findOneAndRemove({ userId })
        .then((value) => {
          if (!value) 
            return res.status(400).json({ message: "userId not found" });
          return res.status(200).json({ message: "removed"});
        })
        .catch((err) => res.status(400).json(err));
    } catch (error) {
      console.log(error);
    }
  },
};
