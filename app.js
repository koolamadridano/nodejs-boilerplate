require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");

const { fileFilter } = require("./services/img-upload/fileFilter");
const storage = multer.diskStorage({});

const port = process.env.PORT || 5000;
const connectiongString = process.env.CONNECTION_STRING;
// const connectiongString =
//   "mongodb+srv://demoUser:eu0mKG91RPCIwrFM@democluster.yqvyg.mongodb.net/test";

const app = express();

const _profile = require("./routes/profile");
const _user = require("./routes/user");
const _img = require("./routes/img");

try {
  mongoose
    .connect(connectiongString)
    .then(() => console.log("SERVER IS CONNECTED TO MONGODB"))
    .catch(() => console.log("SERVE CANNOT CONNECT TO MONGODB"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(multer({ storage, fileFilter }).single("avatar"));

  app.use("/api", _profile);
  app.use("/api", _user);
  app.use("/api", _img);

  app.listen(port, () => console.log("SERVER IS NOW RUNNING"));
} catch (error) {
  console.log(error);
}
