require("dotenv").config();

const bcrypt = require("bcrypt");
const User = require("../models/user");
const { signToken } = require("./common/token");

//const { sendEmail } = require("../services/nodemailer/mail");
// sendEmail(
//   email,
//   "development.mail.ph@gmail.com",
//   "#AUTOMATED_NODEJS_MAIL #ByKOLYA",
//   "Account created",
//   "<b>Thank you for creating your account"
// );

module.exports = {
  async register(req, res) {
    try {
      const { email, password, role } = req.body;

      // VALIDATE IF EXISTED IN DATABASE
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).send({ message: "Email is currently used" });
      }
      
      // ENCRYPT PASSWORD
      const hashValue = await bcrypt.hash(password, 12);

      return User({ email, role, passwordHash: hashValue})
        .save()
        .then((value) => res.status(200).json({
          userId: value._id,
          role: value.role,
          email: value.email,
          createdAt: value.createdAt,
          token: signToken(value._id, process.env.ACCESS_TOKEN_SECRET, "2hr")
        }))
        .catch((err) => res.status(400).json(err));
     
    } catch (error) {
      console.log(error);
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;

      // VALIDATE IF EXISTED IN DATABASE
      let user = await User.findOne({ email })
      if (!user) {
        return res
          .status(400)
          .json({ message: "Account doesn't exist" });
      }

      // COMPARE PASSWORD
      const valid = await bcrypt.compare(password, user.passwordHash);
      if(!valid) {
        return res
          .status(400)
          .json({ message: "Email/Password is invalid" });
      }

      return res.status(200).json({
        userId: user._id,
        role: user.role,
        email: user.email,
        createdAt: user.createdAt,
        token: signToken(user._id, process.env.ACCESS_TOKEN_SECRET, "2hr")
      });
    } catch (error) {
      console.log(error);
    }
  },
};
