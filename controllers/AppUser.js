
const userRouter = require("express").Router();
const AppUser = require("../models/AppUser");
const CryptoJS = require("crypto-js");
const express = require("express");
const app = express();
app.use(express.json());

userRouter.post("/", async (request, response) => {
    const { username, password } = request.body;

    const passwordHash = CryptoJS.AES.encrypt(password, process.env.SECRET).toString();
    const user = new AppUser({
        username,
        passwordHash,
    });

    await user.save();

    response.status(201).json("Requested user Account is created");
});
userRouter.get("/", async (request, response) => {
    const users = await AppUser.find({});
    response.json(users);
});

module.exports = userRouter;


