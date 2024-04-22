const levelSessionRouter = require("express").Router();
const LevelSession = require("../models/LevelSession");
const express = require("express");
const app = express();
app.use(express.json());

levelSessionRouter.get("/", async (request, response) => {
    const levels = await LevelSession.find({});
    response.json(levels);
});

module.exports = levelSessionRouter;