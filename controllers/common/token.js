const jwt = require("jsonwebtoken");

module.exports = {
    signToken(key, secret, expiry) {
        return jwt.sign(
            { data: key },
            secret,
            { expiresIn: expiry }
        );
    }
}