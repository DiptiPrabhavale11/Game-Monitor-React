const ErrorGameSession = require("../models/ErrorGameSession");
const ErrorLevelSession = require("../models/ErrorLevelSession");
const GetUser = require("./UserService");

const saveErrorGameSession = async (request, convertedJson, response) => {
    const gameSession = new ErrorGameSession(convertedJson.gameSessionObj);
    const levels = convertedJson.levelSessions;
    let levelList = [];
    levels.forEach(level => {
        const levelSession = new ErrorLevelSession(level);
        levelList = levelList.concat(levelSession);
    });
    const records = await ErrorLevelSession.insertMany(levelList);
    records.forEach(r => {
        gameSession.levelSessions = gameSession.levelSessions.concat(r._id);
    });
    const token = request.body.token;
    if (token !== null) {
        const user = await GetUser(token);
        gameSession.user = user._id;
    }
    const gameRes = await gameSession.save();
    return response.status(201).json({ "gameSessionId": gameRes._id });
};

module.exports = { saveErrorGameSession };

