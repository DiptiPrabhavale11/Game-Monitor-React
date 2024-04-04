const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
const loginRouter = require("express").Router();
const User = require("../models/AppUser");

loginRouter.post("/", async (request, response) => {
    const { username, password } = request.body;
    const decryptedBytes = CryptoJS.AES.decrypt(password, process.env.SECRET);
    const decryptPassword = decryptedBytes.toString(CryptoJS.enc.Utf8);

    const user = await User.findOne({ username });
    const decryptedHashByte = CryptoJS.AES.decrypt(user.passwordHash, process.env.SECRET);
    const decryptedHash = decryptedHashByte.toString(CryptoJS.enc.Utf8);
    const passwordCorrect = user === null
        ? false
        : decryptPassword === decryptedHash;

    if (!(user && passwordCorrect)) {
        return response.status(401).json({
            error: "invalid username or password"
        });
    }

    const userForToken = {
        username: user.username,
        id: user._id,
    };

    const token = jwt.sign(userForToken, process.env.SECRET);

    response
        .status(200)
        .send({ token, username: user.username, canAccess: user.canAccess });
});

module.exports = loginRouter;