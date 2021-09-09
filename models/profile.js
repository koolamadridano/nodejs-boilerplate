const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProfileSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    avatarUrl: {
        type: String,
        required: true,
    },
    dateJoined:{
        type: Date,
        default: Date.now,
    }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);