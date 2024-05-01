
const gameSessionRouter = require("express").Router();
const GameSession = require("../models/GameSession");
const LevelSession = require("../models/LevelSession");
const ErrorGameSession = require("../models/ErrorGameSession");
const ErrorLevelSession = require("../models/ErrorLevelSession");
const Filters = require("../Utils/filters");
const express = require("express");
const app = express();
app.use(express.json());
const JsonConverter = require("../data-transformations/JsonConverter");
const Validator = require("../Utils/validations");
const GameSessionService = require("../services/GameSessionService");
const APIConstants = require("../Constants/APIConstants");

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
        });
    }
};

gameSessionRouter.post("/", async (request, response) => {
    saveGame(request, response);
});

gameSessionRouter.get("/", async (request, response) => {
    const gameSessions = await fetchGameSessions();
    response.json(gameSessions);
});

gameSessionRouter.get("/errors", async (request, response) => {
    const errorGameSessions = await ErrorGameSession.find({})
        .populate("levelSessions", {});
    response.json(errorGameSessions);
});

gameSessionRouter.post("/popular-levels", async (request, response) => {
    const days = request.body.days;
    const gameSessions = await fetchGameSessions();
    const levels = [];
    gameSessions.forEach(game => levels.push(...game.levelSessions));
    const dayWisePopoularity = {};
    for (let day in days) {
        const filteredData = Filters.lastNDaysLevelData(levels, APIConstants.USER_INTERACTIONS, 0, "timeStamp", Number(days[day]));
        //Generate level object with it's count
        let levelObj = Filters.getCountHashmap(filteredData, APIConstants.LEVEL_NAME, { "levelSessionId": "_id" });
        // Sort levelObj based on count
        const levelArr = Filters.getSortedObject(levelObj, APIConstants.COUNT, APIConstants.LEVEL);
        // Extract top 3 levels
        dayWisePopoularity[days[day]] = Filters.getTopResults(levelArr, APIConstants.TOP_3);
    }
    response.json(dayWisePopoularity);
});

gameSessionRouter.post("/longest-levels", async (request, response) => {
    const days = request.body.days;
    const gameSessions = await fetchGameSessions();
    const levels = [];
    gameSessions.forEach(game => levels.push(...game.levelSessions));
    const dayWiseLongestLevel = {};
    for (let day in days) {
        const filteredData = Filters.lastNDaysLevelData(levels, APIConstants.USER_INTERACTIONS, 0, "timeStamp", Number(days[day]));
        //Generate level object with it's time difference
        let levelObj = Filters.getLevelTimeHashmap(filteredData, APIConstants.LEVEL_NAME, { "levelSessionId": "_id" });
        // Sort levelObj based on time difference
        const levelArr = Filters.getSortedObject(levelObj, APIConstants.TIME_DIFF, APIConstants.LEVEL);
        // Extract top 3 levels with longest time difference
        dayWiseLongestLevel[days[day]] = Filters.getTopResults(levelArr, APIConstants.TOP_3);
    }
    response.json(dayWiseLongestLevel);
});

gameSessionRouter.post("/average-gamesession", async (request, response) => {
    const days = request.body.days;
    const gameSessions = await GameSession.find({});
    const dayWiseAvgGameSession = {};
    for (let day in days) {
        const filteredData = Filters.lastNDaysData(gameSessions, "startTime", Number(days[day]));
        let sum = 0;
        filteredData.forEach(game => {
            const start = game.startTime;
            const end = game.endTime;
            const diff = new Date(end).getTime() - new Date(start).getTime();
            sum = sum + diff;
        });
        const avg = (sum / filteredData.length).toFixed(2);
        dayWiseAvgGameSession[days[day]] = filteredData.length ? avg : 0;
    }
    response.json(dayWiseAvgGameSession);
});

gameSessionRouter.post("/common-errors", async (request, response) => {
    const days = request.body.days;
    const gameSessions = await fetchGameSessions();
    const errorMsgWithCount = GameSessionService.getMostCommonErrors(gameSessions,days);
    response.json(errorMsgWithCount);
});

const fetchGameSessions =async () => {
    return GameSession.find({})
        .populate("levelSessions", {});
};


module.exports = gameSessionRouter;


