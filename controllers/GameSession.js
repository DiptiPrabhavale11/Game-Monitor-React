
const gameSessionRouter = require("express").Router();
const GameSession = require("../models/GameSession");
const ErrorGameSession = require("../models/ErrorGameSession");
const express = require("express");
const app = express();
app.use(express.json());
const JsonConverter = require("../data-transformations/JsonConverter");
const Validator = require("../Utils/validations");
const GameSessionService = require("../services/GameSessionService");
const GameSessionErrorService = require("../services/GameSessionErrorService");
gameSessionRouter.post("/", async (request, response) => {
    if (!request.body || !request.body.metricsList)
        return response.status(400).send("Incorrect Request body!");
    try {
        const convertedJson = await JsonConverter(request.body);
        if (Validator.validateLog(convertedJson)) {
            return GameSessionService.saveGameSession(request, convertedJson, response);
        } else {
            return GameSessionErrorService.saveErrorGameSession(request, convertedJson, response);
        }
    } catch (err) {
        console.error(err);
        response.status(500).send("Error storing objects.");
    }
});

gameSessionRouter.get("/", async (request, response) => {
    const gameSessions = await GameSession.find({})
        .populate("levelSessions", {});
    response.json(gameSessions);
});

gameSessionRouter.get("/errors", async (request, response) => {
    const errorGameSessions = await ErrorGameSession.find({})
        .populate("levelSessions", {});
    response.json(errorGameSessions);
});

module.exports = gameSessionRouter;


