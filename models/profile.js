const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  userId: {
    type: String,
    required: [true, "userId is required"],
  },
  firstName: {
    type: String,
    required: [true, "firstName is required"],
  },
  lastName: {
    type: String,
    required: [true, "lastName is required"],
  },
  bio: {
    type: String,
    //required: [true, "bio is required"],
  },
  address: {
    title: {
      type: String,
    },
    coordinates: {
      latitude: {
        type: String,
      },
      longitude: {
        type: String,
      },
    },
  },
  contact: {
    email: {
      type: String,
    },
    number: {
      type: String,
    }
  },
});

module.exports = Profile = mongoose.model("profiles", ProfileSchema);
