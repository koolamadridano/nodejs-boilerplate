const express = require("express");
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;
const connectiongString = "mongodb+srv://demoUser:eu0mKG91RPCIwrFM@democluster.yqvyg.mongodb.net/test";


// routes
const _profile = require("./routes/profile");

try {
    mongoose.connect(connectiongString)
    .then(() => {
        console.log("MONGODB CONNECTED");
    });

    app.use(express.json());
    app.use(express.urlencoded({
      extended: true
    }));
    app.use("/api", _profile);
    app.listen(port, () => {
        console.log("SERVER RUNNING");
    });
} catch (error) {
    console.log(error);
}