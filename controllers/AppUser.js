
const userRouter = require("express").Router();
const AppUser = require("../models/AppUser");
const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
app.use(express.json());

userRouter.post("/", async (request, response) => {
    const { username, password } = request.body;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

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


