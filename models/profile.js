const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProfileSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Firstname is required"],
  },
  lastName: {
    type: String,
    required: [true, "Lastname is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  avatarUrl: {
    type: String,
    required: [true, "Avatar is required"],
  },
  dateJoined: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  userType: {
    type: String,
    required: [true, "UserType is required"],
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
