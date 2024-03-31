
const gameSessionRouter = require("express").Router();
const GameSession = require("../models/GameSession");
const LevelSession = require("../models/LevelSession");
const ErrorGameSession = require("../models/ErrorGameSession");
const ErrorLevelSession = require("../models/ErrorLevelSession");
const express = require("express");
const app = express();
app.use(express.json());
const JsonConverter = require("../data-transformations/JsonConverter");
const Validator = require("../Utils/validations");
const GameSessionService = require("../services/GameSessionService");

const saveGame = async (request, response) => {
    if (!request.body || !request.body.metricsList)
        return response.status(400).send("Incorrect Request body!");

    const convertedJson = await JsonConverter(request.body);
    if (Validator.validateLog(convertedJson)) {
        GameSessionService.saveGameSession({
            request: request.body,
            convertedJson,
            response,
            gameSchema: GameSession,
            levelSchema: LevelSession,
            msg: "Logs stored Successfully!"
        }).then(sucessGame => {
            return response.status(201).json(sucessGame);
        }).catch(err => {
            console.error(err);
            return response.status(500).send("Error storing logs!");
        });
    } else {
        GameSessionService.saveGameSession({
            request: request.body,
            convertedJson,
            response,
            gameSchema: ErrorGameSession,
            levelSchema: ErrorLevelSession,
            msg: "There were some errors in log JSON, saved" +
                " successfully in error logs!"
        }).then(errorGame => {
            return response.status(201).json(errorGame);
        }).catch(err => {
            console.error(err);
            return response.status(500).send("Error storing logs!");
        })
    }
}


gameSessionRouter.post("/", async (request, response) => {
    saveGame(request, response);
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


