const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Username is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  encryptedPassword: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
    required: false,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
