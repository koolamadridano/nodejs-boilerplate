const bcrypt = require("bcrypt");

const User = require("../models/user");

module.exports = {
  // [POST]
  async createUser(req, res) {
    try {
      const { email, password } = req.body;
      let isExisted = await User.findOne({ email });
      if (isExisted) {
        return res.status(400).send({ message: "Email is currently used" });
      }
      // [CREATE]
      // @Description: Create if <email> did not exist
      await bcrypt.hash(password, 12).then(async (hashValue) => {
        await User({
          email: email,
          password: password,
          encryptedPassword: hashValue,
        })
          .save()
          .then(() => {
            return res.status(200).json({
              email: email,
              password: password,
              hash: hashValue,
            });
          })
          .catch(() => {
            return res.status(400).send({ message: "Cannot create user" });
          });
      });
    } catch (error) {
      console.log(error);
    }
  },
  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      let user = await User.findOne({ email });
      if (user) {
        await bcrypt.compare(
          password,
          user.encryptedPassword,
          function (err, isMatched) {
            //    console.log(err);
            if (isMatched) {
              return res.status(200).json(user);
            }
            return res
              .status(400)
              .send({ message: "Email and/or Password is invalid" });
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  },
};
