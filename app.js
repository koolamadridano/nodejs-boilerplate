require("dotenv").config();

const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
const connectiongString = process.env.CONNECTION_STRING;

const app = express();
// routes
const _profile = require("./routes/profile");
const _user = require("./routes/user");

try {
  mongoose.connect(connectiongString).then(() => {
    console.log("MONGODB CONNECTED");
  });

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", _profile);
  app.use("/api", _user);

  app.listen(port, () => console.log("SERVER IS RUNNING"));
} catch (error) {
  console.log(error);
}
